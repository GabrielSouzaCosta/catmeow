import { Html, Head, Main, NextScript } from 'next/document'
import { ContextProvider } from '../context/ContextProvider'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <ContextProvider>
          <Main />
          <NextScript />
        </ContextProvider>
      </body>
    </Html>
  )
}
