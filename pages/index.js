import Head from 'next/head';
import Header from '@components/Header';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Degenarrative</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>
        <div className="main-content">
          <div className="main-text">
            <Header title="...degenarrative..." />
            <p>
              Get ready to experience the future of digital collectibles with Degenarrative, the trailblazing studio pushing the boundaries of design and technology. Specializing in immersive digital collectibles, Degenarrative is leading the way with their groundbreaking new AI-generated 777 NFT collection.
            </p>
            <p>
              Forget everything you thought you knew about digital art. Degenarrative's NFTs offer an unparalleled level of complexity and sophistication that will transport you to another dimension. Each piece is a unique masterpiece, blending cutting-edge design with state-of-the-art blockchain technology to create an experience unlike anything else on the market.
            </p>
            <p>
              Degenarrative is at the forefront of a new era in design, where digital and physical art collide to create something truly extraordinary. Don't miss out on your chance to be part of this groundbreaking movement. Join the White List now and follow Degenarrative on Twitter and Discord to stay up-to-date on the latest developments.
            </p>
            <a href="/join-list" className="btn btn-primary">Join the List</a>
          </div>
          <div className="main-image">
            <img src="/degenarrative.png" alt="Degenarrative Image" width="512" height="512" />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}


