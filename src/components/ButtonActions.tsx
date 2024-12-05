import { useState, Dispatch, SetStateAction, useCallback } from "react";
import { AxiosError } from "axios";
import API from "../services/api";
import { CommentsFromApi } from "../types/common";

function ButtonActions({
    postId,
    setComments,
    setFlag,
    flag,
}: {
    postId: number;
    setComments: Dispatch<SetStateAction<CommentsFromApi[] | []>>;
    setFlag: Dispatch<SetStateAction<boolean>>;
    flag: boolean;
}) {
    const [likes, setLikes] = useState<number>(0);

    const handleLikeCount = () => setLikes((lk) => lk + 1);

    const handleComments = useCallback(async () => {
        try {
            setFlag((flg) => !flg);
            const res = await API.getComments(postId);
            setTimeout(() => setComments(res.data), 1500);
        } catch (err) {
            const error = err as Error | AxiosError;
            console.log(error);
        }
    }, [postId, setComments]);

    return (
        <div className="flex flex-row justify-between px-4 pb-8">
            <button className="rounded" onClick={handleLikeCount}>
                Like {likes !== 0 ? <span>&nbsp;👍🏼{likes}</span> : ""}
            </button>
            <button onClick={handleComments} className="w-[180px]">
                {flag ? "Hide" : "Show"}&nbsp; Comments
            </button>
        </div>
    );
}

export default ButtonActions;
