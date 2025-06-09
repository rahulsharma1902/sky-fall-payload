"use client";
import React, { useEffect } from "react";
import Modal from "../components/common/modal/Modal";
import Disposal from "../components/pages/home/Disposal/Disposal";
import Eliminate from "../components/pages/home/Eliminate";
import Hero from "../components/pages/home/Hero";
import BannarHome from "../components/pages/home/BannarHome";
import WorldIT from "../components/pages/home/WorldIT";
import Lenis from "lenis";
import Aboutus from "../components/pages/home/Aboutus";
import "./product.css"
export default function Product() {
  useEffect(() => {
    const lenis = new Lenis();

    // Listen for the scroll event and log the event data

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <section>
      <BannarHome />
    <section className="product-content">
    <WorldIT
        home={true}
        title={<h3 className="f-40 f-c-p ff-j text-center m-0">The First AI Department</h3>}
        tagline={<h3 className="f-40 f-c-p ff-j text-center m-0">That Solves All IT Tasks Autonomously</h3>}
        description1={`Powered by Enterprise World Models - Skyfall’s AI Agents fix complex IT `}
        description2={`issues, minimizing need for human intervention`}
      />
    </section>
      <Modal />
      <Eliminate />
      <Disposal />
      {/* <Aboutus /> */}
    </section>
  );
}
