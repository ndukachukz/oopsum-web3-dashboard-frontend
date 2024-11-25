/* eslint-disable react-refresh/only-export-components */
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const RootLayout = React.lazy(() => import("@/components/root-layout"));

const Dashboard = React.lazy(() => import("@/pages/dashboard"));
const Portfolio = React.lazy(() => import("@/pages/portfolio"));
const Trading = React.lazy(() => import("@/pages/trading"));
const Watchlist = React.lazy(() => import("@/pages/watchlist"));
const Academy = React.lazy(() => import("@/pages/academy"));
const Profile = React.lazy(() => import("@/pages/profile"));
const Wallet = React.lazy(() => import("@/pages/wallet"));

const router = createBrowserRouter([
  {
    path: "/",

    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/trading",
        element: <Trading />,
      },
      {
        path: "/watchlist",
        element: <Watchlist />,
      },
      {
        path: "/academy",
        element: <Academy />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/wallet",
        element: <Wallet />,
      },
    ],
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
