import React from 'react';
import Link from 'gatsby-link';

const Menu = () => (
  <div style={{backgroundColor: '#f4f4f4'}}>
    <div style={{
      margin: '0 auto',
      maxWidth: 960,

      }}>

      <ul style={{
        padding: '10px',
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'space-around'
      }}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/resume">Resume</Link></li>
        <li><Link to="/projects">Projects</Link></li>
      </ul>
    </div>
  </div>
)

export default Menu;