import NavLink from "react-bootstrap/NavLink";

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-light fixed-top">
    <NavLink class="navbar-brand" href="/">
      Ritik Srivastava
    </NavLink>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
          <NavLink class="nav-link" href="/">
            Home <span class="sr-only">(current)</span>
          </NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" href="/work">
            Experience
          </NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" href="/projects">
            Projects
          </NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" href="/skills">
            Skills
          </NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" href="/activities">
            Activities
          </NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" href="./files/Resume.pdf" target="_blank">
            Resume
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default Nav;
