import React from "react";
import WorldIT from "../components/pages/home/WorldIT";
import WorldModel from "../components/pages/technology/WorldModel";
import TechBg from "../components/pages/technology/TechBg";
import TechDescription from "../components/pages/technology/TechDescription";
import Aboutus from '../components/pages/home/Aboutus'

export default function Technology() {
  return (
    <section>a
      <TechBg />
      <WorldModel />
      <TechDescription />
      <Aboutus />
    </section>
  );
}
