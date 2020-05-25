import Link from "next/link";
import { Menu } from "antd";

const Nav = (props) => {
  let { path } = props;
  return (
    <>
      {/* <div className="logo" /> */}
      <Menu theme="light" mode="horizontal" defaultSelectedKeys={[path]}>
        <Menu.Item style={{ color: "black" }}>
          <Link href="/">
            <a>Ritik Srivastava</a>
          </Link>
        </Menu.Item>

        <Menu.Item key="5" style={{ float: "right" }}>
          <a href="/Resume.pdf" target="_blank" rel="noreferrer noopener">
            Resume
          </a>
        </Menu.Item>
        <Menu.Item key="achievements" style={{ float: "right" }}>
          <Link href="/[path]" as="achievements">
            <a>Achievements</a>
          </Link>
        </Menu.Item>

        <Menu.Item key="projects" style={{ float: "right" }}>
          <Link href="/[path]" as="projects">
            <a>Projects</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="experience" style={{ float: "right" }}>
          <Link href="/[path]" as="experience">
            <a>Experience</a>
          </Link>
        </Menu.Item>
      </Menu>
    </>
  );
};

export default Nav;
