import Link from "next/link";
import { Menu } from "antd";

const Nav = (props) => {
  let { path } = props;
  return (
    <>
      <div className="logo" />
      <Menu theme="light" mode="horizontal" defaultSelectedKeys={[path]}>
        <Menu.Item disabled>Ritik Srivastava</Menu.Item>
        <Menu.Item key="experience">
          <Link href="/[path]" as="experience">
            <a>Experience</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="projects">
          <Link href="/[path]" as="projects">
            <a>Projects</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="achievements">
          <Link href="/[path]" as="achievements">
            <a>Achievements</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="5">
          <a href="/Resume.pdf" target="_blank" rel="noreferrer noopener">
            Resume
          </a>
        </Menu.Item>
      </Menu>
    </>
  );
};

export default Nav;
