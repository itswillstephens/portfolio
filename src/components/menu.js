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
        <li><Link to="/" style={{padding: '4px'}}>Home</Link></li>
        <li><Link to="/about" style={{padding: '4px'}}>About</Link></li>
        <li><Link to="/resume" style={{padding: '4px'}}>Resume</Link></li>
        <li><Link to="/projects" style={{padding: '4px'}}>Projects</Link></li>
      </ul>
    </div>
  </div>
)

export default Menu;