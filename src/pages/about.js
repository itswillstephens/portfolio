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

  <ul style={{marginLeft: '15px'}}>
    <li>I've lived in Brooklyn for the last 10 years</li>
    <li>I'm an avid cyclist with >1,000 Citibike rides</li>
    <li>I regularly <a href="https://www.instagram.com/p/BQQLDz8DV06/?taken-by=itswillstephens" style={{color: 'blue'}}>play league</a> and pick-up basketball</li>
    <li>Earlier this year I got to see <a href="https://www.instagram.com/p/BegvpsnFAbR/?taken-by=itswillstephens" style={{color: 'blue'}}>Messi score a game winning goal</a> in Camp Nou, a long time life dream.</li>
    <li>I was the <a href="https://www.instagram.com/p/8ZprlbzWVx/?taken-by=itswillstephens" style={{color: 'blue'}}>2015 National Champion</a> in bocce</li>
  </ul>
  
  <p style={{fontWeight: 'bold'}}>I have a passion for craft beer</p>
  
  <p>I'm a <a href="https://www.cicerone.org/us-en/users/will-stephens" style={{color: 'blue'}}>Certified Cicerone</a>, which is the beer equivalent of a sommelier for wine. Passing the exam to achieve this status requires extensive study on keeping and serving beer, beer styles, beer flavor and evaluation, beer ingredients and brewing processes, as welll as pairing beer with food. I'm also now a proctor for Certified Cicerone exams that take place in NYC.</p>

  <p>I also achieved the status of a Recognized Judge with the <a href="https://www.bjcp.org/" style={{color: 'blue'}}>Beer Judge Certification Program</a> and have judged the national homebrew competition.</p>

  <p>I've organized collaboration beers at several of the best craft breweries in New York City where we <a href="https://www.instagram.com/p/BSO15GglJGw/?taken-by=itswillstephens" style={{color: 'blue'}}> brewed a beer using a homebrew recipe of mine</a> and co-promoted the beers at participating bars on BeerMenus.</p>

 <p> A <a href="https://www.nytimes.com/2008/05/14/dining/14beer.html" style={{color: 'blue'}}>picture of my brother and I homebrewing</a> at ages of 4 and 7 was featured in the New York Times.</p>


  </Layout>
)

export default About;