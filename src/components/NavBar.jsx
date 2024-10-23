import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/image/logo.png'
import '../assets/css/NavBar.css'
function NavBar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg fixed-top">
  <div className="container">
    <Link className="navbar-brand" to={'/'}>
    <img src={Logo} alt="Eqilim logo" />
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" >Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'/'}>Yoga Plans</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'/'}>Talk To Yoga Expert</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'/'}>FAQ</Link>
        </li>

      </ul>
    </div>
        <button className="signup-btn" type="submit">Sign Up</button>
  </div>
</nav>
    </div>
  )
}

export default NavBar