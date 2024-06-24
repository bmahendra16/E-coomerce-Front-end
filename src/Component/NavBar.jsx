import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Blog from '../Pages/Blog'
import Catagories from '../Pages/Catagories'
import Details from '../Pages/Details'
import Error from '../Pages/Error'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import Cart from '../Pages/Cart'

function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-danger-subtle sticky-top" style={{marginTop:"-10px"}}>
        <div className="container">
          <Link className="navbar-brand" to="/"><img src="https://bestwebcreator.com/shopwise/demo/assets/images/logo_dark.png" alt="SHOP LOGO" /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <Link className="nav-link active dropdown-toggle" aria-current="page" to="/">Home</Link>
                <ul className="sub-menu dropdown-menu">
                  <li><Link className="dropdown-item" to="/">Home 1</Link></li>
                  <li><Link className="dropdown-item" to="/">Home 2</Link></li>
                  <li><Link className="dropdown-item" to="/">Home 3</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" aria-current="page" to="">Pages</Link>
                <ul className="sub-menu dropdown-menu">
                  <li><Link className="dropdown-item" to="/about">About Us</Link></li>
                  <li><Link className="dropdown-item" to="/contact">Contact Us</Link></li>
                  <li><Link className="dropdown-item" to="/blog">Blog</Link></li>
                  <li><Link className="dropdown-item" to="/error">404 Error Page</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blog">Blog</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  <FontAwesomeIcon icon={faCartArrowDown} />
                  <span>0</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/error' element={<Error />} />
        <Route path='/cat/:cid' element={<Catagories />} />
        <Route path='/details/:id' element={<Details />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </>
  )
}

export default NavBar
