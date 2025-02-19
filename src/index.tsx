import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import TicketPage from "./pages/TicketPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App name={""} email={""} role={""}  />,
  },
  {
    path: "/login-page",
    element: <LoginPage />,
  },
  {
    path: "/ticket-page",
    element: <TicketPage />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
