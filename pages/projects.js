import Layout from "../components/Layout";

const Projects = () => (
  <Layout>
    <>
      <h2 class="display-4 page_title">Projects</h2>
      <hr class="my-4" />
      <div class="row">
        <div class="col-lg-4 col-sm-6 col-12 mt-2">
          <div class="card mb-4">
            <div class="card-body">
              <h2 class="card-title text-center pt-4">Travel Safe</h2>
              <span class="platform">NOV 2019 - PRESENT</span>
              <h5 class="card-subtitle text-center mb-4">Travel Made Easy!</h5>
              <p class="card-text" style={{ "text-align": "justify;" }}>
                <li class="li-left">
                  An application that displays a perfect route for travel
                  between two locations depending on the Crime Rates and
                  distance.
                </li>
                <li class="li-left">
                  Crime Data is available through an Admin Dashboard where he
                  can modify and analyse Crime Rates.
                </li>
                <li class="li-left">
                  Developed common Backend Server APIs for Admin Portal Website
                  and User Mobile app.
                </li>
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6 col-12 mt-2">
          <div class="card mb-4">
            <div class="card-body">
              <h2 class="card-title text-center pt-4">Uddeshhya NGO Website</h2>
              <span class="platform">JUL 2019 - AUG 2019</span>
              <h5 class="card-subtitle text-center mb-4">Website for NGO</h5>
              <p class="card-text" style={{ "text-align": "justify;" }}>
                <li class="li-left">
                  Developed Backend features for the website, including Admin
                  Portal for managing users, teams, projects,
                </li>
                <li class="li-left">
                  Developed a blood donation portal and a money donation system
                  with online payment.
                </li>
                <li class="li-left">Tech Stack Used: MERN</li>
              </p>
              <a href="https://Uddeshhya.org" target="_blank">
                <i class="fas fa-link"></i>
              </a>
              <a
                href="https://github.com/dsckiet/uddeshhya_backend"
                target="_blank"
              >
                <i class="fab fa-github git"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6 col-12 mt-2">
          <div class="card mb-4">
            <div class="card-body">
              <h2 class="card-title text-center pt-4">College Knowledge</h2>
              <span class="platform">APR 2019 - MAY 2019</span>
              <h5 class="card-subtitle text-center mb-4">
                Knowledge Sharing Directory
              </h5>
              <p class="card-text" style={{ "text-align": "justify;" }}>
                <li class="li-left">
                  It solves a common problem in our college where students were
                  not known to new technologies.
                </li>
                <li class="li-left">
                  It consists a list of upcoming and ongoing contests, blogs and
                  resources on trending technologies.
                </li>
                <li class="li-left">
                  Worked on implementing whole backend for website.
                </li>
              </p>
              <a href="https://ksd.netlify.com" target="_blank">
                <i class="fas fa-link"></i>
              </a>
              <a
                href="https://github.com/ritiksr25/KnowledgeSharingDirectoryProject"
                target="_blank"
              >
                <i class="fab fa-github git"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6 col-12 mt-2">
          <div class="card mb-4">
            <div class="card-body">
              <h2 class="card-title text-center pt-4">Pocket Kit</h2>
              <span class="platform">JUN 2019 - JUL 2019</span>
              <h5 class="card-subtitle text-center mb-4">
                A Multi Utility App
              </h5>
              <p class="card-text" style={{ "text-align": "justify;" }}>
                <li class="li-left">
                  A multi utility application for Books, Movies, News, Contests
                  and Blogs which users can view, add, like and comment as well
                </li>
                <li class="li-left">
                  Tech Stack used is Node.js, MongoDB, HTML/CSS/Bootstrap.
                </li>
                <li class="li-left">I worked on the backend of the website.</li>
              </p>
              <a href="https://pocketkit.herokuapp.com" target="_blank">
                <i class="fas fa-link"></i>
              </a>
              <a href="https://github.com/ritiksr25/pocketkit" target="_blank">
                <i class="fab fa-github git"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  </Layout>
);

export default Projects;
