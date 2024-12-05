import { CSSProperties } from "react";
import { CommentsFromApi } from "../../types/common";
import { CommentsLoader } from "../Loaders/CommentsLoader";

function CommentsWrapper({
    commentList,
    flag,
}: {
    commentList: CommentsFromApi[] | [];
    flag: boolean;
}) {
    const cmtBoxCustomized: CSSProperties = {
        visibility: flag ? "visible" : "hidden",
        display: flag ? "block" : "none",
    };
    return (
        <div
            className="h-auto w-full border-2 border-gray-300 rounded p-3 relative"
            style={cmtBoxCustomized}
        >
            {commentList.length !== 0 ? (
                <>
                    <span className="text-gray-400 absolute left-3 -top-3 z-10 bg-white">
                        Comments
                    </span>
                    {commentList.map((cmt) => (
                        <div key={cmt.id} className="border-b-orange-500 mb-4 p-2">
                            <h4 className="text-blue-700 font-semibold">{cmt.name}</h4>
                            <p className="text-gray-800">{cmt.body}</p>
                        </div>
                    ))}
                </>
            ) : (
                <CommentsLoader />
            )}
        </div>
    );
}

export default CommentsWrapper;
