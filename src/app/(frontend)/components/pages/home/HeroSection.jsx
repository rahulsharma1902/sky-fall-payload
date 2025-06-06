import React from "react";
import "./Banner.css";
import NewLetter from "./NewLetter/NewLetter";

const Hero = () => {
  return (
    <section
      className="banner-section"
      style={{
        backgroundImage: 'url("/images/home/banner/banner-bg.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Left side content */}
          <div className="col-md-6">
            <div className="banner-content">
              <h2>
                Goodbye to complex, time-consuming IT tickets <span>Forever</span>
              </h2>
              <p>Your new L3 IT support is an army of Enterprise World-Model powered AI agents.</p>
              <NewLetter />
            </div>
          </div>

          {/* Right side image */}
          <div className="col-md-6">
            <div className="banner-image">
            <picture>
            <source media="(min-width: 1024px)" srcSet="/images/home/banner/Hero_section.png" />
            <source media="(min-width: 768px) and (max-width: 1023px)" srcSet="/images/home/banner/hero-tablet.png" />
            <source media="(max-width: 767px)" srcSet="/images/home/banner/hero-mobile.png" />
            <img
              src="abc"
              alt="Hero banner image"
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
          </picture>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
