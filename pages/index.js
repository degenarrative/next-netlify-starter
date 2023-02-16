import Head from 'next/head'
import Header from '@components/Header'
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Degenarrative</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>
        <Header title="...degenarrative..." />
      </main>

      <Footer/>
    </div>
  )
}


