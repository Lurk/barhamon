import React from 'react'
import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class BarDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
        <Main />
        <NextScript />
        </body>
      </Html>
    )
  }
}
