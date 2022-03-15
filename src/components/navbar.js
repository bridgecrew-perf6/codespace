import { ReactComponent as FullLogo } from "../assets/codespace-logo.svg";
import { ReactComponent as TrendingIcon } from "../assets/fire.svg";
import { ReactComponent as NetworkIcon } from "../assets/earth.svg";
import { ReactComponent as CodeIcon } from "../assets/code.svg";

const NavBar = () => {
    return (
        <nav className="fixed top-0 left-0 z-10 w-full h-20 bg-neutral-900 px-4">
            <div className="h-full p-4 mx-auto container flex items-center md:px-0 justify-center md:justify-start">
                <div className="flex items-center">
                    <FullLogo height={48} />
                    <span className="hidden md:block ml-4 text-neutral-500 font-medium tracking-wide text-xl border-l-2 border-neutral-700 pl-3">
                        SPACE
                    </span>
                </div>

                <div className="hidden lg:flex space-x-4 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
                    <div className="text-neutral-500 hover:text-neutral-300 flex space-x-2 cursor-pointer group">
                        <TrendingIcon className="fill-neutral-500 group-hover:fill-neutral-300" width={16} />
                        <span className="font-medium">Trending</span>
                    </div>
                    <div className="text-neutral-500 hover:text-neutral-300 flex space-x-2 cursor-pointer group">
                        <NetworkIcon className="fill-neutral-500 group-hover:fill-neutral-300" width={16} />
                        <span className="font-medium">Your Network</span>
                    </div>
                    <div className="text-neutral-500 hover:text-neutral-300 flex space-x-2 cursor-pointer group">
                        <CodeIcon className="fill-neutral-500 group-hover:fill-neutral-300" width={16} />
                        <span className="font-medium">Your Code</span>
                    </div>
                </div>

                <div className="flex-1"></div>

                <div>
                    <div className="h-12 w-12 rounded-full bg-neutral-700"></div>
                </div>
            </div>

            <div className="md:hidden bg-neutral-900 fixed left-0 bottom-0 w-full h-16 flex items-center justify-center space-x-16">
                <div className="text-neutral-500 hover:text-neutral-300 flex flex-col items-center space-y-1 cursor-pointer group">
                    <TrendingIcon className="fill-neutral-500 group-hover:fill-neutral-300" width={16} />
                </div>
                <div className="text-neutral-500 hover:text-neutral-300 flex flex-col items-center space-y-1 cursor-pointer group">
                    <NetworkIcon className="fill-neutral-500 group-hover:fill-neutral-300" width={16} />
                </div>
                <div className="text-neutral-500 hover:text-neutral-300 flex flex-col items-center space-y-1 cursor-pointer group">
                    <CodeIcon className="fill-neutral-500 group-hover:fill-neutral-300" height={16} width={16} />
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
