import { useRouter } from "next/router";
import Layout from "../components/Layout";
import CardContainer from "../components/CardContainer";
import Home from "./index";
import fetch from "isomorphic-unfetch";

const Pages = (props) => {
  const router = useRouter();
  const { path } = router.query;
  const allowedPaths = ["experience", "projects", "skills", "achievements"];
  if (allowedPaths.indexOf(path) === -1) {
    return <Home />;
  } else {
    return (
      <Layout path={path}>
        <CardContainer path={path.toUpperCase()} data={props.data} />
      </Layout>
    );
  }
};

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { path: "experience" } },
      { params: { path: "projects" } },
      { params: { path: "skills" } },
      { params: { path: "achievements" } },
    ],
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const path = params.path;

  const allowedPaths = ["experience", "projects", "skills", "achievements"];
  if (allowedPaths.indexOf(path) === -1) {
    return { props: { data: [] } };
  }

  const res = await fetch(`https://ritiksr25.now.sh/api/${path}`);
  const data = await res.json();

  return {
    props: { data },
  };
};

export default Pages;
