import Layout from "../components/Layout";

const Home = () => (
  <Layout>
    <>
      <h2 class="display-4 main_title_index">
        Hey! I am <span class="highlight"> Ritik Srivastava</span>
      </h2>
      <h4 class="lead">A passionate web developer, from Ghaziabad, India.</h4>

      <hr class="my-4" />
      <p class="main_intro">
        <a
          href="https://linkedin.com/in/ritiksr25"
          target="_blank"
          class="contactlink"
        >
          <span class="fab fa-linkedin"></span>
        </a>
        <a
          href="https://github.com/ritiksr25"
          target="_blank"
          class="contactlink"
        >
          <span class="fab fa-github git1"></span>
        </a>
        <a
          href="mailto://ritiksr25@gmail.com"
          target="_blank"
          class="contactlink"
        >
          <span class="fas fa-envelope"></span>
        </a>
        <a
          href="https://twitter.com/ritiksr25"
          target="_blank"
          class="contactlink"
        >
          <span class="fab fa-twitter"></span>
        </a>
        <a
          href="https://facebook.com/ritiksr25"
          target="_blank"
          class="contactlink"
        >
          <span class="fab fa-facebook"></span>
        </a>

        <a
          href="https://instagram.com/_ritiksr25"
          target="_blank"
          class="contactlink"
        >
          <span class="fab fa-instagram"></span>
        </a>
      </p>
    </>
  </Layout>
);

export default Home;
