import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (<>
    <Head>
      <title>Alessandro Figo | mku.eth</title>
      <meta name="description" content="Made with love by Figo 💘" />
      <link rel="icon" href="/mku.png" />
    </Head>
    <Component {...pageProps} />
  </>)
}

export default MyApp
