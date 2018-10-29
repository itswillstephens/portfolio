import React from 'react'
import YouTube from 'react-youtube-embed'
import Layout from '../components/layout'
import CSDiagram from '../images/customer-success-diagram.jpg'
import Signature from '../images/will-sig.jpg'

const IndexPage = () => (
  <Layout>

    <h1>Welcome</h1>

    <p>I'm an entrepreneur, customer success engineer, and beer brewer.</p>

    <p>I started my career co-founding <a href="https://www.beermenus.com" style={{color: 'blue'}}>BeerMenus</a>, which is the largest platform for locating craft beer with >40,000 bars, restaurants and beer stores participating worldwide.</p>
    
    <p>Early on as the sole employee I spent most of my time interviewing customers to get feedback and to learn what the company and product should eventually become.</p>
    
    <p>Once we found product-market fit with a subscription service for bars and restaurants, we quickly recognized the importance of retention and I developed our Customer Success department.</p>

    <YouTube id='HpDqzJfvkw4' />
    <div style={{fontSize: '0.7rem', textAlign: 'center'}}>A video HelpScout made about our Customer Success team</div>
    <br/>

    <p>As the company grew even more, I shifted my focus to developing new products and growing our audience of craft beer fans. This included scoping, roadmapping, testing, and launching new features. Working closely with our product team got me excited to dive deeper into the product side in order to speed up our product launch cycle.</p>

    <p>After working on the product side and submitting a few pull requests to Github, I quickly caught the programming bug and wanted to go even further and learn how to code myself. I'm particularly excited about the ability to automate and scale all parts of the business from notifications to help businesses best promote themselves to recommendations on menus for craft beer fans.</p>

    <p>To take the next step I started teaching myself web development in the evening joining the #100daysofcode challenge and I eventually enrolled in an in-person full stack web development bootcamp to speed up my learning process.</p>
    
    <p>My transition from support -> sales -> customer success -> product has taught me a lot about how to get support, sales, and product teams to best work together to build great products that customers are excited to use.</p>

    <img
      src={CSDiagram}
      alt="customer success diagram"
    >
    </img>
    <p style={{fontSize: '0.7rem', textAlign: 'center'}}>My transition from support -> sales -> product -> customer success</p>

    <p>I'm excited to work at this intersection to help teams work together efficiently to build great products.</p>

    <p>Thanks for stopping by.</p>

    <img
      src={Signature}
      alt="signature"
      style={{height: '50px', width: 'auto'}}
    >
    </img>


  </Layout>
)

export default IndexPage
