import React from 'react'
import { ProductData } from '../Data/Data'
import { Link, useParams } from 'react-router-dom'

function Catagories() {
    let {cid}=useParams()
    let pData=ProductData.filter((a)=>a.category==cid)
  return (
    <>
      <div className="container">
        <h1>Catagories {cid}</h1>
        <div className="row">
        {pData.map((a)=>(
                    <div className="col-lg-3" key={a.id}>
                    <div className="shadow py-3 border">
                    <img src={a.thumbnail} alt=""  className='Productimg'/>
                    <div className="py-4">
                    <h5><Link to={`/details/${a.id}`}>{a.title}</Link></h5>
                    <button className='btn btn-danger btn-sm '>Add To Cart</button>
                    </div>
                    </div>
                    </div>
                ))}
        </div>
      </div>
    </>
  )
}

export default Catagories
