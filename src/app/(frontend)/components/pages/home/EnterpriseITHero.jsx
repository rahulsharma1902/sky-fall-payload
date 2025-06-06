import React from "react";
import "./Banner.css";

const EnterpriseITHero = () => {
  return (
    <section className="enterpriseit-section bg-white">
      <div className="container">
        <div className="enterpriseit-content">
          <h2>
            Redefining Enterprise IT with <br />
            Autonomous Intelligence
          </h2>
          <p>
            Scale effortlessly, resolve instantly, and cut IT costs with agents that think,
            plan, and act like your best engineers.
          </p>

          <div className="main_multi-million">
            {/* Responsive Image Section */}
            <div className="enterpriseit-image">
              <picture>
                <source
                  media="(min-width: 1024px)"
                  srcSet="/images/home/Multi-Million-Dollar-desktop.png"
                />
                <source
                  media="(min-width: 768px) and (max-width: 1023px)"
                  srcSet="/images/home/Multi-Million-Dollar-tablet.png"
                />
                <source
                  media="(max-width: 767px)"
                  srcSet="/images/home/Multi-Million-Dollar-mobile.png"
                />
                <img
                  src="image"
                  alt="Multi-Million Dollar ROI"
                  style={{ width: "100%", height: "auto", objectFit: "cover" }}
                />
              </picture>
            </div>

            {/* ROI Text Section */}
            <div className="multi-million-txt">
              <h3>Multi-Million Dollar ROI</h3>
              <p>
                Real time measurable results – Cut IT costs by up to 90%, reduce resolution
                times into seconds and get rid of internal chaos. Not weeks, Not years – In
                Minutes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseITHero;
