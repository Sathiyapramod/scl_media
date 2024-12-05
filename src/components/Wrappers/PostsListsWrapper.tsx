import { useState, useEffect, useCallback } from "react";
import { AxiosError } from "axios";
import API from "../../services/api";
import { PostsFromApi } from "../../types/common";
import PostFeed from "../PostFeed";
import { PostsLoader } from "../Loaders/PostsLoader";

export function PostsListsWrapper() {
    const [postList, setPostList] = useState<PostsFromApi[] | []>([]);

    const getPosts = useCallback(async () => {
        try {
            const res = await API.getPosts();
            setTimeout(() => setPostList(res.data), 1500);
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
        <>
            {postList?.length === 0 ? (
                <PostsLoader />
            ) : (
                <>
                    {postList?.map((post) => (
                        <PostFeed post={post} key={post.id} />
                    ))}
                </>
            )}
        </>
    );
}
