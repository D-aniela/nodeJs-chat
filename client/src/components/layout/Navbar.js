import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className='green'>
        <div className='nav-wrapper'>
          <a href='/' className='brand-logo'>
            Chat
          </a>
          <a href='/' data-target='mobile-demo' class='sidenav-trigger'>
            <i class='material-icons'>menu</i>
          </a>
          <ul id='nav-mobile' className='right hide-on-med-and-down'>
            <li>
              <a href='sass.html'>Login</a>
            </li>
            <li>
              <a href='badges.html'>Sign up</a>
            </li>
            <li>
              <a href='collapsible.html'>Logout</a>
            </li>
          </ul>
        </div>
      </nav>
      <ul class='sidenav' id='mobile-demo'>
        <li>
          <a href='sass.html'>Login</a>
        </li>
        <li>
          <a href='badges.html'>Sign Up</a>
        </li>
        <li>
          <a href='collapsible.html'>Logout</a>
        </li>
        <li>
          <a href='mobile.html'>Mobile</a>
        </li>
      </ul>
    </>
  )
}

export default Navbar
