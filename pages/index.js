import Head from 'next/head'
import Header from '@components/Header'
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'

export default function Home() {
  function scrollToNerdSection(event) {
    event.preventDefault();
    const nerdSection = document.getElementById('nerd-section');
    nerdSection.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className="container">
      <Head>
        <title>Degenarrative</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>

      <main>
        <Header title="...degenarrative..." />
        <div className="main-content wrapper">
          <div className="main-text">
            <p>
              Degenarrative is a nascent creative technology studio which harnesses cutting-edge AI and blockchain technology to create awe-inspiring immersive experiences and digital collectibles. With a revolutionary vision to use mobile webAR and web3 to build atomic ownable elements of larger creations and narratives, Degenarrative pushes the boundaries of what's possible in the digital entertainment industry. The studio's founder, Jacob Stephens, is a leading artist and technologist with over two decades of experience in art installations, digital experiences, and film and television. His expertise in animation, projection mapping, computer graphics, and visual programming allows Degenarrative to create truly exceptional immersive experiences and interactive data visualizations. As an early adopter of cryptocurrency and digital collectibles, Jacob brings a unique perspective to his work, producing intriguing and delightful ways to interact with digital assets and decentralized property ownership. Degenarrative is a vital destination for crypto currency traders, NFT collectors, digital art enthusiasts, and technologists looking for groundbreaking and innovative experiences.
            </p>
          </div>
          <div className="main-image">
            <img src="/degenarrative.png" alt="Degenarrative Image" width="512" height="512" />
          </div>
        </div>
        
        <div id="nerd-section">
        </div>
        <div className="banner banner-container">
          <div className="banner-image">
            <img src="/NERD_banner.png" alt="NERD Banner Image" />
          </div>        
        </div>
        <Header title="Neo-Elite Radical Degens" />
        <div className="main-content wrapper">
        <div className="main-text">
          <p>
            Prepare to enter a world beyond your wildest imagination as Degenarrative unveils its latest creation: Neo-Elite Radical Degens, a mesmerizing NFT series that transports you to a futuristic cyber punk setting. Immerse yourself in an AI-generated audio-visual experience that is set to revolutionize the world of digital art. The year is 2078, and the galaxy burns with the light of progress, but the shadows hide a restless energy that threatens to break free. Corporate power looms ominously, casting a dark edge on the very corners of existence. Join the rebellion and explore the depths of a new reality with Neo-Elite Radical Degens.
           </p> 
        </div>
        </div>
        <div className="main-content wrapper">
          <div className="main-image">
            <img src="/NERD_boy.png" alt="Nerd Boy Image" />
          </div>
          <div className="main-image">
            <img src="/NERD_bot.png" alt="Nerd Bot Image" />
          </div>
          <div className="main-image">
            <img src="/NERD_girl.png" alt="Nerd Girl Image" />
          </div>
         </div>
         <div className="main-image">
            <img src="/degenarrative.png" alt="Nerd Bot Image" />
          </div>
        <div className="btn-container">
          <a href="https://coda.io/form/Neo-Elite-Radical-Degens_dtwh87bz2h-" className="btn btn-primary">Join Access Group</a>
        </div>
        <Footer/>
      </main>
    </div>
  )
}



