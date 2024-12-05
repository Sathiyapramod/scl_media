export interface CommentsFromApi {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}
export interface PostsFromApi {
    userId: number;
    id: number;
    title: string;
    body: string;
}
