"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import "./Navbar.css";

const HeaderMenu = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Technology", href: "/technology" },
    { name: "Product", href: "/product" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <nav className="navbar-content">
      <div
        className={`menu-toggle ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div className="bar top" />
        <div className="bar middle" />
        <div className="bar bottom" />
      </div>

      <ul className={`menu ${menuOpen ? "open" : ""}`}>
      {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`link-menu ${pathname === link.href ? "active" : ""}`}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderMenu;
