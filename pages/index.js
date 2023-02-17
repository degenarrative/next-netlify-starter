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

      <Navbar/>

      <main>
        <div className="main-content wrapper">
  <div className="main-text">
    <Header title="...degenarrative..." />
    <p>
    Degenerative is an AI-powered creative studio founded by Jacob Stephens, an experienced visual creative technologist who has worked at companies such as Lucasfilm and Industrial Light and Magic. Integrating art, computer graphics, visual programming, and software development to create awe-inspiring immersive experiences.
    </p>
    <p>
    While working for George Lucas at Lucasfilm, Jacob collaborated with directors, artists, engineers, and his team to develop and support George’s vision for a toolset and pipeline to create high-quality digital pre-visualization sequences that was as easy and intuitive as film making in the real world. Since then, his singular focus has been to integrate cutting-edge technology into the creative process to push the boundaries of storytelling. 
    </p>
    <p>
    The studio's vision is to use AI to empower creators to become directors and unlock new levels of creativity. Neo-Elite Radical Degens is the first release of Digital Collectable Concept Art by Degenerative. Set in the year is 2078, technology has become ubiquitous, shaping every aspect of life in ways once deemed impossible, but with this leap forward came a price....            </p>
    <div className="btn-container">
      <a href="/join-list" className="btn btn-primary">Neo-Elite Radical Degens</a>
    </div>
  </div>
  <div className="main-image">
    <img src="/degenarrative.png" alt="Degenarrative Image" width="512" height="512" />
  </div>
</div>


        <Footer/>
      </main>
    </div>
  )
}




