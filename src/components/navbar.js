import { ReactComponent as FullLogo } from "../assets/codespace-logo.svg";
import { Loader, Plus } from "react-feather";
import { useAuth } from "../contexts/auth-context";
import Avatar from "./avatar";
import { Link } from "react-router-dom";
import { HOME_ROUTE } from "../routes";

const NavBar = ({ handleCreateNewCode, creatingCode }) => {
    const { currentUser, signout } = useAuth();

    return (
        <nav className="fixed top-0 left-0 z-10 w-full h-20 bg-neutral-900 px-4">
            <div className="h-full p-4 mx-auto container flex items-center md:px-0 justify-center md:justify-start">
                <div className="flex items-center">
                    <Link to={HOME_ROUTE}>
                        <FullLogo height={48} />
                    </Link>
                    <span className="hidden md:block ml-4 text-neutral-500 font-medium tracking-wide text-xl border-l-2 border-neutral-700 pl-3">
                        SPACE
                    </span>
                </div>

                <div className="flex-1"></div>

                <div className="flex space-x-2">
                    <div className="btn-secondary p-3" onClick={handleCreateNewCode}>
                        {creatingCode ? <Loader className="animate-spin" height={20} /> : <Plus height={20} />}

                        <span className="ml-1">Create Code</span>
                    </div>

                    <Avatar signout={signout} currentUser={currentUser} />
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
