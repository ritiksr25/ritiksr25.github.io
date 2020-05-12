import Head from "next/head";
import Nav from "./Nav";

const Layout = (props) => (
  <>
    <Head>
      <title>Ritik Srivastava | Full Stack Developer</title>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1, shrink-to-fit=no"
      />

      <meta name="title" content="Ritik Srivastava | Full Stack Developer" />
      <meta name="author" content="ritiksr25" />
      <meta
        name="description"
        content="Ritik Srivastava (@ritiksr25) is a Full Stack developer, loves to code Javascript, from Ghaziabad, India, Core Team Member at Developer Student Clubs KIET, powered by Google Developers (DSCKIET)"
      />
      <meta
        name="keywords"
        content="ritiksr25, portfolio, Ritik Srivastava, Full Stack Developer, MERN Developer, DSCKIET, Ghaziabad"
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://ritiksr25.github.io" />
      <meta
        property="og:title"
        content="Ritik Srivastava | Full Stack Developer"
      />
      <meta
        property="og:description"
        content="Ritik Srivastava (@ritiksr25) is a Full Stack developer, loves to code Javascript, from Ghaziabad, India, Core Team Member at Developer Student Clubs KIET, powered by Google Developers (DSCKIET)"
      />
      <meta property="og:image" content="/photo.jpeg" />
      <meta property="og:image:type" content="image/jpeg" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://ritiksr25.github.io" />
      <meta
        property="twitter:title"
        content="Ritik Srivastava | Full Stack Developer"
      />
      <meta
        property="twitter:description"
        content="Ritik Srivastava (@ritiksr25) is a Full Stack developer, loves to code Javascript, from Ghaziabad, India, Core Team Member at Developer Student Clubs KIET, powered by Google Developers (DSCKIET)"
      />
      <meta property="twitter:image" content="/photo.jpeg" />

      <link href="/photo.jpeg" rel="icon" type="image/jpeg" />

      <meta name="p:domain_verify" content="6ce16474fb22b1339fd84918ca5cee17" />
      <meta
        name="google-site-verification"
        content="XwrhUqc2JNLYV-TP896NMBjWtuLzIBguFll6W60f80o"
      />

      <link
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
        crossorigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:700&display=swap"
        rel="stylesheet"
      />
    </Head>
    <script>{(console.log = console.warn = console.error = () => {})}</script>
    <div className="fluid-container" style={{ "padding-top": "50px;" }}>
      <div className="container pt-4">
        <Nav path={props.path} />
        <div className="container">{props.children}</div>
      </div>
    </div>
    <style jsx global>{`
      body {
        font-family: "Montserrat";
      }

      .container {
        text-align: center;
      }

      .navbar {
        background-color: #bbb;
      }

      .page_title {
        font-size: 35px;
      }

      .main_title_index {
        margin-top: 20vh;
      }

      .card {
        border-radius: 7px;
      }

      .card-title {
        font-size: 25px;
      }

      .li-left {
        text-align: left;
        font-size: 15px;
        margin-bottom: 10px;
      }

      .contactlink {
        font-size: 25px;
        color: gray;
        margin: 5px;
      }

      .fa-link {
        color: rgb(18, 8, 156);
        font-size: 25px;
        margin: 10px;
      }

      .git {
        color: black;
        font-size: 25px;
        margin: 10px;
      }

      .fa-link:hover {
        color: rgb(18, 8, 156);
      }

      .git:hover {
        color: black;
      }

      .git1:hover {
        color: #0a0a0a;
      }

      .fa-linkedin:hover {
        color: #0e74bd;
      }

      .fa-envelope:hover {
        color: #fa0303;
      }

      .fa-twitter:hover {
        color: #0a8ffc;
      }

      .fa-facebook:hover {
        color: #0b0964d8;
      }

      .fa-instagram:hover {
        color: #fa066b;
      }

      .platform {
        top: 9px;
        right: -20px;
        font-size: 15px;
        border-radius: 2px;
        color: black;
        background: #bdbec0;
        text-align: center;
        position: absolute;
        padding: 1px 12px;
      }
    `}</style>

    <script
      src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
      integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
      integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
      integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
      crossorigin="anonymous"
    ></script>
  </>
);

export default Layout;
