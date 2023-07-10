import React, { useState } from "react";
import EmptyPost from "../components/EmptyPost";
import { Link, Outlet, useParams } from "react-router-dom";

const Posts = () => {
  const [postsData, setPostsData] = useState(
    !localStorage.getItem("data")
      ? []
      : JSON.parse(localStorage.getItem("data"))
  );

  let { postId } = useParams();

  return (
    <div className="posts-container">
      {postsData.length === 0 && <EmptyPost />}
      <div className="container">
        <div className="row">
          {postsData.map((post) => {
            return (
              <div
                className="post-container col-lg-3 col-md-6 my-3"
                key={post.id}
              >
                <h1 className="blog-title">{post.title}</h1>
                <p className="blog-date">
                  {post.date} | {post.author}
                </p>
                <p className="blog-body">
                  {post.body.substring(0, 100)}
                  <Link to={post.title.toLowerCase().replace(" ", "-")}>
                    ..more
                  </Link>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Posts;
