import { useState } from "react"
import { type Post } from "@/features/posts/types/post"
import { fetchPosts } from "@/features/posts/api/posts"

// postsページ向けカスタムフックの作成
export const usePosts = () => {
    const [posts, setPosts] = useState<Post[]>([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // postデータの読み込み
    const loadPosts = async () => {
        setLoading(true);
        try {
            const posts = await fetchPosts();
            setPosts(posts);
        } catch (error) {
            setError(error as string);
        } finally {
            setLoading(false);
        }
    }

    return { posts, loading, error, loadPosts }
}