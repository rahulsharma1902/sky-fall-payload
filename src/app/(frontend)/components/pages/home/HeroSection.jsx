import React from "react";
import "./Banner.css";
import NewLetter from "./NewLetter/NewLetter";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="banner-section"   style={{
      backgroundImage: 'url("/images/home/banner/banner-bg.png")',
      backgroundSize: 'cover',
       backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      position: 'relative',
    }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="banner-content">
              <h2>Goodbye to complex, time-consuming IT tickets <span>Forever</span></h2>
              <p>Your new L3 IT support is an army of Enterprise World-Model powered AI agents.</p>
              <NewLetter />
            </div>
          </div>
          <div className="col-md-6">
            <div className="banner-image">
            {/* <img
                src={"/images/home/banner/Hero_section.png"}
                className="img-fluid"
                alt="banner-image"
              /> */}
              <Image 
                  src={"/images/home/banner/Hero_section.png"}
                  width={5}
                  height={5}
                  alt={"Arrow Back"}
                  layout="responsive"
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
