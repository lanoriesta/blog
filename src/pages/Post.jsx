import React, { useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";

const Post = () => {
  let { postId } = useParams();
  const [postData, setPostData] = useState(
    !localStorage.getItem("data")
      ? []
      : JSON.parse(localStorage.getItem("data"))
  );

  const decodeditems = (item) => {
    return item.toLowerCase().replace(" ", "-");
  };
  return (
    <div className="post-container">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <Link to="/posts">Posts</Link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            {postId}
          </li>
        </ol>
      </nav>

      {postData.map((post) => {
        return (
          <div className="post-container" key={post.id}>
            <h1 className="blog-title">
              {postId === decodeditems(post.title) && post.title}
            </h1>
            <p className="blog-date">
              {postId === decodeditems(post.title) && (
                <>
                  {post.date} | {post.author}
                </>
              )}
            </p>
            <p className="blog-body">
              {postId === decodeditems(post.title) && post.body}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Post;
