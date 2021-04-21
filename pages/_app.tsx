import React from "react";
import App from "next/app";
import "semantic-ui-css/semantic.min.css";
import "prismjs/themes/prism-tomorrow.css";
import "./_app.css";
import "react-image-gallery/styles/css/image-gallery.css";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default MyApp;
