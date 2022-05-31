import React from 'react'

import './Nav.scss'

const Nav = () => {
  return (
    <div className="nav">
      <h2 className="nav_h2">Noah Gibson</h2>
      <button className="btn">
        <svg
          width="180px"
          height="60px"
          viewBox="0 0 180 60"
          className="border"
        >
          <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
          <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
        </svg>
        <span>Home</span>
      </button>
      <h2 className="nav_h2">About</h2>
      <h2 className="nav_h2">Resume</h2>
      <h2 className="nav_h2">Portfolio</h2>
    </div>
  )
}

export { Nav }
