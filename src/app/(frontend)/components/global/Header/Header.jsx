"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import HeaderMenu from "../Menu/HeaderMenu";

const Header = () => {
  const [show, setShow] = useState(true);
  const [hasMounted, setHasMounted] = useState(false);
  const lastScrollY = useRef(0);

  // Only run scroll logic on client
  useEffect(() => {
    setHasMounted(true); // ✅ prevents hydration error

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setShow(false);
      } else {
        setShow(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!hasMounted) return null; // ✅ Don't render anything until mounted

  return (
    <section className={`layoutBg sticky-header ${show ? "show" : "hide"}`}>
      <header>
        <div className="no-padding">
          <nav className="navbar">
            <div className="container no-padding">
              <Link href="/">
                <Image
                  className="logoMobile"
                  src="/images/skyfallLogo.svg"
                  alt="sky-fall-logo"
                  width={200}
                  height={30}
                  priority
                />
              </Link>
              <HeaderMenu />
            </div>
          </nav>
        </div>
      </header>
    </section>
  );
};

export default Header;
