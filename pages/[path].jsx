import { useRouter } from "next/router";
import Layout from "../components/Layout";
import CardContainer from "../components/CardContainer";
import Home from "./index";
import fetch from "isomorphic-unfetch";

const Pages = (props) => {
  const router = useRouter();
  const { path } = router.query;
  const allowedPaths = ["experience", "projects", "skills", "activities"];
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

Pages.getInitialProps = async ({ query }) => {
  const path = query.path;
  const origin = "https://ritiksr25.now.sh";

  const allowedPaths = ["experience", "projects", "skills", "activities"];
  if (allowedPaths.indexOf(path) === -1) {
    return { data: [] };
  }

  const res = await fetch(`https://ritiksr25.now.sh/api/${path}`);
  const data = await res.json();

  return {
    data,
  };
};

export default Pages;
