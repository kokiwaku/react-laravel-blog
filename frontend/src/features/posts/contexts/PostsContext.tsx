import { createContext, useContext } from "react"
import { type Post } from "@/features/posts/types/post"
import { usePosts } from "@/features/posts/hooks/usePosts"

// コンテキストの型定義
interface PostsContextType {
    posts: Post[];
    loading: boolean;
    error: string | null;
    loadPosts: () => void;
}

// コンテキストの作成
export const PostsContext = createContext<PostsContextType | undefined>(undefined)

// コンテキストのプロバイダー
export const PostsProvider = ({ children }: { children: React.ReactNode }) => {
    const { posts, loading, error, loadPosts } = usePosts()

    return (
        <PostsContext.Provider value={{ posts, loading, error, loadPosts }}>
            {children}
        </PostsContext.Provider>
    )
}

// コンテキストのコンシューマー
export const usePostsContext = (): PostsContextType => {
    const context = useContext(PostsContext)

    if (!context) {
        throw new Error("usePosts must be used within a PostsProvider")
    }

    return context
}