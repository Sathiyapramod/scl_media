import { useState } from "react";
import commonWords from "../utils/common";
import CommentsWrapper from "./CommentsWrapper";
import { commonNames } from "../utils/common";
import ButtonActions from "./ButtonActions";
import { PostsFromApi, CommentsFromApi } from "../types/common";

function PostFeed({ post }: { post: PostsFromApi }) {
    const [comments, setComments] = useState<CommentsFromApi[] | []>([]);
    const [flag, setFlag] = useState<boolean>(false);

    const userName = commonNames[post?.userId?.toString()];
    return (
        <div
            key={post.id}
            className="w-1/2 mx-auto border border-gray-300 mb-6 p-4 shadow-xl rounded-2xl bg-white"
        >
            <div className="flex flex-row items-center gap-5 mb-4">
                <img
                    src={`${commonWords.imgApi}?random=${post.userId}`}
                    alt={`post from ${post.userId}`}
                    className="rounded-full w-[50px] h-[50px] shadow-sm"
                />
                <span className="text-blue-700 font-bold text-2xl">{userName}</span>
            </div>
            {/* <h1 className="mb-4">UserId: {post.userId}</h1> */}
            <h2 className="font-bold text-2xl mb-6">{post.title}</h2>
            <section className="text-gray-500 mb-3">{post.body}</section>
            <ButtonActions
                postId={post.id}
                setComments={setComments}
                setFlag={setFlag}
                flag={flag}
            />
            <CommentsWrapper commentList={comments} flag={flag} />
        </div>
    );
}

export default PostFeed;
