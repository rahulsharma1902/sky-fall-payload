import Image from "next/image";

const features = [
  {
    title: "World Model vs LLMs",
    description:
      "Our world-models backed agents understand your entire IT ecosystem and plans like a real person compared to LLM that is good at predicting the next word.",
    image: "/images/svg/captive_portal.svg",
  },
  {
    title: "Zero Headcount Growth",
    description:
      "Scale to 10x support without hiring a single IT Support again – including system admin, desktop support, network engineers or IT software engineers.",
      image: "/images/svg/Headcount.svg",
    },
  {
    title: "End the Escalation Loop",
    description:
      "Our agents make solving L3 tickets like a L1 task. Simple and always resolving them at their source.",
      image: "/images/svg/Escalation.svg",
  },
  {
    title: "Autonomous Resolution Engine",
    description:
      "Deploy agents that plan, reason, troubleshoot and fix in minutes – like your best sysadmin but faster and without human error.",
      image: "/images/svg/mindfulness.svg",
  },
];

const FeatureSection = () => {
  return (
    <section className="white-bg py-5">
      <div className="container">
        <div className="row">
          {features.map((feature, idx) => (
            <div key={idx} className="col-md-6">
              <div className="feature-box d-flex align-items-start gap-3 p-3 border rounded shadow-sm h-100">
                <div className="image-feature">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={48}
                    height={48}
                    className="img-fluid"
                  />
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
