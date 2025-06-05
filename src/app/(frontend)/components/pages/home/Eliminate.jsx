import Image from "next/image";
import React from "react";
import FlowChart from "../../common/flowchart/FlowChart";
import styleMobile from "./page.module.css";
const Eliminate = () => {
  return (
    <section
      className={`container-xxl py-md-3 py-lg-5 ${styleMobile.eliminateSection}`}
    >
      <div className="container">
        <div className="row ">
          <div className="col-12 text-center ">
            <h2 className="f-32 f-c-p  ff-j py-md-4 py-3  px-md-0 px-4 customHeadingRightCorner position-relative ">
              Solve Complex IT Tickets in Minutes - Not Days
              
            </h2>
            <p className="f-20 f-c-s ff-i f-w-400 d-none d-md-block">
            Skyfall deploys thousands of World Model powered agents to solve your most complex IT 
            <br />
            tickets - fast. From complex support to infrastructure fixes, our agents execute with
            <br />
             automated precision, zero human error and no overhead. Stop firefighting, and focus on
             <br />
              creating strategic business value for the organization.
            
            </p>
          </div>
        </div>
        <div className="row py-md-3 py-lg-5">
          <FlowChart />
        </div>
      </div>
    </section>
  );
};

export default Eliminate;
