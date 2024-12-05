import { CSSProperties } from "react";
import { CommentsFromApi } from "../types/common";

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
        <div className="h-auto w-full border rounded p-3" style={cmtBoxCustomized}>
            {commentList.length !== 0 ? (
                <>
                    {commentList.map((cmt) => (
                        <div key={cmt.id} className="border-b-orange-500 mb-4">
                            <h4 className="text-blue-700 font-semibold">{cmt.name}</h4>
                            <p className="text-gray-800">{cmt.body}</p>
                        </div>
                    ))}
                </>
            ) : (
                <div className="animate-pulse p-2">
                    <div className="rounded h-6 w-1/4 bg-slate-200 mb-4"></div>
                    <div className="rounded h-8 w-3/4 bg-slate-200"></div>
                </div>
            )}
        </div>
    );
}

export default CommentsWrapper;
