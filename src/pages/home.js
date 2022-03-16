import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import createCode from "../api/playground/createCode";
import deleteCodeByID from "../api/playground/deleteCodeByID";
import getAllCodes from "../api/playground/getAllCodes";
import CodeCard from "../components/code-card";
import NavBar from "../components/navbar";
import { useAuth } from "../contexts/auth-context";
import { LOGIN_ROUTE, PLAYGROUND_ROUTE, HOME_ROUTE } from "../routes";

const Home = () => {
    const [creatingCode, setCreatingCode] = useState(false);
    const navigate = useNavigate();
    const { currentUser } = useAuth();
    const [allCodes, setAllCodes] = useState([]);

    useEffect(async () => {
        if (!currentUser) {
            navigate(LOGIN_ROUTE);
            return;
        }

        let snapshot = await getAllCodes(currentUser.uid);
        let allCodesList = [];
        snapshot.forEach((doc) => {
            allCodesList.push({ codeID: doc.id, ...doc.data() });
        });
        setAllCodes(allCodesList);
    }, [currentUser]);

    async function handleCreateNewCode() {
        try {
            setCreatingCode(true);
            let docRef = await createCode(currentUser.uid);
            setCreatingCode(false);
            navigate(PLAYGROUND_ROUTE + "/" + docRef.id);
        } catch (error) {
            toast.error(error, {
                theme: "dark",
            });
        }
    }

    async function handleDeleteCode(codeID) {
        let deltePromise = deleteCodeByID(codeID);
        toast.promise(
            deltePromise,
            {
                pending: {
                    render() {
                        return "Deleting Code";
                    },
                },
                success: {
                    render() {
                        return "Code Deleted Successfully";
                    },
                    onClose: () => {
                        window.location.reload();
                    },
                    autoClose: 1000,
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

    return (
        <>
            <NavBar creatingCode={creatingCode} handleCreateNewCode={handleCreateNewCode} />
            <main className="mt-20 mb-16 md:mb-0">
                {allCodes.length > 0 ? (
                    <div className="grid grid-cols sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4 pt-0">
                        {allCodes.map((code) => (
                            <Link to={PLAYGROUND_ROUTE + "/" + code.codeID}>
                                <CodeCard
                                    key={code.codeID}
                                    handleDeleteCode={handleDeleteCode}
                                    codeTitle={code.title}
                                    timestamp={code.updatedAt}
                                    code={code}
                                />
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 text-center -translate-y-1/2 text-neutral-500">
                        <div>Looks like you dont have anything here</div>
                        <div>Lets Create One!</div>
                    </div>
                )}
            </main>
        </>
    );
};

export default Home;
