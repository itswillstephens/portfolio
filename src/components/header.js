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
        style={{height: '50px', width: '50px', marginRight: '6px', radius: '50%}} alt="goodstreams logo"
      >
      </img>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
