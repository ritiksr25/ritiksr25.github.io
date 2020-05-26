import { useRouter } from "next/router";
import LayoutComponent from "../components/LayoutComponent";
import CardContainer from "../components/CardContainer";
import Custom404 from "./404";
import { achievements } from "../data/achievements.json";
import { projects } from "../data/projects.json";
import { experiences } from "../data/experience.json";

const Pages = (props) => {
  const router = useRouter();
  const { path } = router.query;
  const allowedPaths = ["experience", "projects", "achievements"];
  if (allowedPaths.indexOf(path) === -1) {
    return <Custom404 />;
  } else {
    return (
      <LayoutComponent path={path}>
        <CardContainer path={path.toUpperCase()} data={props.data} />
      </LayoutComponent>
    );
  }
};

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { path: "experience" } },
      { params: { path: "projects" } },
      { params: { path: "achievements" } },
    ],
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const path = params.path;
  const allowedPaths = ["experience", "projects", "achievements"];
  if (allowedPaths.indexOf(path) === -1) {
    return { props: { data: [] } };
  }

  let data = [];

  try {
    if (path === "experience") {
      data = experiences;
    } else if (path === "projects") {
      data = projects;
    } else if (path === "achievements") {
      data = achievements;
    }

    return {
      props: { data },
    };
  } catch (err) {
    return { props: { data } };
  }
};

export default Pages;
