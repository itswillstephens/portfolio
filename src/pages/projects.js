import React from 'react'
import Layout from '../components/layout'
import GoodStreams from '../images/goodstreams.png'
import BeerMenus from '../images/beermenus.png'
import Wssdesigns from '../images/wssdesigns.png'

const Projects = () => (
  <Layout>
    <h1>Projects</h1>

    <div style={{fontWeight: '900'}}>BeerMenus</div>
    <div>March 2008 - present</div>
    <br/>
    <p>I co-founded <a href="https://www.beermenus.com" style={{color: 'blue'}}>BeerMenus</a>, which is the largest platform for finding craft beer with >40,000 participating businesses worldwide and millions of craft beer fans visiting each month.</p>

    <img
      src={BeerMenus}
      alt="beer menus logo"
    >
    </img>

    <div>Platforms:</div>
      <ul style={{paddingLeft: '20px'}}>
        <li><a href="https://www.beermenus.com" style={{color: 'blue'}}>Web</a></li>
        <li><a href="https://itunes.apple.com/app/apple-store/id917882057?mt=8" style={{color: 'blue'}}>iOS</a></li>
        <li><a href="https://play.google.com/store/apps/details?id=com.beermenus.beermenus&hl=en_US" style={{color: 'blue'}}>Android</a></li>
      </ul>
      <br/>
    <hr/>

    <div style={{fontWeight: '900'}}>GoodStreams</div>
    <div>October 2018 - present</div>
    <br/>
    <p>I built <a href="https://www.goodstreams.io" style={{color: 'blue'}}>GoodStreams</a> to learn the MERN (Mongo, Express, React, Node) stack and to get experience building a full stack web app. Inspired by GoodReads, this app aims to help you keep track of the movies and shows you plan to watch and see what your friends are watching.</p>

    <p>This is a side project I'm working on to continually learn new development skills. Feature requests welcome!</p>

    <img
      src={GoodStreams}
      alt="goodstreams logo"
    >
    </img>

    <div>Technologies:</div>
      <ul style={{paddingLeft: '20px'}}>
        <li>MongoDB</li>
        <li>React</li>
        <li>Redux</li>
        <li>Express</li>
        <li>Node</li>
        <li>Bootstrap</li>
      </ul>
      <br/>
    <hr/>
    <div style={{fontWeight: '900'}}>wssdesigns</div>
    <div>October 2018 - present</div>
    <br/>
    <p>This is the site you're on now! I use this to test and try out new Customer Success and Analytics tools (see below).</p>
    <img
      src={Wssdesigns}
      alt="wssdesigns logo"
    >
    </img>
    <div>Technologies:</div>
      <ul style={{paddingLeft: '20px'}}>
        <li><a href="https://www.gatsbyjs.org/" style={{color: 'blue'}}>Gatsby.js</a>: I used this progressive web app generator to build this site. It runs on the React frontend framework with webpack to manage dependencies.</li>
        <li><a href="https://analytics.google.com/analytics/web/
        " style={{color: 'blue'}}>Google Analytics</a>: I of course have GA running to better understand the traffic that comes to this site.</li>
        <li><a href="https://www.fullstory.com/" style={{color: 'blue'}}>FullStory</a>: I use this session replay service to better understand the customer journey and to make sure there are no <a href="https://blog.fullstory.com/rage-clicks-turn-analytics-into-actionable-insights/" style={{color: 'blue'}}>rage clicks</a>.</li>
        <li><a href="https://www.drift.com" style={{color: 'blue'}}>Drift</a>: I use this to power the chat bubble at the bottom right to make it easy for you to get in touch with me.</li>
      </ul>
  </Layout>
)

export default Projects;