import React from "react";
import Document, { Head, Html, Main, NextScript } from "next/document";

export default class BarDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
          <script
            defer
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon='{"token": "888e50f6788f45e2b9a9c3076dfb1e77"}'
          ></script>
        </body>
      </Html>
    );
  }
}
