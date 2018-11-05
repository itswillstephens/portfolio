import React from 'react'
import Layout from '../components/layout'
import ResumePDF from '../documents/Will-Stephens-Resume.pdf'
const Resume = () => (
  <Layout>
    
    <h1>Resume</h1>

      <p><a href={ResumePDF} download style={{color: 'blue'}}>Download PDF</a></p>

      <h2>Professional Experience</h2>
      <h4 style={{fontWeight: '900'}}>Co-Founder, BeerMenus Inc. – Brooklyn, NY, March 2008 - Present</h4>
        
        <p>I've spent my career working at BeerMenus, a self-funded B2B2C SaaS business I created with my brother. BeerMenus is the largest platform for locating craft beer with >40,000 participating businesses worldwide and millions of craft beer fans visiting each month. While running BeerMenus I’ve worn a lot of hats. In addition to the roles below, I oversee company strategy, company culture, and everything else it takes to get a startup off the ground.</p>
        
        
        <div>2013 - 2018: <span style={{fontWeight: '900'}}>Head of Customer Success</span></div>
        <ul style={{paddingLeft: '30px'}}>
          <li>Wrote the company content style guide to ensure a unified voice to customers.</li>
          <li>Created a knowledge base to provide self-serve help with a focus on screencasts.</li>
          <li>Worked with the product team to integrate customer usage data into our CRM for email and phone campaigns to ensure customers are on track to be successful.</li>
          <li>Collaborated with the product team to develop and launch our analytics tool to help customers track their success and to communicate the value BeerMenus provides.</li>
          <li>Scaled Customer Success team to 4 members and established processes for hiring, onboarding, training, and evaluation.</li>
          <li>Developed a new digital display product to allow bars to display live beer menu content on TVs instead of chalkboards, which increased revenue by >30%.</li>
          <li>Established partnerships with Wordpress and Squarespace to gain whitelisted status for our widgets.</li>
        </ul>

        <div>2010 - 2013: <span style={{fontWeight: '900'}}>Head of Sales</span></div>
        <ul style={{paddingLeft: '30px'}}>
          <li>Created a display ad product and sold it directly to bars and restaurants on BeerMenus in all of our major markets (NYC, Chicago, San Francisco, LA, Philly).</li>
          <li>Developed and sold our SaaS product, which allows bars to embed their menu on the beer section of their own website and automatically push updates to social media.</li>
          <li>Grew MRR to >$40,000 MRR as the sole full-time employee.</li>
        </ul>

        <div>2008 - 2010: <span style={{fontWeight: '900'}}>Head of Support</span></div>
        <ul style={{paddingLeft: '30px'}}>
          <li>Launched BeerMenus in 2008 as a proof-of-concept product.</li>
          <li>Interviewed hundreds of bar owners to learn what they wanted BeerMenus to offer and relayed this information to our developers who continually improved the product.</li>
          <li>Answered all inbound emails and phone calls and helped thousands of early adopters grow their businesses by promoting their craft beer selection on our platform.</li>
        </ul>
      
      <h4 style={{fontWeight: '900'}}>Founder, GoodStreams – Brooklyn, NY, October 2018 - Present</h4>
      <ul style={{paddingLeft: '30px'}}>
        <li>Created GoodStreams to learn full stack web development.</li>
        <li>Developed backend with Node.js and Express.</li>
        <li>Designed frontend with React and Bootstrap.</li>
        <li>Employed Redux for app state management.</li>
        <li>Setup user authentication with JSON Web Token.</li>
      </ul>

      <h2>Technology Experience</h2>
        <ul style={{paddingLeft: '20px'}}>
          <li>HTML, CSS, Bootstrap, Javascript</li>
          <li>Github</li>
          <li>React, Redux, Angular</li>
          <li>MongoDB, Express, Node</li>
          <li>HelpScout</li>
          <li>Intercom, Drift</li>
          <li>Basecamp, Trello, Asana</li>
          <li>Profitwell, KissMetrics</li>
          <li>Sendgrid, Mandrill, Mailgun</li>
          <li>Heroku, Netlify</li>
          <li>Wordpress, Squarespace, Wix</li>
        </ul>
      <h2>Education</h2>
        <div style={{fontWeight: '900'}}>Hack Reactor, New York, NY</div>
        <div>Summer 2018. Full time web development immersive with >500 hours of full stack web development and computer science.</div>
        <br/>
        <div style={{fontWeight: '900'}}>Cicerone Certification Program, Chicago, IL</div>
        <div>December 2015. Achieved status as a Certified Cicerone® passing the rigorous 8-hour exam.</div>
        <br/>
        <div style={{fontWeight: '900'}}>Dickinson College, Carlisle, PA</div>
        <div>Bachelor of Arts, May 2006. Major in Policy Studies and minor in Environmental Studies.</div>
  </Layout>
)

export default Resume;