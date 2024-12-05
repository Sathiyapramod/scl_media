import { PostsListsWrapper } from "../components/Wrappers/PostsListsWrapper";

function Homepage() {
    return (
        <div className="min-h-screen p-10 bg-gray-100">
            <div className="text-2xl text-left mb-4 w-1/2 mx-auto">Posts Feed</div>
            <PostsListsWrapper />
        </div>
    );
}
export default Homepage;
