import { Link, NavLink } from "react-router-dom";
import blogLogo from "../assets/icons8-blog.svg";

const Header = () => {
  return (
    <div className="header-container">
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container">
          <Link to="blog">
            <img src={blogLogo} alt="blog-logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link text-light" to="blog">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-light" to="about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-light" to="createblog">
                  Create
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-light" to="posts">
                  Post
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
