import React from "react";
import Login from "../pages/Login";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import App from "../App";
import LeftSidebar from "../components/LeftSidebar";
import PostContainer from "../components/PostContainer";
import RightSidebar from "../components/RightSidebar";
import useUserStore from "../stores/userStore";

const guestRouter = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "*", element: <Navigate to={"/"} /> },
]);

const userRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: (
          <>
            <LeftSidebar />
            <PostContainer />
            <RightSidebar />
          </>
        ),
      },
      { path: "friends", element: <p>Friends</p> },
      { path: "*", element: <Navigate to={"/"} /> },
    ],
  },
]);

function AppRouter() {
  const user = useUserStore((state) => state.user);
  const finalRouter = user ? userRouter : guestRouter;
  return <RouterProvider router={finalRouter} />;
}

export default AppRouter;
