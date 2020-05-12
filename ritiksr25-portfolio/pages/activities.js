import Layout from "../components/Layout";

const Activities = () => (
  <Layout>
    <>
      <h2 class="display-4 page_title">Activities</h2>
      <hr class="my-4" />
      <div class="row">
        <div class="col-lg-4 col-sm-6 col-12 mt-2">
          <div class="card">
            <div class="card-body">
              <h2 class="card-title text-center pt-4">Top 10 Rank- HackVSIT</h2>
              <span class="platform">30 JAN 2020</span>
              <h5 class="card-subtitle text-center mb-4">
                National Level Hackathon
              </h5>
              <p class="card-text" style={{ "text-align": "justify;" }}>
                <li class="li-left">
                  Ranked in Top-10 among 250 teams in HackVSIT, national level
                  hackathon at Vivekanand Institute of Professional Studies, New
                  Delhi
                </li>
                <li class="li-left">
                  Worked on an offline android map app to help you when you have
                  a slow/no internet.
                </li>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  </Layout>
);

export default Activities;
