import React from 'react'
import YouTube from 'react-youtube-embed'
import Layout from '../components/layout'
import Signature from '../images/will-sig.jpg'

const IndexPage = () => (
  <Layout>

    <h1>Welcome</h1>

    <p>I'm an entrepreneur, customer success manager, and beer brewer.</p>

    <p>I've spent my career working at BeerMenus, a company <a href="https://www.beermenus.com/about" style={{color: 'blue'}}>I created with my brother</a>.</p>

    <YouTube id='HpDqzJfvkw4' />
    <div style={{fontSize: '0.7rem', textAlign: 'center'}}>A video HelpScout made about the BeerMenus Success team</div>
    <br/>

    <p>I recently started teaching myself full stack web development to learn how to better scale and automate processes for support, sales, and customer success teams. I'm currently working on a side project <a href="https://www.goodstreams.io/" style={{color: 'blue'}}>GoodStreams</a> which I developed to learn the MERN (Mongo, Express, React, Node) stack and to continually learn new technologies.</p>

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
