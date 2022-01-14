import "../styles/globals.css";
import "../styles/home.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Head from "next/head";
import GeneralLayout from "../components/general-layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Campaign.com</title>
      </Head>
      <GeneralLayout>
          <Component {...pageProps} />
      </GeneralLayout>
    </>
  );
}
export default MyApp;
