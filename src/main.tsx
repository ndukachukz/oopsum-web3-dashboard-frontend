import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "@/components/root-layout";
import Dashboard from "./pages/dashboard";

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
        element: <Dashboard />,
      },
      {
        path: "/trading",
        element: <Dashboard />,
      },
      {
        path: "/watchlist",
        element: <Dashboard />,
      },
      {
        path: "/academy",
        element: <Dashboard />,
      },
      {
        path: "/profile",
        element: <Dashboard />,
      },
      {
        path: "/wallet",
        element: <Dashboard />,
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
