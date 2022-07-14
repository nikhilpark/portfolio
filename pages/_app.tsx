import '../styles/globals.css'
import RecordVisitorData from '../components/RecordVisitorData'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <RecordVisitorData>
  <Component {...pageProps} />
  </RecordVisitorData>
  )
}

export default MyApp
