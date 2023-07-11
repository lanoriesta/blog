import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error-container">
      <h1>Page Not Found</h1>
      <Link to="BLOG">Back to Homepage</Link>
    </div>
  );
};

export default Error;
