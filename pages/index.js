import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Degenarrative</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="...degenarrative..." />
        <iframe src="https://coda.io/embed/twh87bz2h-" width=900 height=500 style={{maxWidth: "100%"}} allow="fullscreen"></iframe>
      </main>

      <Footer/>
    </div>
  )
}

