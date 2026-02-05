import React from "react";
import heroImg from "../COMPONENTS/Images/hero2.png";
import "../COMPONENTS/Hero.css";

const Hero = () => {
  return (
    <div className="container mt-4 px-3 px-md-0">
      <div className="hero-box rounded-4 position-relative shadow-sm">
        <div className="row g-0 align-items-center h-100">

          {/* LEFT CONTENT */}
          <div className="col-12 col-md-5 ps-4 ps-md-5 py-4 hero-text">
            <h1 className="fw-bold text-dark m-0 hero-title">
              10% off
            </h1>
            <p className="text-dark mt-1 fw-medium hero-desc">
              On first-month rent for bookings
            </p>
            <button className="btn btn-dark mt-0 px-4 py-1 rounded-5 fw-bold">
              Explore
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-12 col-md-7 position-relative h-100 hero-img-col">
            <div className="hero-img-wrapper">
              <img src={heroImg} alt="Hero" className="hero-img" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;