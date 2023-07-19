import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error-container">
      <h1>Page Not Found</h1>
      <Link to="blog">Back to Homepage</Link>
    </div>
  );
};

export default Error;
