import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <div className="top bg-danger text-center ">
          <p className='text-uppercase py-2'> <Link to='/' className='link-offset-2 link-underline link-underline-opacity-0 text-white fs-6'>40% cashback for new users | code: <strong><span className='text-light'>gurdeeposahan40</span></strong></Link></p>
      </div>
      <div className='border-bottom border-dark-subtle ' style={{marginTop:"-10px"}}>
      <div className="container">
          <div className="col-lg-6 ">
          <p className='fs-6 text-uppercase'>Free cash on delivery & shipping available over <span className='text-danger'>$499</span></p>
          </div>
          <div className="col-lg-6">
            <ul className='list-inline list-unstyled'>
              <li></li>
            </ul>
          </div>
      </div>
      </div>
</header>
  )
}

export default Header

