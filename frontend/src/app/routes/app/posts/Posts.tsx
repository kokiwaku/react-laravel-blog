import { ContentLayout } from "@/components/layouts/ContentLayout";
import { PostList } from "@/features/posts/components/PostList";
import { PostsProvider } from "@/features/posts/contexts/PostsContext";

const Posts = () => {
  return (
    <>
      <ContentLayout>
        <PostsProvider>
          <PostList />
        </PostsProvider>
      </ContentLayout>
    </>
  );
};

export default Posts;
