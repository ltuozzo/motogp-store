import '../styles/globals.css'
import type { AppProps } from 'next/app'
import ContentWrapper from '../components/wrapper/ContentWrapper'

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <ContentWrapper>
        <Component {...pageProps} />
      </ContentWrapper>
      )
}

export default MyApp
