"use client";
import Image from "next/image";
import React, { useEffect } from "react";

function Navbar() {
  function handleScroll() {
    const bodyScroll = window.scrollY;
    const navbar = document.querySelector(".navbar");

    if (bodyScroll > 300) navbar.classList.add("nav-scroll");
    else navbar.classList.remove("nav-scroll");
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  function handleDropdownMouseMove(event) {
    event.currentTarget.querySelector(".dropdown-menu").classList.add("show");
  }

  function handleDropdownMouseLeave(event) {
    event.currentTarget
      .querySelector(".dropdown-menu")
      .classList.remove("show");
  }
  function handleToggleNav() {
    if (
      document
        .querySelector(".navbar .navbar-collapse")
        .classList.contains("show")
    ) {
      document
        .querySelector(".navbar .navbar-collapse")
        .classList.remove("show");
    } else if (
      !document
        .querySelector(".navbar .navbar-collapse")
        .classList.contains("show")
    ) {
      document.querySelector(".navbar .navbar-collapse").classList.add("show");
    }
  }
  return (
    <nav className="navbar navbar-expand-lg bord blur">
      <div className="container o-hidden">
        <a className="logo icon-img-100" href="/">
          <img
            src="/assets/imgs/logo-light.png"
            alt="logo"
            width={120}
            height={31}
          />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleToggleNav}
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/about">
                <span className="rolling-text">About</span>
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/portfolio">
                <span className="rolling-text">Portfolio</span>
              </a>
            </li>
            <li
              onMouseLeave={handleDropdownMouseLeave}
              onMouseMove={handleDropdownMouseMove}
              className="nav-item dropdown"
            >
              <a
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                href="/services"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="rolling-text">Services</span>
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="/services/web-development">
                  Web Development
                </a>
                <a
                  className="dropdown-item"
                  href="/service/software-development"
                >
                  Custom Software Developemnt
                </a>
                <a
                  className="dropdown-item"
                  href="/services/mobile-development"
                >
                  App Development
                </a>
                <a className="dropdown-item" href="/services/ui-ux-design">
                  UI/UX Design
                </a>
                <a className="dropdown-item" href="/services/graphic-design">
                  Digital Marketing
                </a>
                <a className="dropdown-item" href="/services/seo">
                  SEO
                </a>
              </div>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="/services">
                <span className="rolling-text">Services</span>
              </a>
            </li> */}

            <li className="nav-item">
              <a className="nav-link" href="/blog">
                <span className="rolling-text">Blog</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/FAQ">
                <span className="rolling-text">FAQ</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                <span className="rolling-text">Contact Us</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="contact-button">
          <a
            href="/contact"
            className="butn butn-sm butn-bg main-colorbg radius-5"
          >
            <span className="text">Let&apos;s contact</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
