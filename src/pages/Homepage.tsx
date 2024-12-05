import { PostsListsWrapper } from "../components/PostsListsWrapper";

function Homepage() {
    return (
        <div className="h-full p-10 bg-gray-100">
            <div className="text-2xl text-left mb-4 w-1/2 mx-auto">Posts Feed</div>
            <PostsListsWrapper />
        </div>
    );
}
export default Homepage;
