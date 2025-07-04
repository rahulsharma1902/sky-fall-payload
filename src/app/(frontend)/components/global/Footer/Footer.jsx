"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./Footer.css";

import FooterMenu from "../Menu/FooterMenu";

const Footer = () => {
  return (
    <section className="layoutBg container-fluid-xxl">
      <footer>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 col-7 text-md-start text-start">
              <p className={`f-16 f-c-s ff-j`}>
                Skyfall.ai, 2024 All rights reserved
              </p>
            </div>
            <div className="col-md-4 col-1 text-center">
              <FooterMenu />
            </div>
            <div className="col-md-2 col-4 text-md-end text-end">
             <ul className="social-icon">
             <Link href="#" className="youtube-link">
                <Image
                  src={"/images/icon/youtube.svg"}
                  alt="youtubeIcon"
                  width={32}
                  height={32}
                />
              </Link>
              <Link href="https://www.linkedin.com/company/skyfallai" target="_blank" className="p-md-3">
                <Image
                  src={"/images/icon/linkedin.svg"}
                  alt={"linkedinIcon"}
                  width={32}
                  height={32}
                />
              </Link>
             </ul>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
