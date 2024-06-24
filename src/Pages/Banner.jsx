import React from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import CatData from "../Data/Data";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <>
      
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide py-2"
      >
        {/* <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div> */}
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval={10000}>
            <img src={img1} className="d-block w-100 " alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <p className="fw-bold">Get up to 50% off Today Only!</p>
              {/* <h4 className="fw-bold" style={{ fontSize: "50px" }}>
                Woman Fashion
              </h4> */}
              <button className="carousel-btn ">
                Shop Now
              </button>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval={2000}>
            <img src={img2} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
            <p className="fw-bold">Get up to 50% off Today Only!</p>
              {/* <h4 className="fw-bold" style={{ fontSize: "50px" }}>
                Woman Fashion
              </h4> */}
              <button className="carousel-btn ">
                Shop Now
              </button>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
            <p className="fw-bold">Get up to 50% off Today Only!</p>
              {/* <h4 className="fw-bold" style={{ fontSize: "50px" }}>
                Woman Fashion
              </h4> */}
              <button className="carousel-btn">
                Shop Now
              </button>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img4} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
            <p className="fw-bold">Get up to 50% off Today Only!</p>
              {/* <h4 className="fw-bold" style={{ fontSize: "50px" }}>
                Woman Fashion
              </h4> */}
              <button className="carousel-btn  ">
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Banner;
