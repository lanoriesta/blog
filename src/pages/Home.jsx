import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Hi! Let's Talk</h1>
      <p className="home-desc">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni nulla
        neque error ex temporibus ipsam adipisci expedita. Nemo nisi hic ipsam
        aperiam amet incidunt perspiciatis accusantium est quis porro illum
        delectus consequatur aut error harum, iusto maiores accusamus
        consequuntur voluptates non. Sed natus quidem doloribus!
      </p>
      <Link className="btn" to="createblog">
        Post
      </Link>
    </div>
  );
};

export default Home;
