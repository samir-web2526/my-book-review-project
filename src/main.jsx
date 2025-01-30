import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import BookDetails from "./components/BookDetails/BookDetails";
import ListedBooks from "./components/ListedBooks/ListedBooks";
import PagesToRead from "./components/PagesToRead/PagesToRead";
import Favourites from "./components/Favourites/Favourites";
import Blogs from "./components/Blogs/Blogs";
import ContextBook from "./components/ContextBook/ContextBook";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/detail/:id",
        element: <BookDetails></BookDetails>,
        loader: () => fetch("books.json"),
      },
      {
        path: "/list",
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch("books.json"),
      },
      {
        path: "/read",
        element: <PagesToRead></PagesToRead>,
        loader: () => fetch("books.json"),
      },
      {
        path: "/fav",
        element: <Favourites></Favourites>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextBook>
      <RouterProvider router={router} />
    </ContextBook>
  </StrictMode>
);
