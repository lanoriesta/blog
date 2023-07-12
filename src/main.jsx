import React from "react";
import ReactDOM from "react-dom/client";

//STYLES
import "./scss/styles.scss";
import * as bootstrap from "bootstrap";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  useParams,
} from "react-router-dom";

// Pages
import Home from "./pages/Home.jsx";
import CreateBlog from "./pages/CreateBlog";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Post from "./pages/Post";

//Layout
import RootLayout from "./layout/RootLayout";
import Error from "./pages/Error";
import PostLayout from "./layout/PostLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="blog" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="createblog" element={<CreateBlog />} />
      <Route path="posts" element={<PostLayout />}>
        <Route index element={<Posts />} />
        <Route path=":postId" element={<Post />} />
      </Route>
      <Route path="about" element={<About />} />

      <Route path="*" element={<Error />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
