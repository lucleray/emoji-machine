import React from 'react'
import App, { Container } from 'next/app'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Inter UI, sans-serif;
    margin: 0;
    padding: 1rem;
  }
`

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <GlobalStyle whiteColor />
        <Component {...pageProps} />
      </Container>
    )
  }
}
