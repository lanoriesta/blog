import React, { useEffect, useState } from "react";

const CreateBlog = () => {
  const date = new Date().toJSON().slice(0, 10);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [postAuthor, setPostAuthor] = useState("");
  const [posts, setPosts] = useState(
    !localStorage.getItem("data")
      ? []
      : JSON.parse(localStorage.getItem("data"))
  );

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(posts));
  }, [posts]);

  const addPost = (title, body, date, author) => {
    setPosts((currentTodos) => {
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(),
          date: date,
          title: title,
          author: author,
          body: body,
        },
      ];
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost(postTitle, postBody, date, postAuthor);
    setPostTitle("");
    setPostBody("");
    setPostAuthor("");

    alert("Succesfully created a post");
  };

  return (
    <div className="createblog-container">
      <h1>Create Blog</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="row">
          <div className="col-lg-6">
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={postTitle}
              onChange={(e) => setPostTitle(e.target.value)}
              required
            />
          </div>
          <div className="col-lg-6">
            <input
              type="text"
              name="author"
              placeholder="Author"
              value={postAuthor}
              onChange={(e) => setPostAuthor(e.target.value)}
              required
            />
          </div>
          <div className="col-12">
            <textarea
              name="desc"
              id="desc"
              placeholder="Body"
              value={postBody}
              onChange={(e) => setPostBody(e.target.value)}
              required
            ></textarea>
          </div>
        </div>
        <button className="btn" type="submit">
          Post
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
