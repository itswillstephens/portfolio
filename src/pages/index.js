import React from 'react'
import Layout from '../components/layout'
import CSDiagram from '../images/customer-success-diagram.jpg'

const IndexPage = () => (
  <Layout>
    <h1>Welcome</h1>

    <p>I'm an entrepreneur, customer success engineer, and beer brewer.</p>

    <p>I started my career co-founding a software company <a href="https//www.beermenus.com" style={{color: 'blue'}}>BeerMenus</a> where I wore a lot of hats. Early on as the sole employee I spent most of my time interacting with customers providing support to learn what the company and product should eventually become. As we found product-market fit, I transitioned to spending more time on onboarding, account management, and sales. As the company grew even more, I transitioned to thinking more strategically about the product and how to scale.</p>

    <img
      src={CSDiagram}
      alt="customer success diagram"
    >
    </img>
    <p style={{fontSize: '0.6rem', textAlign: 'center'}}>My transition from support -> sales -> product -> customer success</p>

    {/* <p>Working on many products and features I've learned the importance of balance and cohesiveness between support, sales, and product.</p>

    <p>Common problematic situations:</p>

    <p style={{fontWeight: '900'}}>Sales and Support run the show</p>

    <p></p>

    <p style={{fontWeight: '900'}}>Product and Engineers run the show</p>

    <p></p> */}

  </Layout>
)

export default IndexPage
