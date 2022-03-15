import { ChevronDown, ChevronUp } from "react-feather";

const CommentCard = () => {
    return (
        <div className="bg-neutral-800 rounded p-3 text-slate-300 flex">
            <div className="mr-3">
                <div className="w-8 h-8 rounded-full bg-neutral-900">{/* <img src="" alt="" /> */}</div>
            </div>
            <div className="flex-1">
                <div className="">
                    <div className="text-neutral-200 font-bold leading-none">Title</div>
                    <div className="text-neutral-500 leading-none text-sm">Author</div>
                </div>
                <div className="leading-none my-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, dolores.
                </div>
                <div className="flex items-center">
                    <button className="btn-secondary p-2">
                        <ChevronUp width={18} height={18} />
                    </button>
                    <div className="text-neutral-300">10</div>
                    <button className="btn-secondary p-2">
                        <ChevronDown width={18} height={18} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CommentCard;
