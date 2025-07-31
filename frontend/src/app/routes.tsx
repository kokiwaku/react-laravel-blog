import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./routes/app/contact/Contact"
import Posts from "./routes/app/posts/Posts"
import PostDetail from "./routes/app/posts/PostDetail"
import Profile from "./routes/app/profile/Profile"
import NotFound from "./routes/errors/NotFound"
import Home from "./routes/app/home/Home"

export const createAppRouter = () => {
  return createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/posts",
      element: <Posts />,
    },
    {
      path: "/posts/:id",
      element: <PostDetail />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
}

export const AppRouter = () => {
  const router = createAppRouter();
  return <RouterProvider router={router} />;
}