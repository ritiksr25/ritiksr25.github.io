let activities = [
  {
    title: "Top 10 Rank- HackVSIT",
    subtitle: "National Level Hackathon",
    tenure: "30 JAN 2020",
    details: [
      "Ranked in Top-10 among 250 teams in HackVSIT, national level hackathon at Vivekanand Institute of Professional Studies, New Delhi",
      "Worked on an offline android map app to help you when you have a slow/no internet.",
    ],
    github: "",
    link: "",
  },
];

export default (req, res) => {
  res.json(JSON.stringify(activities));
};
