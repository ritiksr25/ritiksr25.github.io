import { experiences } from "../../data/experience.json";

export default (req, res) => {
  res.json(JSON.stringify(experiences));
};
