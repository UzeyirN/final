import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
      <div className="navbar-wrapper">

        <div className="navbar-logo">
          <div className='nav-logo'>Notary</div>
        </div>
        <div className="navbar-pages">
          <ul className='nav-ul'>
            <li><Link className='nav-links' to=''>Home</Link></li>
            <li><Link className='nav-links' to='practiceares'>Practice Areas</Link></li>
            <li><Link className='nav-links' to='testimonials'>Testimonials</Link></li>
            <li><Link className='nav-links' to='about'>About</Link></li>
            <li><Link className='nav-links' to='contact'>Contact</Link></li>
            <li><Link className='nav-links' to='add'>Add</Link></li>
          </ul>
        </div>
      </div>


    </>
  )
}

export default Navbar
