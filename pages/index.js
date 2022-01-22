import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to Degenarrative!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
         <form name="contact" netlify>
          <p>
            <label>Name <input type="text" name="name" /></label>
          </p>
          <p>
            <label>Email <input type="email" name="email" /></label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </main>

      <Footer />
    </div>
  )
}
