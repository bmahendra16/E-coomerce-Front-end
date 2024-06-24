import React from 'react'
import { useParams } from 'react-router-dom'
import { ProductData } from '../Data/Data'
import { useDispatch } from 'react-redux'
import { addToCart } from '../features/cart/cartSlice'

const Details = ({ item }) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(item));
    };
	
    let {id}=useParams()
    let aa=ProductData.find((a)=>a.id==id)
	
  return (
    <div className='container py-3'>
    		<div class="wrapper row">
					<div class="preview col-md-6">
						
						<div class="preview-pic tab-content">
						  <div class="tab-pane active" id="pic-1"><img src={aa.thumbnail} /></div>
						</div>
	
					</div>
					<div class="details col-md-6">
						<h3 class="product-title">men's shoes fashion</h3>
						<div class="rating">
							<div class="stars">
								<span class="fa fa-star checked"></span>
								<span class="fa fa-star checked"></span>
								<span class="fa fa-star checked"></span>
								<span class="fa fa-star"></span>
								<span class="fa fa-star"></span>
							</div>
							<span class="review-no">41 reviews</span>
						</div>
						<p class="product-description">{aa.description}</p>
						<h4 class="price">current price: <span>${aa.price}</span></h4>
						<p class="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>
						<div class="action">
							<button class="add-to-cart btn btn-primary" type="button" onClick={handleAddToCart}>Add To Cart</button>
						</div>
					</div>
				</div>
    </div>
  )
}

export default Details
