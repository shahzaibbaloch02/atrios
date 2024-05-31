import React, { useEffect } from "react";
import Head from "next/head";
import "../styles/globals.css";
import AOS from "aos";
import Script from "next/script";
import "aos/dist/aos.css";
import Link from "next/link";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    setTimeout(() => {
      // console.log("resetx");
      AOS.init({
        easing: "ease-out-cubic",
        once: false,
        offset: 300,
      });
    }, 1000);
  }, []);

  return (
    <div>
      <Head>
        {/* <!-- Required meta tags --> */}

        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>ATRIOS.IO | Next-gen DNS Based Cloud Security</title>
        <meta
          name="description"
          content="ATRIOS.IO |   Next-gen DNS Based Cloud Security"
        />
        <link rel="manifest" href="./assets/favicons/manifest.json" />

        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="./assets/favicons/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="./assets/favicons/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="./assets/favicons/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="./assets/favicons/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="./assets/favicons/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="./assets/favicons/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="./assets/favicons/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="./assets/favicons/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="./assets/favicons/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="./assets/favicons/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./assets/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="./assets/favicons/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="./assets/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          // crossorigin
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Dosis:wght@300&display=swap"
          rel="stylesheet"
        />

        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />

        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content="./assets/favicons/ms-icon-144x144.png"
        />
        <meta name="theme-color" content="#ffffff" />

        {/* <!-- Bootstrap CSS --> */}
        <link
          href="assets/vendors/bootstrap/css/bootstrap.min.css"
          rel="stylesheet"
        />
        {/* <link href="assets/vendors/slick/slick-theme.css" rel="stylesheet" />
        <link href="assets/vendors/slick/slick.css" rel="stylesheet" /> */}
        <link href="assets/vendors/animation/animate.css" rel="stylesheet" />
        <link
          href="assets/vendors/fontawesome/css/all.min.css"
          rel="stylesheet"
        />
        <link
          href="assets/vendors/magnify-pop/magnific-popup.css"
          rel="stylesheet"
        />
        <link href="assets/vendors/phosphor/css/icons.css" rel="stylesheet" />
        <link href="assets/css/style.css" rel="stylesheet" />
        <link href="assets/css/responsive.css" rel="stylesheet" />
        <link rel="stylesheet" href="assets/css/dark.css" />

        {/* <title>Atrios.io</title> */}
        <link
          rel="icon"
          type="image/x-icon"
          href="assets/img/icon/favicon.png"
        />
      </Head>
      <Component {...pageProps} />
      <a
        className="scroll-to-target scroll-to-top scrolltotop "
        data-aos="fade-left"
      >
        <Link href="/" legacyBehavior data-target="js">
          <i className="fa fa-angle-up"></i>
        </Link>
      </a>
      {/* <!-- Optional JavaScript; choose one of the two! --> */}
      <Script
        src="assets/js/jquery-3.6.0.min.js"
        strategy="beforeInteractive"
      ></Script>
      <Script
        src="assets/vendors/bootstrap/js/bootstrap.min.js"
        strategy="beforeInteractive"
      ></Script>
      <Script src="assets/js/custom.js" strategy="beforeInteractive"></Script>

      {/* <Script src="assets/vendors/bootstrap/js/popper.min.js"></Script>+++++++++ */}
      {/* <!-- Option 1: Bootstrap Bundle with Popper --> */}
      {/* <Script src="assets/vendors/isotope/imagesloaded.pkgd.min.js"></Script>
      <Script src="assets/vendors/isotope/isotope.pkgd.min.js"></Script> */}
      {/* <Script src="assets/vendors/parallax/jquery.parallax-scroll.js"></Script>
      <Script src="assets/vendors/parallax/parallax.min.js"></Script> */}
      {/* <Script src="assets/vendors/slick/slick.min.js"></Script>
      <Script src="assets/vendors/magnify-pop/jquery.magnific-popup.min.js"></Script>
    <Script src="assets/vendors/wow/wow.min.js"></Script> */}
      {/* $(window).on("load", function (){" "}
      {setTimeout(function () {
        // allowing 3 secs to fade out loader
        $(".page-loader").fadeOut("slow");
      }, 3500)}
      ); */}
    </div>
  );
}
export default MyApp;
