import React from "react";
import NewLetter from "./NewLetter/NewLetter";
import Modal from "../../common/modal/Modal";

const WaitlistSection = () => {
  const backgroundStyle = {
    backgroundImage: `url("/images/home/waitlist-bg.png")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    padding: "183px 0 110px",
    color: "white",
    textAlign: "center",
    position: "relative",
  };

  return (
    <section className="waitlist-section" style={backgroundStyle}>  
      <div className="container">
        <div className="waitlist-content">
          <h2>Does this sound too good to be true? We promise it is not.</h2>
          <p>Sign up for the waitlist to get the inside scoop.</p>
          <NewLetter />
          <Modal />

        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;
