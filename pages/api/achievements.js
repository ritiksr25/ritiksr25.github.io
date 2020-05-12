import { achievements } from "../../data/achievements.json";

export default (req, res) => {
  res.json(JSON.stringify(achievements));
};
