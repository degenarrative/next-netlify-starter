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
            The year is 2078. Technology is ubiquitous; shaping every aspect of life in ways once thought impossible. The galaxy itself burns with the light of progress, but restlessness lurks in the shadows. The great leap forward came a price. Corporate power grew to levels beyond reason - a blackened edge at the corners of existence.
           </p> 
            <p>
            Against this dystopian backdrop, a rebellion has emerged. Neo-Elite Radical Degens, a faction of rogue tech-savants, aka "NERDs," operates in the shadows and wields a new breed of weapons: hardware-hacking guns, capable of manipulating the very tech that fuels their oppressors. Guided by the enigmatic figure known only as "The Hacker," the Nerds are a formidable force, striving to free the downtrodden from the yoke of corporate tyranny.
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
         </div>
         <div className=" main-content wrapper">
          <div className="main-text">
            <p>
            The Corporations, unwilling to surrender their control of power, have mustered their own army of cybernetically enhanced soldiers and space-faring vessels. Their mission, to hunt down all Nerds and extinguish their revolution with a ruthless determination.
            </p>
          </div>
         </div>
         <div className="main-content wrapper">
          <div className="main-image">
            <img src="/NERD_girl.png" alt="Nerd Girl Image" />
          </div>
          <div className="main-text">
            <p>
            The ingenuity of the NERDs has allowed them to build their own fleet of derelict ships. Salvaged from the scrap yards of the galaxy, and reworked with their own proprietary tech, these vessels are their mobile strongholds from which they launch daring raids against the corporations and their minions.
            </p>
            <p>
            This is the NERD War; a struggle for the soul of humanity, fought with electrons in the neon-lit alleyways of cyberspace. Fire and code, blood and the pulse of binary. The streets of the future boil over as the NERDs and Corporations clash in a conflict that will define their generation.
            </p>
          </div>
        </div>
        <div className="btn-container">
          <a href="https://coda.io/form/Neo-Elite-Radical-Degens_dtwh87bz2h-" className="btn btn-primary">Link</a>
        </div>
        <Footer/>
      </main>
    </div>
  )
}



