import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Root() {
  return (
    <div className='main'>
      <div className='links-container'>
        <h2>Projects</h2>
        <div className='links'>
          <Link to={'temparature-converter'}>Temparature Converter</Link>
          <Link to={'progress-bars-animation'}>Progress Bars Animation</Link>
          <Link to={'usa-heatmap'}>US Heatmap</Link>
          <Link to={'mortage-calculator'}>Mortage Calculator</Link>
        </div>
      </div>
      <div className='outlet'>
        <Outlet />
      </div>
    </div>
  )
}

export default Root