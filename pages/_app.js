import Head from 'next/head'
import '../styles/globals.css'
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {

  const router = useRouter();

  return (
    <>
      <Head>
        <title>{router.query.term && `${router.query.term} - `} Google</title>
        <meta name='description' content='Google search clone' />
        <link rel="icon" href="https://cdn4.iconfinder.com/data/icons/new-google-logo-2015/400/new-google-favicon-512.png" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
