import { type Post } from "@/features/posts/types/post";

export const mockPosts: Post[] = [
    {
        id: 1,
        title: "React入門ガイド",
        image: "https://via.placeholder.com/400x200",
        tags: ["React", "JavaScript", "Frontend"],
        publishedAt: new Date("2025-01-15"),
        updatedAt: new Date("2025-01-16"),
    },
    {
        id: 2,
        title: "TypeScript基礎講座",
        tags: ["TypeScript", "JavaScript"],
        publishedAt: new Date("2025-01-10"),
        updatedAt: new Date("2025-01-10"),
    },
    {
        id: 3,
        title: "Cloud Runデプロイ体験記",
        image: "https://via.placeholder.com/400x200",
        tags: ["GCP", "Cloud Run", "DevOps"],
        publishedAt: new Date("2025-01-05"),
        updatedAt: new Date("2025-01-08"),
    },
];