import { X } from "react-feather";
import CommentCard from "./comment-card";

const CommentSection = ({setCommentSectionOpen}) => {
    return (
        <div className="w-full h-full bg-neutral-900 top-0 border-l-2 border-neutral-800 flex flex-col">
            <div className="flex items-center justify-between text-neutral-500 p-2">
                <span>Comments</span>
                <button className="btn-secondary p-2" onClick={()=>setCommentSectionOpen(false)}>
                    <X width={24} height={24} />
                </button>
            </div>
            <div className="px-2 space-y-1 flex-1 overflow-auto pb-8">
                <CommentCard />
                <CommentCard />
                <CommentCard />
                <CommentCard />
                <CommentCard />
            </div>
        </div>
    );
};

export default CommentSection;
