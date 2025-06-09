"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import HeaderMenu from "../Menu/HeaderMenu";

const Header = () => {
  const [show, setShow] = useState(true);
  let lastScrollY = 0;
  const handleScroll = () => {
    if (typeof window !== "undefined") {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShow(false);
      } else {
        setShow(true);
      }

      lastScrollY = currentScrollY;
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className={`layoutBg sticky-header ${show ? "show" : "hide"}`}>

      <header>
        <div className="no-padding">
          {/* <nav className="navbar navbar-expand-lg align-items-center "> */}
          <nav className={`navbar`}>
            <div className="container no-padding">
              <Link href="/">
                <Image
                  layout="responsive"
                  className="logoMobile"
                  src={"/images/skyfallLogo.svg"}
                  alt={`sky-fall-logo`}
                  width={200}
                  height={30}
                />
              </Link>
              {/* <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button> */}
              {/* <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              > */}
              <HeaderMenu />
              {/* </div> */}
            </div>
          </nav>
        </div>
      </header>
    </section>
  );
};

export default Header;
