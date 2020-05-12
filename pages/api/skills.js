import { skills } from "../../data/skills.json";

export default (req, res) => {
  res.json(JSON.stringify(skills));
};
