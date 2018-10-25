import React from 'react'
import Layout from '../components/layout'
import BeerBrewing from '../images/beer-brewing-at-keg-and-lantern.jpg'

const About = () => (
  <Layout>
    <h1>About</h1>

    <img
      src={BeerBrewing}
      alt="Will brewing beer"
    >
    </img>

  <h3>BeerMenus</h3>
  
  <p>I co-founded <a href="https://www.beermenus.com" style={{color: 'blue'}}>BeerMenus</a> and have lead the company since 2008. While the first full-time employee I brought BeerMenus to market executing product strategy, sales, and support. I then built the Customer Success team to focus on retention consistently keeping churn below 1% developing a high touch onboarding and training process. Most recently I’ve focused more of my time on product management scoping and roadmapping new features and products leading them from idea to product launch.</p>

  <h3>Craft Beer Thought Leader</h3>
  
  <p>I achieved the status of <a href="https://www.cicerone.org/us-en/users/will-stephens" style={{color: 'blue'}}>Certified Cicerone</a>, which is the beer equivalent of a sommelier for wine. Passing the exam to achieve this status requires extensive study on keeping and serving beer, beer styles, beer flavor and evaluation, beer ingredients and brewing processes, as welll as pairing beer with food.</p>

  <p>I also achieved the status of a Recognized Judge with the <a href="https://www.bjcp.org/" style={{color: 'blue'}}>Beer Judge Certification Program</a> and have judged the national homebrew competition.</p>

  <p>I've organized collaboration beers at several of the best craft breweries in New York City during which <a href="https://www.instagram.com/p/BTC8QM-Bi4E/?taken-by=beermenus" style={{color: 'blue'}}>we brewed a beer using a homebrew recipe of mine</a> and co-promoted the beers at participating bars on BeerMenus.</p>

 <p> A <a href="https://www.nytimes.com/2008/05/14/dining/14beer.html" style={{color: 'blue'}}>picture of my brother and I homebrewing</a> at ages of 4 and 7 was featured in the New York Times.</p>


  </Layout>
)

export default About;