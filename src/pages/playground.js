import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import getCodeByID from "../api/playground/getCodeByID";
import saveCode from "../api/playground/saveCode";
import CodeEditor from "../components/code-editor";
import CommentSection from "../components/comments/comment-section";
import PlaygroundNavBar from "../components/playground-navbar";
import { ReactComponent as Logo } from "../assets/codespace-logo-mono.svg";
import { toast } from "react-toastify";
import { useAuth } from "../contexts/auth-context";

const Playground = () => {
    const [navVisible, setNavVisible] = useState(true);
    const [commentSectionOpen, setCommentSectionOpen] = useState(false);
    const [code, setCode] = useState({
        html: "",
        js: "",
        css: "",
        title: "",
        updatedAt: 0,
    });
    const params = useParams();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);

    function setCodeTitle(newTitle = "Untitled") {
        setCode((old) => ({ ...old, title: newTitle }));
    }

    useEffect(async () => {
        let codeID = params.codeID;
        try {
            let docRef = await getCodeByID(codeID);
            if (docRef.exists()) {
                let data = await docRef.data();
                setCode(data);
                setIsLoading(false);
            } else {
                navigate("/404");
            }
        } catch (error) {}
    }, [params]);

    function handleSaveCode() {
        let codeID = params.codeID;
        let promise = saveCode(codeID, code);
        toast.promise(
            promise,
            {
                pending: {
                    render() {
                        return "Saving Code";
                    },
                },
                success: {
                    render() {
                        return "Code Save Successfully";
                    },
                },
                error: {
                    render({ data }) {
                        return data.message;
                    },
                },
            },
            {
                theme: "dark",
                autoClose: 2000,
                position: "bottom-right",
            }
        );
    }

    return isLoading ? (
        <main className="w-screen h-screen flex flex-col items-center justify-center">
            <div className="flex items-center mr-4 animate-pulse">
                <Logo className="fill-neutral-300" height={48} />
            </div>
        </main>
    ) : (
        <>
            <div className={navVisible ? "" : "hidden"}>
                <PlaygroundNavBar
                    handleSaveCode={handleSaveCode}
                    setCodeTitle={setCodeTitle}
                    codeTitle={code.title}
                    timestamp={code.updatedAt}
                />
            </div>
            <main
                className={
                    navVisible
                        ? "mt-20 mb-16 md:mb-0 flex h-[calc(100vh-5rem)] w-full"
                        : "mb-16 md:mb-0 flex h-screen w-full"
                }
            >
                <div className="flex flex-1 overflow-hidden">
                    <CodeEditor {...{ setNavVisible, navVisible, setCode, code }} />
                </div>
                <div
                    className={
                        commentSectionOpen
                            ? "w-full sm:w-[35%] min-w-[28rem] left-0 sm:left-auto fixed h-screen top-0 right-0 shadow-2xl z-10"
                            : "hidden fixed"
                    }
                >
                    <CommentSection setCommentSectionOpen={setCommentSectionOpen} />
                </div>
            </main>
        </>
    );
};

export default Playground;
