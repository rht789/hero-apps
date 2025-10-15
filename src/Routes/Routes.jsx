import React from "react";
import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import Root from "../Component/Root/Root";
import ErrorPage from "../Component/ErrorPage/ErrorPage";
import AllApps from "../Pages/AllApps/AllApps";
import AppDetails from "../Pages/AppDetails/AppDetails";
import InstalledApp from "../Pages/InstalledApp/InstalledApp";

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
        path: "/apps",
        Component: AllApps,
      },
      {
        path: "/appDetails/:appId",
        Component: AppDetails,
      },
      {
        path: "/installedApps",
        Component: InstalledApp,
      },
      {
        path: "*",
        Component: ErrorPage,
      },
    ],
  },
]);
