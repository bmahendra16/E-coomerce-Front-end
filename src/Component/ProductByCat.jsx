import React from 'react'
import { ProductData } from '../Data/Data'
import { Link } from 'react-router-dom'

function ProductByCat(props) {
    let pp=ProductData.filter((a)=>a.category==props.tt)
  return (
    <>
      <section className='py-3 border-bottom'>
        <div className="container">
            <h3 className='fw-bold text-uppercase'>Product By {props.tt}</h3>
            <div className="row">
                {pp.slice(0,4).map((a)=>(
                    <div className="col-lg-3" key={a.id}>
                    <div className="shadow py-3 border">
                    <img src={a.thumbnail} alt=""  className='Productimg'/>
                    <div className="p-4 text-center">
                    <h5><Link to={`/details/${a.id}`}>{a.title}</Link></h5>
                    <button className='btn btn-danger btn-sm '>Add To Cart</button>
                    </div>
                    </div>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </>
  )
}

export default ProductByCat