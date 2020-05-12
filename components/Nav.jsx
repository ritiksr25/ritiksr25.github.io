import NavLink from "react-bootstrap/NavLink";

const Nav = (props) => {
  let { path } = props;
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <NavLink className="navbar-brand" href="/">
        Ritik Srivastava
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className={path === "home" ? "nav-item active" : "nav-item"}>
            <NavLink className="nav-link" href="/">
              Home{" "}
              {path === "home" ? (
                <span className="sr-only">(current)</span>
              ) : null}
            </NavLink>
          </li>
          <li
            className={path === "experience" ? "nav-item active" : "nav-item"}
          >
            <NavLink className="nav-link" href="/experience">
              Experience{" "}
              {path === "experience" ? (
                <span className="sr-only">(current)</span>
              ) : null}
            </NavLink>
          </li>
          <li className={path === "projects" ? "nav-item active" : "nav-item"}>
            <NavLink className="nav-link" href="/projects">
              Projects{" "}
              {path === "projects" ? (
                <span className="sr-only">(current)</span>
              ) : null}
            </NavLink>
          </li>
          <li className={path === "skills" ? "nav-item active" : "nav-item"}>
            <NavLink className="nav-link" href="/skills">
              Skills{" "}
              {path === "skills" ? (
                <span className="sr-only">(current)</span>
              ) : null}
            </NavLink>
          </li>
          <li
            className={path === "activities" ? "nav-item active" : "nav-item"}
          >
            <NavLink className="nav-link" href="/activities">
              Activities{" "}
              {path === "activities" ? (
                <span className="sr-only">(current)</span>
              ) : null}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              href="/Resume.pdf"
              target="_blank"
            >
              Resume
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
