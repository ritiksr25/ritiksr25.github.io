import Layout from "../components/Layout";

const Work = () => (
  <Layout>
    <>
      <h2 class="display-4 page_title">Work Experience</h2>
      <hr class="my-4" />
      <div class="row">
        <div class="col-lg-4 col-sm-6 col-12 mt-2">
          <div class="card mb-4">
            <div class="card-body">
              <h2 class="card-title text-center pt-4">DSC KIET</h2>
              <span class="platform">FEB 2019 - PRESENT</span>
              <h5 class="card-subtitle text-center mb-4">Core Team Member</h5>
              <p class="card-text" style={{ "text-align": "justify;" }}>
                <li class="li-left">
                  Developer Student Clubs KIET powered by Google Developers is
                  an initiative to learn, share and get productive using various
                  cutting-edge technologies.
                </li>
                <li class="li-left">
                  I am a Core Team Member and work on projects as a Backend
                  Developer.
                </li>
              </p>
              <a href="https://dsckiet.tech" target="_blank">
                <i class="fas fa-link"></i>
              </a>
              <a href="https://github.com/dsckiet" target="_blank">
                <i class="fab fa-github git"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-sm-6 col-12 mt-2">
          <div class="card mb-4">
            <div class="card-body">
              <h2 class="card-title text-center pt-4">Angrybaaz</h2>
              <span class="platform">JUN 2019 - AUG 2019</span>
              <h5 class="card-subtitle text-center mb-4">
                Backend Developer Intern
              </h5>
              <p class="card-text" style={{ "text-align": "justify;" }}>
                <li class="li-left">
                  Developed Backend for a bulk e-commerce platform.
                </li>
                <li class="li-left">
                  Implemented online payment gateway, automated emails, multiple
                  user-role management
                </li>
                <li class="li-left">
                  Used cost-effective services like Firebase for image upload,
                  Netlify and Heroku for deployements
                </li>
              </p>
              <a href="https://angrybaaz.com" target="_blank">
                <i class="fas fa-link"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  </Layout>
);

export default Work;
