import React from "react";
import "./Banner.css";
import Image from "next/image";

const supportData = [
  {
    image: "/images/home/support1.png",
    title: "Complex Issues, Solved in Minutes",
    description: "Skyfall handles your most expensive and difficult IT tickets with minimal human touch."
  },
  {
    image: "/images/home/support2.png",
    title: "Deep Integration. Total Autonomy",
    description: "AI agents understand your IT systems and resolve L3 issues — securely and independently."
  },
  {
    image: "/images/home/support3.png",
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
                {/* <img src={item.image} alt={item.title} /> */}
                <Image 
                  src={item.image}
                  width={5}
                  height={5}
                  alt={item.title}
                  className="img-fluid mb-3"
                  layout="responsive"
                />
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
