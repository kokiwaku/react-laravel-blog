import { type Post } from "@/features/posts/types/post";
import { mockPosts } from "@/data/mockPosts";

export const fetchPosts = async (): Promise<Post[]> => {
    // TODO mockと本番データを差し替えられるように
    return Promise.resolve(mockPosts);
}