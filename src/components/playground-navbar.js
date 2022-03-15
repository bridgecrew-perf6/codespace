import { ReactComponent as FullLogo } from "../assets/codespace-logo.svg";
import { Heart, MessageSquare, Save, Share2, UserPlus } from "react-feather";
import { useState } from "react";
import copy from "copy-to-clipboard";
import { toast } from "react-toastify";

const PlaygroundNavBar = ({setCommentSectionOpen}) => {
    const [codeTitle, setCodeTitle] = useState("Untitled");

    return (
        <nav className="fixed top-0 left-0 z-10 w-full h-20 bg-neutral-900 px-4">
            <div className="h-full p-4 mx-auto flex items-center md:px-0 justify-center md:justify-start space-x-4">
                <div className="flex items-center">
                    <FullLogo height={48} />
                    <div className="hidden md:block ml-4 border-l-2 border-neutral-700 pl-3">
                        <input
                            value={codeTitle}
                            onChange={(e) => setCodeTitle(e.target.value)}
                            onBlur={(e) => {
                                e.target.value ? setCodeTitle(e.target.value) : setCodeTitle("Untitled");
                            }}
                            className="text-neutral-100 bg-transparent outline-none font-medium tracking-wide text-xl leading-none"
                        ></input>
                        <div className="text-sm leading-none text-neutral-500">@goodBits</div>
                    </div>
                </div>

                <div className="flex-1"></div>

                <div className="flex text-neutral-500 space-x-1 font-medium">
                    <div className="btn-secondary">
                        <Save height={20} />
                        <span className="ml-1">Save</span>
                    </div>
                    {/* <div className="btn-secondary">
                        <UserPlus height={20} />
                        <span className="ml-1">Follow</span>
                    </div> */}
                    <div className="btn-secondary">
                        <Heart height={20} />
                        <span className="ml-1">120</span>
                    </div>
                    <div className="btn-secondary" onClick={()=>setCommentSectionOpen(true)}>
                        <MessageSquare height={20} />
                        <span className="ml-1">30</span>
                    </div>
                    <button
                        className="btn-secondary"
                        onClick={() => {
                            copy(window.location.href);
                            toast.success("Link Copied to Clipboard", {
                                position: "bottom-center",
                                autoClose: 2000,
                                theme:"dark"
                            });
                        }}
                    >
                        <Share2 height={20} />
                    </button>
                </div>

                <div>
                    <div className="h-12 w-12 rounded-full bg-neutral-700"></div>
                </div>
            </div>
        </nav>
    );
};

export default PlaygroundNavBar;
