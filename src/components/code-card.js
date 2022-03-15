import {ChatAltIcon, HeartIcon} from "@heroicons/react/solid" ;
import {ReactComponent as DefaultThumbnail} from "../assets/codespace-logo-mono.svg" ;

const CodeCard = ({author="@goodbits",codeTitle="Untitled",likeCount = 0, commentCount = 0}) => {
    return (
        <div className="bg-neutral-800 hover:scale-[1.02] transition-all duration-100 cursor-pointer rounded overflow-hidden">
            <div className="">
                <div className="flex items-center justify-center py-16 bg-neutral-dark">
                    <DefaultThumbnail height={48} className="fill-neutral-900" />
                </div>
            </div>
            <div className="p-4 flex space-x-4 items-center">
                <div className="w-12 h-12 rounded-full bg-neutral-700" style={{backgroundImage:""}}></div>
                <div className="flex-1">
                    <div className="text-neutral-200 font-bold leading-none">{codeTitle}</div>
                    <div className="text-neutral-500 leading-none text-sm">{author}</div>
                    <div className="flex space-x-4 mt-2">
                        <div className="text-neutral-300 flex">
                            <HeartIcon height={16}/>
                            <div className="text-xs ml-1">{likeCount}</div>
                        </div>
                        <div className="text-neutral-300 flex">
                            <ChatAltIcon height={16}/>
                            <div className="text-xs ml-1">{commentCount}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CodeCard;
