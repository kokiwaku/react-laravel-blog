// postデータの型定義
export interface Post {
  id: number;
  title: string;
  image?: string;
  tags: string[];
  publishedAt: Date;
  updatedAt: Date;
}