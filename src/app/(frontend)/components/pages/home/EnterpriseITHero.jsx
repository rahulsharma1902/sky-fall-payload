import React from "react";
import "./Banner.css";
import Image from "next/image";

const EnterpriseITHero = () => {
  return (
    <section className="enterpriseit-section bg-white">
        <div className="container">
        <div className="enterpriseit-content">
        <h2>Redefining Enterprise IT with <br />Autonomous Intelligence
        </h2>
        <p>
          Scale effortlessly, resolve instantly, and cut IT costs with agents that think, plan, and act like your best engineers.
        </p>
        <div className="main_multi-million">
        <div className="enterpriseit-image">
         <Image 
            src={"/images/home/Multi-Million Dollar.png"}
                width={5}
                height={5}
                alt={"Arrow Back"}
                layout="responsive"
            />
        </div>

        {/* ROI Text Section */}
        <div className="multi-million-txt">
          <h3>Multi-Million Dollar ROI</h3>
          <p>
            Real time measurable results – Cut IT costs by up to 90%, reduce resolution times into seconds and get rid of internal chaos. Not weeks, Not years – In Minutes.
          </p>
        </div>
        </div>
      </div>

        </div>
      
    </section>
  );
};

export default EnterpriseITHero;
