import Head from "next/head";
import Nav from "./Nav";
import { Layout } from "antd";

const { Header, Footer, Content } = Layout;

const LayoutComponent = (props) => (
  <>
    <Head>
      <title>Ritik Srivastava | Full Stack Developer | {props.path}</title>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1, shrink-to-fit=no"
      />
      <meta name="theme-color" content="#000000" />
      <link rel="apple-touch-icon" href="/photo.jpeg" />
      <link rel="icon" type="image/jpeg" href="/photo.jpeg"></link>
      <link rel="canonical" href={`https://ritiksr25.now.sh/${props.path}`} />

      <meta
        name="title"
        content={`Ritik Srivastava | Full Stack Developer | ${props.path}`}
      />
      <meta name="author" content="ritiksr25" />
      <meta
        name="description"
        content={`Ritik Srivastava (@ritiksr25), Full Stack developer, loves to code Javascript, from Ghaziabad, India, Core Team Member at Developer Student Clubs KIET, powered by Google Developers (DSCKIET): ${props.path}`}
      />
      <meta
        name="keywords"
        content="ritiksr25, portfolio, Ritik Srivastava, Full Stack Developer, MERN Developer, DSCKIET, Ghaziabad"
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://ritiksr25.now.sh" />
      <meta
        property="og:title"
        content={`Ritik Srivastava | Full Stack Developer | ${props.path}`}
      />
      <meta
        property="og:description"
        content={`Ritik Srivastava (@ritiksr25), Full Stack developer, loves to code Javascript, from Ghaziabad, India, Core Team Member at Developer Student Clubs KIET, powered by Google Developers (DSCKIET): ${props.path}`}
      />
      <meta property="og:image" content="/photo.jpeg" />
      <meta property="og:image:type" content="image/jpeg" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://ritiksr25.now.sh" />
      <meta
        property="twitter:title"
        content={`Ritik Srivastava | Full Stack Developer | ${props.path}`}
      />
      <meta
        property="twitter:description"
        content={`Ritik Srivastava (@ritiksr25), Full Stack developer, loves to code Javascript, from Ghaziabad, India, Core Team Member at Developer Student Clubs KIET, powered by Google Developers (DSCKIET): ${props.path}`}
      />
      <meta property="twitter:image" content="/photo.jpeg" />

      <link href="/photo.jpeg" rel="icon" type="image/jpeg" />

      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-166339166-1"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-166339166-1');
          `,
        }}
      />
      <meta name="p:domain_verify" content="6ce16474fb22b1339fd84918ca5cee17" />
      <meta
        name="google-site-verification"
        content="XwrhUqc2JNLYV-TP896NMBjWtuLzIBguFll6W60f80o"
      />
      <meta
        name="google-site-verification"
        content="-V6HnViUv9byKilJ5nbBsZYijb57xnK8sFm9fMNB5l4"
      />
      <meta name="yandex-verification" content="54b175b88c9babce" />
      <meta name="msvalidate.01" content="23D2886ECF64FCF861A8A3E43D15DB93" />

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
          {" "}Ritik Srivastava (@ritiksr25)
        </a>
      </Footer>
    </Layout>

    <style jsx global>{`
      body {
        font-family: "Montserrat";
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
    `}</style>
  </>
);

export default LayoutComponent;
