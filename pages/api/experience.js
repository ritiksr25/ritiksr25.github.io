let experiences = [
  {
    title: "DSC KIET",
    subtitle: "Core Team Member",
    tenure: "FEB 2019 - PRESENT",
    details: [
      "Developer Student Clubs KIET powered by Google Developers is an initiative to learn, share and get productive using various cutting-edge technologies.",
      "I am a Core Team Member and work on projects as a Backend Developer.",
    ],
    github: "https://github.com/dsckiet",
    link: "https://dsckiet.tech/",
  },
  {
    title: "Angrybaaz",
    subtitle: "Backend Developer Intern",
    tenure: "JUN 2019 - AUG 2019",
    details: [
      "Developed Backend for a bulk e-commerce platform.",
      "Implemented online payment gateway, automated emails, multiple user-role management",
      "Used cost-effective services like Firebase for image upload, Netlify and Heroku for deployements",
    ],
    github: "",
    link: "https://angrybaaz.com/",
  },
];

export default (req, res) => {
  res.json(JSON.stringify(experiences));
};
