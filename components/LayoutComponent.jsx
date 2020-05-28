import Head from "next/head";
import Nav from "./Nav";
import { Layout } from "antd";

const { Header, Footer, Content } = Layout;

const LayoutComponent = (props) => (
  <>
    <Head>
      <title>Ritik Srivastava | Full Stack Developer</title>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1, shrink-to-fit=no"
      />

      <meta name="title" content={`Ritik Srivastava | Full Stack Developer`} />
      <meta name="author" content="ritiksr25" />
      <meta
        name="description"
        content={`Ritik Srivastava (@ritiksr25), Full Stack developer, loves to code Javascript, from Ghaziabad, India, Core Team Member at Developer Student Clubs KIET, powered by Google Developers (DSCKIET): ${props.path}`}
      />
      <meta
        name="keywords"
        content="ritiksr25, ritiksr25 portfolio, portfolio, Ritik Srivastava, Full Stack Developer, MERN Developer, DSCKIET, Ghaziabad"
      />

      <meta name="theme-color" content="#000000" />
      <link rel="canonical" href={`https://ritiksr25.tech/${props.path}`} />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />

      <link rel="manifest" href="/site.webmanifest" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://ritiksr25.tech" />
      <meta
        property="og:title"
        content={`Ritik Srivastava | Full Stack Developer`}
      />
      <meta
        property="og:description"
        content={`Ritik Srivastava (@ritiksr25), Full Stack developer, loves to code Javascript, from Ghaziabad, India, Core Team Member at Developer Student Clubs KIET, powered by Google Developers (DSCKIET): ${props.path}`}
      />
      <meta property="og:image" content="/assets/photo.jpg" />
      <meta property="og:image:type" content="image/jpg" />
      <meta property="og:image:width" content="192" />
      <meta property="og:image:height" content="192" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://ritiksr25.tech" />
      <meta
        property="twitter:title"
        content={`Ritik Srivastava | Full Stack Developer | ${props.path}`}
      />
      <meta
        property="twitter:description"
        content={`Ritik Srivastava (@ritiksr25), Full Stack developer, loves to code Javascript, from Ghaziabad, India, Core Team Member at Developer Student Clubs KIET, powered by Google Developers (DSCKIET): ${props.path}`}
      />
      <meta property="twitter:image" content="/assets/photo.jpg" />

      <meta
        name="google-site-verification"
        content="-V6HnViUv9byKilJ5nbBsZYijb57xnK8sFm9fMNB5l4"
      />

      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:700&display=swap"
        rel="stylesheet"
      />
    </Head>
    <script>{(console.log = console.warn = console.error = () => {})}</script>

    <Layout>
      <Header>
        <Nav />
      </Header>
      <Content
        className="site-layout"
        style={{ padding: "0 50px", marginTop: 64 }}
      >
        {props.children}
      </Content>
      <Footer style={{ textAlign: "center" }}>
        {/* ©2020 Ritik Srivastava (@ritiksr25) */}
        Designed with ❤️️ by
        <a
          href="https://github.com/ritiksr25"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "rgba(0, 0, 0, 0.65)" }}
        >
          {" "}
          Ritik Srivastava (@ritiksr25)
        </a>
      </Footer>
    </Layout>

    <style jsx global>{`
      body {
        font-family: "Montserrat";
      }

      .ant-layout-header {
        padding: 0 0;
      }

      .main_title_index {
        font-size: 50px;
      }

      .main_subtitle_index {
        font-size: 25px;
      }

      .contactlink {
        font-size: 25px;
        color: gray;
        margin: 10px;
      }

      .git:hover {
        color: black;
      }

      .linkedin:hover {
        color: #0e74bd;
      }

      .email:hover {
        color: #fa0303;
      }

      .twitter:hover {
        color: #0a8ffc;
      }
      .site-layout {
        padding: 0 0 !important;
      }
    `}</style>
  </>
);

export default LayoutComponent;
