import React from "react";
import { useParams } from "react-router-dom";
import { ProductData } from "../Data/Data";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

// Removed props - item {item } from details because no need like it shows undefined so and item variable is item which pass to cart so i directly push it to dispatch
const Details = () => {
  const dispatch = useDispatch();

  let { id } = useParams();
  console.log("id", id);
  let item = ProductData.find((item) => item.id == id);

  const handleAddToCart = () => {
    dispatch(addToCart(item));
  };

  if (!item) {
    return <div>Product not found</div>;
  }
  return (
    <div className="container py-3">
      <div class="wrapper row">
        <div class="preview col-md-6">
          <div class="preview-pic tab-content">
            <div class="tab-pane active" id="pic-1">
              <img src={item.thumbnail} />
            </div>
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
          <p class="product-description">{item.description}</p>
          <h4 class="price">
            current price: <span>${item.price}</span>
          </h4>
          <p class="vote">
            <strong>91%</strong> of buyers enjoyed this product!{" "}
            <strong>(87 votes)</strong>
          </p>
          <div class="action">
            <button
              class="add-to-cart btn btn-primary"
              type="button"
              onClick={handleAddToCart}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
