import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { TodoProvider } from "./context/TodoContext";
import "./index.css";
import App from "./App.jsx";
import Test from "./router/Test.jsx";
import Home from "./router/home.jsx";
import Hook from "./router/hook.jsx";

// import TodoList from "./components/todoList";

import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/test", element: <Test /> },
  { path: "/home", element: <Home /> },
  { path: "/hook", element: <Hook /> },
]);

import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <TodoProvider>
        <RouterProvider router={router} />
        {/* <App /> */}
      </TodoProvider>
    </ThemeProvider>
  </StrictMode>,
);
