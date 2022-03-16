import { ReactComponent as FullLogo } from "../assets/codespace-logo.svg";
import { LogIn, Save, Share2 } from "react-feather";
import moment from "moment";
import copy from "copy-to-clipboard";
import { toast } from "react-toastify";
import Avatar from "./avatar";
import { useAuth } from "../contexts/auth-context";
import { Link } from "react-router-dom";
import { LOGIN_ROUTE } from "../routes";

const PlaygroundNavBar = ({ handleSaveCode, codeTitle, setCodeTitle, timestamp = "0" }) => {
    const { currentUser, signout } = useAuth();

    return (
        <nav className="fixed top-0 left-0 z-10 w-full h-20 bg-neutral-900 px-4">
            <div className="h-full p-4 mx-auto flex items-center md:px-0 justify-center md:justify-start space-x-4">
                <div className="flex items-center">
                    <FullLogo height={48} />
                    <div className="hidden md:block ml-4 border-l-2 border-neutral-700 pl-3">
                        <input
                            defaultValue={codeTitle}
                            onChange={(e) => setCodeTitle(e.target.value)}
                            onBlur={(e) => {
                                e.target.value ? setCodeTitle(e.target.value.trim()) : setCodeTitle("Untitled");
                            }}
                            placeholder="My Awesome Code"
                            className="text-neutral-100 bg-transparent outline-none font-medium tracking-wide text-xl leading-none"
                            required
                            form="saveForm"
                        />
                        <div className="text-neutral-500 text-sm">
                            Last modified {moment(new Date(parseInt(timestamp) || 0)).fromNow()}
                        </div>
                    </div>
                </div>

                <div className="flex-1"></div>

                {currentUser && (
                    <div className="flex text-neutral-500 space-x-1 font-medium">
                        <form
                            id="saveForm"
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleSaveCode();
                            }}
                        >
                            <button className="btn-secondary p-3">
                                <Save height={20} />
                                <span className="ml-1">Save</span>
                            </button>
                        </form>

                        <button
                            className="btn-secondary p-3"
                            onClick={() => {
                                copy(window.location.href);
                                toast.success("Link Copied to Clipboard", {
                                    position: "bottom-right",
                                    autoClose: 2000,
                                    theme: "dark",
                                });
                            }}
                        >
                            <Share2 height={20} />
                            <span className="ml-1">Share</span>
                        </button>
                        <Avatar signout={signout} currentUser={currentUser} />
                    </div>
                )}

                {!currentUser && (
                    <div className="flex text-neutral-500 space-x-1 font-medium">
                        <button
                            className="btn-secondary p-3"
                            onClick={() => {
                                copy(window.location.href);
                                toast.success("Link Copied to Clipboard", {
                                    position: "bottom-right",
                                    autoClose: 2000,
                                    theme: "dark",
                                });
                            }}
                        >
                            <Share2 height={20} />
                            <span className="ml-1">Share</span>
                        </button>
                        <Link to={LOGIN_ROUTE}>
                            <button className="btn-secondary p-3">
                                <LogIn height={20} />
                                <span className="ml-1">Login</span>
                            </button>
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default PlaygroundNavBar;
