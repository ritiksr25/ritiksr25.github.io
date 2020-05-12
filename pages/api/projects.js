import { projects } from "../../data/projects.json";

export default (req, res) => {
  res.json(JSON.stringify(projects));
};
