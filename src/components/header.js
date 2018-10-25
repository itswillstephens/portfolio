import React from 'react'
import { Link } from 'gatsby'
import Avatar from '../images/wss.jpg'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: '#333',
      marginBottom: '0',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <img 
        src={Avatar} 
        style={{height: '50px', width: '50px', marginRight: '6px', borderRadius: '50%'}} 
        alt="wssdesigns logo"
      >
      </img>
      <span style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
            fontSize: '20px'
          }}
        >
          {siteTitle}
        </Link>
      </span>
    </div>
  </div>
)

export default Header
