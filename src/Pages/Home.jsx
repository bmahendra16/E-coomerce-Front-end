import React from "react";
import Banner from "./Banner";
import ProductByCat from "../Component/ProductByCat";
import CatData from "../Data/Data";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
     <Banner/>
     <div className="container py-2">
      <div className="row">
     <div className="col-lg-4">
            <ul className="list-group  shadow text-uppercase">
              <li className="list-group-item active" aria-current="true">
                Catagories
              </li>
              {CatData.slice(0,6).map((a) => (
                <li class="list-group-item" key={a}>
                  <Link to={`/cat/${a}`} className="text-decoration-none">
                    {a}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          </div>
          </div>
     <ProductByCat tt="smartphones"/>
      <ProductByCat tt="laptops"/>
      <ProductByCat tt="fragrances"/>
      <ProductByCat tt="skincare"/>
      <ProductByCat tt="groceries"/>
      <ProductByCat tt="home-decoration"/>
    <section className="container-fluid m-3 mx-auto">
              <div className="row ms-2">
                <div className="col-lg-4">
                  <img src="https://bestwebcreator.com/shopwise/demo/assets/images/shop_banner_img3.jpg" alt="" />
                </div>
                <div className="col-lg-4">
                  <img src="https://bestwebcreator.com/shopwise/demo/assets/images/shop_banner_img4.jpg" alt="" />
                </div>
                <div className="col-lg-4">
                  <img src="https://bestwebcreator.com/shopwise/demo/assets/images/shop_banner_img5.jpg" alt="" />
                </div>
              </div>
    </section>
    </>
  );
}

export default Home;
