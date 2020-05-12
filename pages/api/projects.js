let projects = [
  {
    title: "Travel Safe",
    subtitle: "Travel Made Easy!",
    tenure: "NOV 2019 - PRESENT",
    details: [
      "An application that displays a perfect route for travel between two locations depending on the Crime Rates and distance.",
      "Crime Data is available through an Admin Dashboard where he can modify and analyse Crime Rates.",
      "Developed common Backend Server APIs for Admin Portal Website and User Mobile app.",
    ],
    github: "",
    link: "",
  },
  {
    title: "Uddeshhya NGO Website",
    subtitle: "Website for NGO",
    tenure: "JUL 2019 - AUG 2019",
    details: [
      "Developed Backend features for the website, including Admin Portal for managing users, teams, projects,",
      "Developed a blood donation portal and a money donation system with online payment.",
      "Tech Stack Used: MERN",
    ],
    github: "https://github.com/dsckiet/uddeshhya_backend",
    link: "https://uddeshhya.org/",
  },
  {
    title: "College Knowledge",
    subtitle: "Knowledge Sharing Directory",
    tenure: "APR 2019 - MAY 2019",
    details: [
      "It solves a common problem in our college where students were not known to new technologies.",
      "It consists a list of upcoming and ongoing contests, blogs and resources on trending technologies.",
      "Worked on implementing whole backend for website.",
    ],
    github: "https://github.com/ritiksr25/KnowledgeSharingDirectoryProject",
    link: "https://ksd.netlify.app/",
  },
  {
    title: "Pocket Kit",
    subtitle: "A Multi Utility App",
    tenure: "JUN 2019 - JUL 2019",
    details: [
      "A multi utility application for Books, Movies, News, Contests and Blogs which users can view, add, like and comment as well",
      "Tech Stack used is Node.js, MongoDB, HTML/CSS/Bootstrap.",
      "I worked on the backend of the website.",
    ],
    github: "https://github.com/ritiksr25/pocketkit",
    link: "https://pocketkit.herokuapp.com/",
  },
];

export default (req, res) => {
  res.json(JSON.stringify(projects));
};
