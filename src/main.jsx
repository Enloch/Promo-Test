import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./pages/Main";
import Test from "./modules/000_Test";
import { presupuestObj, Precios } from "./modules/000_Test/datosPresupuesto";
import GlobalStyles from "./global/GlobalStyles";
import ResetStyles from "./global/ResetStyles";
import ErrorPage from "./error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/test",
    element: <Test {...presupuestObj} {...Precios} />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ResetStyles />
    <GlobalStyles />
    <RouterProvider router={router} />
  </React.StrictMode>
);
