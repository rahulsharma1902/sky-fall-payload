import React from "react";
import "./Banner.css"; // Adjust if your CSS file name is different

const features = [
  {
    title: "World Model vs LLMs",
    description:
      "Our world-models backed agents understand your entire IT ecosystem and plans like a real person compared to LLM that is good at predicting the next word.",
    images: {
      desktop: "/images/svg/captive_portal-desktop.svg",
      tablet: "/images/svg/captive_portal-tablet.svg",
      mobile: "/images/svg/captive_portal-mobile.svg",
    },
  },
  {
    title: "Zero Headcount Growth",
    description:
      "Scale to 10x support without hiring a single IT Support again – including system admin, desktop support, network engineers or IT software engineers.",
    images: {
      desktop: "/images/svg/Headcount-desktop.svg",
      tablet: "/images/svg/Headcount-tablet.svg",
      mobile: "/images/svg/Headcount-mobile.svg",
    },
  },
  {
    title: "End the Escalation Loop",
    description:
      "Our agents make solving L3 tickets like a L1 task. Simple and always resolving them at their source.",
    images: {
      desktop: "/images/svg/Escalation-desktop.svg",
      tablet: "/images/svg/Escalation-tablet.svg",
      mobile: "/images/svg/Escalation-mobile.svg",
    },
  },
  {
    title: "Autonomous Resolution Engine",
    description:
      "Deploy agents that plan, reason, troubleshoot and fix in minutes – like your best sysadmin but faster and without human error.",
    images: {
      desktop: "/images/svg/mindfulness-desktop.svg",
      tablet: "/images/svg/mindfulness-tablet.svg",
      mobile: "/images/svg/mindfulness-mobile.svg",
    },
  },
];

const FeatureSection = () => {
  return (
    <section className="white-bg">
      <div className="container">
        <div className="row">
          {features.map((feature, idx) => (
            <div key={idx} className="col-md-6 mb-4">
              <div className="feature-box d-flex align-items-start">
                <div className="image-feature">
                  <picture>
                    <source
                      media="(min-width: 1024px)"
                      srcSet={feature.images.desktop}
                    />
                    <source
                      media="(min-width: 768px) and (max-width: 1023px)"
                      srcSet={feature.images.tablet}
                    />
                    <source
                      media="(max-width: 767px)"
                      srcSet={feature.images.mobile}
                    />
                    <img
                      src="image"
                      alt={feature.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </picture>
                </div>
                <div>
                  <h2>{feature.title}</h2>
                  <p>{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
