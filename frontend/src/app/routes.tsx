import { createBrowserRouter, RouterProvider } from "react-router-dom";

export const createAppRouter = () => {
  return createBrowserRouter([
    {
      path: "/",
      element: <div>Home</div>,
    },
    {
      path: "/posts",
      element: <div>Posts</div>,
    },
    {
      path: "/posts/:id",
      element: <div>Posts detail</div>,
    },
    {
      path: "/contact",
      element: <div>Contact</div>,
    },
    {
      path: "/profile",
      element: <div>Profile</div>,
    },
    {
      path: "*",
      element: <div>404</div>,
    },
  ]);
}

export const AppRouter = () => {
  const router = createAppRouter();
  return <RouterProvider router={router} />;
}