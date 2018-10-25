import React from 'react';
import Link from 'gatsby-link';

const Menu = () => (
  <div style={{
    backgroundColor: '#f4f4f4',
    paddingTop: '10px'
  }}>

    <ul style={{
      listStyle: 'none',
      display: 'flex',
      justifyContent: 'space-evenly'
    }}>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/resume">Resume</Link></li>
      <li><Link to="/projects">Projects</Link></li>
    </ul>
  </div>
)

export default Menu;