import { useState, useEffect, useCallback } from "react";
import { AxiosError } from "axios";
import API from "../services/api";
import { PostsFromApi } from "../types/common";
import PostFeed from "./PostFeed";

export function PostsListsWrapper() {
    const [postList, setPostList] = useState<PostsFromApi[] | []>([]);

    const getPosts = useCallback(async () => {
        try {
            const res = await API.getPosts();
            setPostList(res.data);
        } catch (err) {
            const error = err as Error | AxiosError;
            console.log(error);
            throw new Error("error");
        }
    }, []);

    useEffect(() => {
        getPosts();
    }, [getPosts]);
    return (
        <div>
            {postList?.length === 0 ? (
                <div className="animate-pulse w-full p-5">Loading...</div>
            ) : (
                <>
                    {postList?.map((post) => (
                        <PostFeed post={post} key={post.id} />
                    ))}
                </>
            )}
        </div>
    );
}
