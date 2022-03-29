import '../styles/globals.css'
import Head from 'next/head'

import Layout from 'components/layout/Layout'; 

function MyApp({ Component, pageProps }) {
  return (<>
    <Head>
      <title>Alessandro Figo | mku.eth</title>
      <meta name="description" content="Made with love by Figo 💘" />
      <link rel="icon" href="/f.png" />
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>)
}

export default MyApp
