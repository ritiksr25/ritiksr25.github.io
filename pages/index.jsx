import LayoutComponent from "../components/LayoutComponent";
import { Divider } from "antd";
import {
  GithubOutlined,
  MailFilled,
  TwitterOutlined,
  LinkedinFilled,
} from "@ant-design/icons";

const Home = (props) => (
  <LayoutComponent path="home">
    <>
      <div
        className="site-card-border-less-wrapper"
        style={{ textAlign: "center", height: "68vh" }}
      >
        <h1 className="main_title_index">Hey! I am Ritik Srivastava</h1>
        <h4 className="main_subtitle_index">Full Stack Web Developer</h4>

        <Divider />
        <p className="main_intro">
          <a
            href="https://linkedin.com/in/ritiksr25"
            target="_blank"
            rel="noreferrer noopener"
            className="contactlink linkedin"
          >
            <LinkedinFilled />
          </a>
          <a
            href="https://github.com/ritiksr25"
            target="_blank"
            rel="noreferrer noopener"
            className="contactlink git"
          >
            <GithubOutlined />
          </a>
          <a
            href="mailto://ritiksr25@gmail.com"
            target="_blank"
            rel="noreferrer noopener"
            className="contactlink email"
          >
            <MailFilled />
          </a>
          <a
            href="https://twitter.com/ritiksr25"
            target="_blank"
            rel="noreferrer noopener"
            className="contactlink twitter"
          >
            <TwitterOutlined />
          </a>
        </p>
      </div>
    </>
  </LayoutComponent>
);

export default Home;
