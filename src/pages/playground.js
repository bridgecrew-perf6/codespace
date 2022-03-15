import { useState } from "react";
import CodeEditor from "../components/code-editor";
import CommentSection from "../components/comments/comment-section";
import PlaygroundNavBar from "../components/playground-navbar";

const Playground = () => {
    const [navVisible, setNavVisible] = useState(true);
    const [commentSectionOpen, setCommentSectionOpen] = useState(false);
    return (
        <>
            <div className={navVisible ? "" : "hidden"}>
                <PlaygroundNavBar setCommentSectionOpen={setCommentSectionOpen} />
            </div>
            <main
                className={
                    navVisible
                        ? "mt-20 mb-16 md:mb-0 flex h-[calc(100vh-5rem)] w-full"
                        : "mb-16 md:mb-0 flex h-screen w-full"
                }
            >
                <div className="flex flex-1 overflow-hidden">
                    <CodeEditor {...{ setNavVisible, navVisible }} />
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
