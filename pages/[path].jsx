import { useRouter } from "next/router";
import Layout from "../components/Layout";
import CardContainer from "../components/CardContainer";
import Home from "./index";

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

Pages.getInitialProps = async (context) => {
  const path = context.req.url.split("/")[1];
  const origin = "https://ritiksr25.now.sh";
  const allowedPaths = ["experience", "projects", "skills", "activities"];
  if (allowedPaths.indexOf(path) === -1) {
    return { data: [] };
  }

  const res = await fetch(`${origin}/api/${path}`);
  const data = await res.json();

  return {
    data,
  };
};

export default Pages;
