import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'


function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // This creates a smooth scrolling effect
    })
  }
  return (
    <footer>
      <form className="bg-danger">
     <div className="container">
      <div className="row py-5">
        <div className="col-lg-6 text-light fw-bold">
          <h3>Subscribe Our Newsletter</h3>
        </div>
        <div className="col-lg-6">
          <input className='py-3 col-sm-9' type="email" name="email" placeholder='enter your email'/><button  type="submit"  className='bg-dark text-light rounded py-3 px-4'>Subscribe</button>
        </div>
      </div>
     </div>
     </form>
     <div className="pt-5 py-2 bg-dark text-light">
     <div className="container ">
      <div className="row ">
        <div className="col-lg-3">
        <Link onClick={scrollToTop}><img src="https://bestwebcreator.com/shopwise/demo/assets/images/logo_light.png" alt="Logo" /></Link>
        <p className='py-3'>If you are going to use of Lorem Ipsum need to be sure there isn't hidden of text</p>
        </div>
        <div className="col-lg-2 ">
        <h5>Useful Links</h5>
        <ul className='list-unstyled'> 
          <li><Link className='nav-link' onClick={scrollToTop}>About Us</Link></li>
          <li><Link className='nav-link' onClick={scrollToTop}>FAQ</Link></li>
          <li><Link className='nav-link' onClick={scrollToTop}>Location</Link></li>
        </ul>
        </div>
        <div className="col-lg-2">
          <h5>Category</h5>
          <ul className='list-unstyled'> 
          <li><Link className='nav-link' onClick={scrollToTop}>Men</Link></li>
          <li><Link className='nav-link' onClick={scrollToTop}>Woman</Link></li>
          <li><Link className='nav-link' onClick={scrollToTop}>Kids</Link></li>
        </ul>
        </div>
        <div className="col-lg-2">
          <h5>My Account</h5>
          <ul className='list-unstyled'> 
          <li><Link className='nav-link' onClick={scrollToTop}>Discount</Link></li>
          <li><Link className='nav-link' onClick={scrollToTop}>Returns</Link></li>
          <li><Link className='nav-link' onClick={scrollToTop}>Order History</Link></li>
        </ul>
        </div>
        <div className="col-lg-3">
          <h5>Contact Info</h5>
          <ul className='list-unstyled'> 
          <li><FontAwesomeIcon icon={faLocationDot }/>  29 Street, Shantinagar Baneshwor, Kathmandu , Nepal</li>
          <li><FontAwesomeIcon icon={faEnvelope }/> info@sitename.com</li>
          <li><FontAwesomeIcon icon={faPhone }/>  +9776510639676</li>
        </ul>
        </div>
      </div>
     </div>
     <hr />
     <p className='text-center'>© 2024 AllRights Reserved by Mahi</p>
     </div>
    </footer>
  )
}

export default Footer
