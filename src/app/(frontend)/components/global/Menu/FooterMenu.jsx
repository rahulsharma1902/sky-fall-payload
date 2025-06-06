"use client";
import React from "react";
import styles from "./footerMenu.module.css";

const FooterMenu = () => {
  return (
    <div className="footer-menu">
      <ul className={styles.footerMenu}>
      <li>Terms</li>
      <li>Privacy</li>
    </ul>
    </div>
  );
};

export default FooterMenu;
