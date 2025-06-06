import React from "react";
import "./Banner.css";

const supportData = [
  {
    images: {
      desktop: "/images/home/support1-desktop.png",
      tablet: "/images/home/support1-tablet.png",
      mobile: "/images/home/support1-mobile.png"
    },
    title: "Complex Issues, Solved in Minutes",
    description: "Skyfall handles your most expensive and difficult IT tickets with minimal human touch."
  },
  {
    images: {
      desktop: "/images/home/support2-desktop.png",
      tablet: "/images/home/support2-tablet.png",
      mobile: "/images/home/support2-mobile.png"
    },
    title: "Deep Integration. Total Autonomy",
    description: "AI agents understand your IT systems and resolve L3 issues — securely and independently."
  },
  {
    images: {
      desktop: "/images/home/support3-desktop.png",
      tablet: "/images/home/support3-tablet.png",
      mobile: "/images/home/support3-mobile.png"
    },
    title: "No Escalations. No Tribal Knowledge",
    description: "Eliminate bottlenecks and resolve IT issues instantly, at scale."
  }
];

const AutonomousSupport = () => {
  return (
    <section className="autonomous-section">
      <div className="container text-center">
        <h2 className="autonomous-title">
          No Queues. No Delays. <br />
          Just Autonomous IT Support
        </h2>
        <div className="row justify-content-center">
          {supportData.map((item, index) => (
            <div className="col-md-4" key={index}>
              <div className="support-box">
                <picture>
                  <source media="(min-width: 1024px)" srcSet={item.images.desktop} />
                  <source media="(min-width: 768px) and (max-width: 1023px)" srcSet={item.images.tablet} />
                  <source media="(max-width: 767px)" srcSet={item.images.mobile} />
                  <img
                    src="abc"
                    alt={item.title}
                    style={{ width: "100%", height: "auto", objectFit: "cover" }}
                  />
                </picture>
                <h5>{item.title}</h5>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AutonomousSupport;
