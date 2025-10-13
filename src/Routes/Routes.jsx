import React from "react";
import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import Root from "../Component/Root/Root";
import ErrorPage from "../Component/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "*",
        Component: ErrorPage,
      },
    ],
  },
]);
