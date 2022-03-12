import { ReactComponent as FullLogo } from "../assets/codespace-logo.svg";
import { Heart, MessageSquare, Share2, UserPlus } from "react-feather";

const PlaygroundNavBar = () => {
    return (
        <nav className="fixed top-0 left-0 z-10 w-full h-20 bg-neutral-900 px-4">
            <div className="h-full p-4 mx-auto flex items-center md:px-0 justify-center md:justify-start space-x-4">
                <div className="flex items-center">
                    <FullLogo height={48} />
                    <div className="hidden md:block ml-4">
                        <div className="text-neutral-100 font-medium tracking-wide text-xl leading-none">
                            CODE TITLE
                        </div>
                        <div className="text-sm leading-none text-neutral-500">@goodBits</div>
                    </div>
                    
                </div>

                <div className="flex-1"></div>

                <div className="flex text-neutral-500 space-x-1 font-medium">
                    <div className="btn-secondary">
                        <UserPlus height={20}/>
                        <span className="ml-1">Follow</span>
                    </div>
                    <div className="btn-secondary">
                        <Heart height={20}/>
                        <span className="ml-1">120</span>
                    </div>
                    <div className="btn-secondary">
                        <MessageSquare height={20} />
                        <span className="ml-1">30</span>
                    </div>
                    <div className="btn-secondary">
                        <Share2 height={20} />
                    </div>
                </div>

                <div>
                    <div className="h-12 w-12 rounded-full bg-neutral-700"></div>
                </div>
            </div>
        </nav>
    );
};

export default PlaygroundNavBar;
