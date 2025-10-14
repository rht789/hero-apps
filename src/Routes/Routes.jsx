import React from "react";
import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import Root from "../Component/Root/Root";
import ErrorPage from "../Component/ErrorPage/ErrorPage";
import AllApps from "../Pages/AllApps/AllApps";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("/AppsData.json"),
      },
      {
        path: "/apps",
        Component: AllApps,
        loader: () => fetch("/AppsData.json"),
      },
      {
        path: "*",
        Component: ErrorPage,
      },
    ],
  },
]);
