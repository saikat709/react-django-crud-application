import React from "react";
import {
  createBrowserRouter,
  Route,
  Link,
} from "react-router-dom";
import BasicLayout from "../layouts/BasicLayout";
import HomePage from "../pages/HomePage";
import ChartPage from "../pages/ChartPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: ( <BasicLayout /> ),

    children: [
      {
        path: "/",
        element: (
          <HomePage />
        )
      },
      {
        path: "home",
        element: (
          <HomePage />
        )
      },
      {
        path: "graph",
        element: ( <ChartPage /> )
      },
    ]
  },
  
  {
    path: "/*",
    element: (
      <div>
        <h1> Page not found 404</h1>
      </div>
    )
  }
]);

export default router;