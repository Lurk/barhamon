import React from 'react';
import App from 'next/app';
import 'semantic-ui-css/semantic.min.css';
import 'prismjs/themes/prism-tomorrow.css';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return <Component {...pageProps} />
  }
}

export default MyApp
