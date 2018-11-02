import React from 'react'
import YouTube from 'react-youtube-embed'
import {Timeline, TimelineEvent} from 'react-event-timeline'
import Layout from '../components/layout'
import CSDiagram from '../images/customer-success-diagram.jpg'
import Signature from '../images/will-sig.jpg'

const IndexPage = () => (
  <Layout>

    <h1>Welcome</h1>

    <p>I'm an entrepreneur, customer success manager, product manager, and front end designer.</p>

    <h3>Career Journey</h3>
    <p>I've spent my career working at BeerMenus, a company I created with my brother. While running BeerMenus I have worn a lot of hats, but this timeline explains my primary focus over time. In addition to all of the roles below, I have also overseen company-level strategy, company culture, human resources, legal, and everything else it takes to get a bootstrapped startup off the ground.</p>
    <Timeline 
      lineColor="black">
        <TimelineEvent 
          title="2008 - 2012"
          bubbleStyle={{border: '2px solid black', backgroundColor: 'white'}}
          style={{fontSize: '112.5%'}}
          titleStyle={{fontWeight: '900', fontSize: '130%', color: 'black'}}
        >
        <div style={{fontWeight: '900', color: 'black'}}>BeerMenus Public Launch</div>
        <p style={{backgroundColor: '#d4edda'}}>Head of Support and Sales</p>
        <div>I hit the pavement to interview bar owners and learn what they want BeerMenus to offer and relay this information to the produc team.</div>
        </TimelineEvent>
        <TimelineEvent
          title="2012 - 2015"
          bubbleStyle={{border: '2px solid black', backgroundColor: 'white'}}
          style={{fontSize: '112.5%'}}
          titleStyle={{fontWeight: '900', fontSize: '130%', color: 'black'}}
        >
        <div style={{fontWeight: '900', color: 'black'}}>SaaS Product Launch</div>
        <p style={{backgroundColor: '#d4edda'}}>Head of Customer Success</p>
        <div>We hire a Head os Sales and I focus on retention building out our Customer Success department.</div>
        </TimelineEvent>
        <TimelineEvent
          title="2015 - 2018"
          bubbleStyle={{border: '2px solid black', backgroundColor: 'white'}}
          style={{fontSize: '112.5%'}}
          titleStyle={{fontWeight: '900', fontSize: '130%', color: 'black'}}
        >
        <div style={{fontWeight: '900', color: 'black'}}>Growth</div>
        <p style={{backgroundColor: '#d4edda'}}>Head of Customer Success and Product Manager</p>
        <div>After our Customer Success team was up and running, I shifted focus to product strategy to grow revenue and user base. We developed a digital display product which increased revenue by 40%. </div>
        </TimelineEvent>
        <TimelineEvent
          title="2018 - present"
          bubbleStyle={{border: '2px solid black', backgroundColor: 'white'}}
          style={{fontSize: '112.5%'}}
          titleStyle={{fontWeight: '900', fontSize: '130%', color: 'black'}}
        >
        <div style={{fontWeight: '900', color: 'black'}}>Learning to Code</div>
        <p style={{backgroundColor: '#d4edda'}}>Software Engineer</p>
        <div>Looking to specialize and add automation and scale to Customer Success and Product teams, I started to teach myself software engineering. I then attended Hack Reactor, an immersive in-person web development bootcamp that focuses on the MERN (MongoDB, Express, React, Node) stack.</div>
        </TimelineEvent>
    </Timeline>
    
    <br/>
    
    
    <p>As the company grew even more, I shifted my focus to developing new products and growing our audience of craft beer fans. This included scoping, roadmapping, testing, and launching new features. Working closely with our product team got me excited to dive deeper into the product side in order to speed up our product launch cycle.</p>

    <p>After working on the product side and submitting a few pull requests to Github, I quickly caught the programming bug and wanted to go even further and learn how to code myself. I'm particularly excited about the ability to automate and scale all parts of the business from notifications to help businesses best promote themselves to recommendations on menus for craft beer fans.</p>

    <p>To take the next step I started teaching myself web development in the evening joining the #100daysofcode challenge and I eventually enrolled in an in-person full stack web development bootcamp to speed up my learning process.</p>
    
    <p>My transition from support -> sales -> customer success -> product has taught me a lot about how to get support, sales, and product teams to best work together to build great products that customers are excited to use.</p>

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
