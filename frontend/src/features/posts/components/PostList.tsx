import { useEffect } from "react";
import { usePostsContext } from "@/features/posts/contexts/PostsContext";

export const PostList = () => {
    const { posts, loading, error, loadPosts } = usePostsContext();

    if (loading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>Error: {error}</div>
    }

    useEffect(() => {
        loadPosts();
    }, []);

    return (
        <>
            <h2>Post List</h2>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </>
    )
}