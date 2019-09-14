import React from 'react'
import YouTube from 'react-youtube-embed'
import Layout from '../components/layout'
import Signature from '../images/will-sig.jpg'

const IndexPage = () => (
  <Layout>

    <h1>Welcome</h1>

    <p>I'm an entrepreneur, product manager, and beer brewer.</p>

    <p>I started my career co-founding BeerMenus, a company <a href="https://www.beermenus.com/about" style={{color: 'blue'}}>I created with my brother</a>.</p>

    <p>I now work at <a href="https://go.sevenfifty.com/">SevenFifty</a>.</p> 
  
    <p>I'm a <a href="https://www.cicerone.org/us-en/users/will-stephens">Certified Cicerone</a>, Recognized Judge with the <a href="https://www.bjcp.org/">BJCP program</a>, and I've earned the <a href="https://wsetglobal.com/qualifications/wset-level-2-award-in-wines/">WSET Level 2</a> certification with distinction. </p>

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
