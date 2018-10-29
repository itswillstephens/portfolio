import React from 'react'
import Layout from '../components/layout'
import GoodStreams from '../images/goodstreams.png'
import BeerMenus from '../images/beermenus.png'

const Projects = () => (
  <Layout>
    <h1>Projects</h1>

    <div style={{fontWeight: '900'}}>BeerMenus</div>
    <div>March 2008 - present</div>
    <br/>
    <p><a href="https://www.beermenus.com" style={{color: 'blue'}}>BeerMenus</a> is the largest platform for finding craft beer with >40,000 participating businesses worldwide and millions of craft beer fans visiting each month.</p>

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

  </Layout>
)

export default Projects;