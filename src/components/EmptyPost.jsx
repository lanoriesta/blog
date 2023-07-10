import React from "react";
import { Link } from "react-router-dom";

const EmptyPost = () => {
  return (
    <div className="empty-container">
      <h3>Empty</h3>
      <Link to="/createblog" className="btn">
        Create Now
      </Link>
    </div>
  );
};

export default EmptyPost;
