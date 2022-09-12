import  Head from "next/head";

function MyApp({ Component, pageProps }) {
  return(
    <>
      <Head>
        <title>Song'blog</title>
      </Head>
      <Component {...pageProps} />
    </>
  )

}

export default MyApp
