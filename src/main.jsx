import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./styles/index.css";

import App from "./components/App";
import Men from "./components/Men";
import Women from "./components/Women";
import Jewelry from "./components/Jewelry";
import Cart from "./components/Cart";
import Product from "./components/Product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "men", element: <Men /> },
      { path: "women", element: <Women /> },
      { path: "jewelry", element: <Jewelry /> },
      { path: "cart", element: <Cart /> },
      { path: "product/:id", element: <Product /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
