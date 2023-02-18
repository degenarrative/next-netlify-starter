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
              Degenerative is an AI-powered creative studio founded by Jacob Stephens, an experienced visual creative technologist who has worked at companies such as Lucasfilm and Industrial Light and Magic. Integrating art, computer graphics, visual programming, and software development to create awe-inspiring immersive experiences.
            </p>
            <p>
              While working for George Lucas at Lucasfilm, Jacob collaborated with directors, artists, engineers, and his team to develop and support George’s vision for a toolset and pipeline to create high-quality digital pre-visualization sequences that was as easy and intuitive as film making in the real world. Since then, his singular focus has been to integrate cutting-edge technology into the creative process to push the boundaries of storytelling. 
            </p>
            <p>
              The studio's vision is to use AI to empower creators to become directors and unlock new levels of creativity. Neo-Elite Radical Degens is the first release of Digital Collectable Concept Art by Degenerative. Set in the year is 2078, technology has become ubiquitous, shaping every aspect of life in ways once deemed impossible, but with this leap forward came a price....
            </p>
          </div>
          <div className="main-image">
            <img src="/degenarrative.png" alt="Degenarrative Image" width="512" height="512" />
          </div>
        </div>
        <div className="btn-container">
          <a href="/join-list" className="btn btn-primary">Neo-Elite Radical Degens</a>
        </div>
        <div className="banner banner-container">
          <div className="banner-image">
            <img src="/NERD_banner.png" alt="NERD Banner Image" />
          </div>
        </div>
        <Header title="Neo-Elite Radical Degens" />
        <div className="main-content wrapper" id="nerd-section">
          <div className="main-image">
            <img src="/NERD_boy.png" alt="Nerd Boy Image" width="512" height="512" />
          </div>
          <div className="main-text">
            <p>
            The year is 2078. Technology is ubiquitous; shaping every aspect of life in ways once thought impossible. The galaxy itself burns with the light of progress, but restlessness lurks in the shadows. The great leap forward came a price. Corporate power grew to levels beyond reason - a blackened edge at the corners of existence.
            </p>          
          </div>
         </div>
         <div className="main-content wrapper">
          <div className="main-text">
            <p>
            Against this dystopian backdrop, a rebellion has emerged. Neo-Elite Radical Degens, a faction of rogue tech-savants, aka "NERDs," operates in the shadows and wields a new breed of weapons: hardware-hacking guns, capable of manipulating the very tech that fuels their oppressors. Guided by the enigmatic figure known only as "The Hacker," the Nerds are a formidable force, striving to free the downtrodden from the yoke of corporate tyranny.
            </p>
            <p>
            The Corporations, unwilling to surrender their control of power, have mustered their own army of cybernetically enhanced soldiers and space-faring vessels. Their mission, to hunt down all Nerds and extinguish their revolution with a ruthless determination.
            </p>
          </div>
          <div className="main-image">
            <img src="/NERD_bot.png" alt="Nerd Bot Image" width="512" height="512" />
          </div>
         </div>
         <div className="main-content wrapper">
          <div className="main-image">
            <img src="/NERD_girl.png" alt="Nerd Girl Image" width="512" height="512" />
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
        <section class="section NERD responsive-section">
          <h2 class="section-title">NERD</h2>
            <div class="section-content">
              <div className="main-text">
            <p>
            The ingenuity of the NERDs has allowed them to build their own fleet of derelict ships. Salvaged from the scrap yards of the galaxy, and reworked with their own proprietary tech, these vessels are their mobile strongholds from which they launch daring raids against the corporations and their minions.
            </p>
            <p>
            This is the NERD War; a struggle for the soul of humanity, fought with electrons in the neon-lit alleyways of cyberspace. Fire and code, blood and the pulse of binary. The streets of the future boil over as the NERDs and Corporations clash in a conflict that will define their generation.
            </p>
          </div>
              <<img src="/NERD_girl.png" alt="Nerd Girl Image" />
            </div>
        </section>

        <div className="btn-container">
          <a href="#nerd" className="btn btn-primary" onClick={scrollToNerdSection}>NERD</a>
        </div>
        <Footer/>
      </main>
    </div>
  )
}



