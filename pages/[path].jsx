import { useRouter } from "next/router";
import Layout from "../components/Layout";
import CardContainer from "../components/CardContainer";

const Pages = (props) => {
  const router = useRouter();
  const { path } = router.query;
  return (
    <Layout path={path}>
      <CardContainer path={path.toUpperCase()} data={props.data} />
    </Layout>
  );
};

Pages.getInitialProps = async (context) => {
  let origin = context.req.headers.host;

  if (!origin.includes("http")) {
    if (origin.includes("localhost")) {
      origin = `http://${origin}`;
    } else {
      origin = `https://${origin}`;
    }
  }

  const path = context.req.url.split("/")[1];
  const res = await fetch(`${origin}/api/${path}`);
  const data = await res.json();

  return {
    data,
  };
};

export default Pages;
