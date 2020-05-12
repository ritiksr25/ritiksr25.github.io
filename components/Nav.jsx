import Link from "next/link";

const Nav = (props) => {
  let { path } = props;
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <Link href="/">
        <a className="navbar-brand">Ritik Srivastava</a>
      </Link>
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
            <Link href="/">
              <a className="nav-link">
                Home{" "}
                {path === "home" ? (
                  <span className="sr-only">(current)</span>
                ) : null}
              </a>
            </Link>
          </li>
          <li
            className={path === "experience" ? "nav-item active" : "nav-item"}
          >
            <Link className="nav-link" href="/[path]" as="experience">
              <a className="nav-link">
                Experience{" "}
                {path === "experience" ? (
                  <span className="sr-only">(current)</span>
                ) : null}
              </a>
            </Link>
          </li>
          <li className={path === "projects" ? "nav-item active" : "nav-item"}>
            <Link className="nav-link" href="/[path]" as="projects">
              <a className="nav-link">
                Projects{" "}
                {path === "projects" ? (
                  <span className="sr-only">(current)</span>
                ) : null}
              </a>
            </Link>
          </li>
          <li className={path === "skills" ? "nav-item active" : "nav-item"}>
            <Link href="/[path]" as="skills">
              <a className="nav-link">
                Skills{" "}
                {path === "skills" ? (
                  <span className="sr-only">(current)</span>
                ) : null}
              </a>
            </Link>
          </li>
          <li
            className={path === "achievements" ? "nav-item active" : "nav-item"}
          >
            <Link href="/[path]" as="achievements">
              <a className="nav-link">
                Achievements{" "}
                {path === "achievements" ? (
                  <span className="sr-only">(current)</span>
                ) : null}
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/Resume.pdf">
              <a className="nav-link" target="_blank">
                Resume
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
