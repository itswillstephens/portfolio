import React from 'react'
import Layout from '../components/layout'
import ResumePDF from '../documents/Will-Stephens-Resume.pdf'
const Resume = () => (
  <Layout>
    
    <h1>Resume</h1>

      <p><a href={ResumePDF} download style={{color: 'blue'}}>Download PDF</a></p>

      <h3>Professional Experience</h3>
      <div style={{fontWeight: '900'}}>Co-Founder & COO, BeerMenus Inc. – Brooklyn, NY, March 2008 - Present</div>
        <ul style={{paddingLeft: '20px'}}>
          <li>Created the company business plan and established the corporation.</li>
          <li>Developed and executed product strategy, sales, and support.</li>
          <li>Scaled business to >$40,000 MRR as the company’s sole full time employee.</li>
          <li>Instituted company structure, hiring a CTO and Head of Sales to scale the business with product improvements and a high-touch sales process.</li>
          <li>Created the Customer Success team to focus on retention consistently keeping churn below 1%.</li>
          <li>Built the digital display product to allow bars to display current beer selection on TVs combining Chromebit hardware with a live feed of data from BeerMenus. Created and documented the installation process, support procedures, and customization and branding options.</li>
          <li>Oversee the organization, data integrity, and moderation of the database of >200,000 beers, which receives >2,000 new beers per week that each require data entry, moderation, and merging.</li>
          <li>Spearhead company culture, organizing co-branded collaboration beer brewing sessions with popular craft breweries.</li>
          <li>Achieved status as a Certified Cicerone® and BJCP Recognized Beer Judge to establish ourselves as authority figures and thought leaders in the space.</li>
        </ul>
      <div style={{fontWeight: '900'}}>Litigation & Technology Paralegal, Sills, Cummis, and Gross P.C. – Newark, NJ, March 2007- March 2008</div>
        <ul style={{paddingLeft: '20px'}}>
          <li>Architected multimillion document electronic databases to allow document review teams to run complex searches on case files and deposition transcripts for class action lawsuits.</li>
          <li>Organized case files for senior partners.</li>
          <li>Served as firm specialist in designing PowerPoint presentations for use in court.</li>
        </ul>
      <div style={{fontWeight: '900'}}>Paralegal, New York City Law Department - Special Litigation Unit – New York, NY, Summer 2006- November 2006</div>
        <ul style={{paddingLeft: '20px'}}>
          <li>Organized case files for trial attorneys in the department with the highest profile cases.</li>
          <li>Drafted case abstracts, notices of motion, notices of entry, and filed documents in court.</li>
          <li>Analyzed deposition transcripts and drafted digests.</li>
          <li>Researched expert backgrounds and assisted with document discovery.</li>
          <li>Performed legal research using Lexis Nexis and Westlaw.</li>
        </ul>
      <div style={{fontWeight: '900'}}>Intern, U.S. Environmental Protection Agency - Office of Air and Radiation – Washington, DC, Fall 2004</div>
        <ul style={{paddingLeft: '20px'}}>
          <li>Received monetary grant from EPA to participate in Best Workplaces for Commuters program geared toward encouraging companies to use rideshare programs.</li>
          <li>Interviewed Fortune 500 company members to learn how to run a successful rideshare program and improve best practices.</li>
          <li>Drafted briefs detailing successful rideshare programs including case studies and recommendations for innovative funding techniques.</li>
        </ul>
      <div style={{fontWeight: '900'}}>Department Webmaster, Dickinson College Environmental Studies Department – Carlisle, PA, 2003-2004</div>
        <ul style={{paddingLeft: '20px'}}>
          <li>Overhauled existing department website to make it easier to navigate and add new student content.</li>
          <li>Updated and maintained graphics and student content to keep website current.</li>
        </ul>
      <h3>Technology Experience</h3>
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
      <h3>Education</h3>
        <div style={{fontWeight: '900'}}>Hack Reactor, New York, NY</div>
        <div>Summer 2018. Full time web development immersive with >500 hours of full stack web development and computer science.</div>
        <br/>
        <div style={{fontWeight: '900'}}>Dickinson College, Carlisle, PA</div>
        <div>Bachelor of Arts, May 2006.</div>
        <div>Major in Policy Studies and minor in Environmental Studies.</div>
  </Layout>
)

export default Resume;