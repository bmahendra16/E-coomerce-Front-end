import React from "react";
import { ProductData } from "../Data/Data";
import { Link } from "react-router-dom";
import { addToCart } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";

function ProductByCat(props) {
  let pp = ProductData.filter((a) => a.category === props.tt);
  /// == replaced to === and new function added handleAdTtoCart
  const dispatch = useDispatch();

  function handleAddToCart(item) {
    dispatch(addToCart(item));
  }
                                                                    
  return (
    <>
      <section className="py-3 border-bottom">
        <div className="container">
          <h3 className="fw-bold text-uppercase">Product By {props.tt}</h3>
          <div className="row">
            {pp.slice(0, 4).map((a) => (
              <div className="col-lg-3" key={a.id}>
                <div className="shadow py-3 border">
                  <img src={a.thumbnail} alt="" className="productImage" />
                  <div className="p-4 text-center">
                    <h5>
                      <Link to={`/details/${a.id}`}>{a.title}</Link>
                    </h5>
                    <button
                      className="btn btn-danger btn-sm "
                      onClick={() => handleAddToCart(a)}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductByCat;
