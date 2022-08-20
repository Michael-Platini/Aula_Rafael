import '../../styles/globals.css'
import Head from 'next/head'
import Header from '../../components/Header'

function MyApp({ Component, pageProps }) {
  return(
  <div>
    <Head>
      <title>Michael | dev</title>
    </Head>
    <Header />
   <Component {...pageProps} />
  </div>
  )
}

export default MyApp
