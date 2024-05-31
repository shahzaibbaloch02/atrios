import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function NavbarSection() {
  return (
    <header className="header" id="header">
      <nav className="navbar navbar-expand-lg menu_white">
        <div className="container-fluid">
          <a className="navbar-brand sticky_logo" href="/">
            <svg
              style={{ width: "195px" }}
              _ngcontent-tee-c155=""
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 335.22 54.95"
            >
              <g _ngcontent-tee-c155="" id="Layer_2" data-name="Layer 2">
                <g _ngcontent-tee-c155="" id="Layer_1-2" data-name="Layer 1">
                  <polygon
                    _ngcontent-tee-c155=""
                    points="21.2 14.03 28.48 0 56.95 54.95 41.84 54.95 21.2 14.03"
                    fill="#3fa9f5"
                  ></polygon>
                  <polygon
                    _ngcontent-tee-c155=""
                    points="26.4 32.73 15.12 54.95 0 54.95 19.05 18.18 26.4 32.73"
                    fill="#fff"
                  ></polygon>
                  <polygon
                    _ngcontent-tee-c155=""
                    points="106.02 16.28 56.81 16.28 49.77 5.73 106.02 5.73 106.02 16.28"
                    fill="#fff"
                  ></polygon>
                  <rect
                    _ngcontent-tee-c155=""
                    x="74.38"
                    y="19.79"
                    width="14.06"
                    height="35.16"
                    fill="#fff"
                  ></rect>
                  <path
                    _ngcontent-tee-c155=""
                    d="M155.41,16.28H120.26l-7-10.55h42.19Q173,5.73,173,19.79v3.52q0,11.28-11.32,13.5L173,55H155.41L137.83,26.82h17.58c2.34,0,3.52-1.17,3.52-3.51V19.79C158.93,17.45,157.75,16.28,155.41,16.28Z"
                    fill="#fff"
                  ></path>
                  <rect
                    _ngcontent-tee-c155=""
                    x="120.26"
                    y="19.79"
                    width="14.06"
                    height="35.16"
                    fill="#fff"
                  ></rect>
                  <rect
                    _ngcontent-tee-c155=""
                    x="187.22"
                    y="5.73"
                    width="14.06"
                    height="49.22"
                    fill="#fff"
                  ></rect>
                  <path
                    _ngcontent-tee-c155=""
                    d="M229.58,40.89q0,3.51,3.51,3.51V55q-17.58,0-17.58-14.06V19.79q0-14.05,17.58-14.06h14.07V16.28H233.09q-3.51,0-3.51,3.51Z"
                    fill="#fff"
                  ></path>
                  <path
                    _ngcontent-tee-c155=""
                    d="M254.19,19.79c0-2.34-1.18-3.51-3.52-3.51V5.73q17.58,0,17.58,14.06v21.1q0,14.05-17.58,14.06H236.61V44.4h14.06c2.34,0,3.52-1.17,3.52-3.51Z"
                    fill="#fff"
                  ></path>
                  <path
                    _ngcontent-tee-c155=""
                    d="M300.06,5.73h35.16V16.28H300.06q-3.53,0-3.52,3.51v3.52q0,3.51,3.52,3.51h7V37.37h-7q-17.58,0-17.58-14.06V19.79Q282.48,5.74,300.06,5.73Z"
                    fill="#fff"
                  ></path>
                  <path
                    _ngcontent-tee-c155=""
                    d="M317.64,55H282.48V44.4h35.16q3.51,0,3.51-3.51t-3.51-3.52h-7V26.82h7q17.58,0,17.58,14.07T317.64,55Z"
                    fill="#fff"
                  ></path>
                </g>
              </g>
            </svg>
            <svg
              style={{ width: "195px" }}
              _ngcontent-tee-c155=""
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 335.22 54.95"
            >
              <g _ngcontent-tee-c155="" id="Layer_2" data-name="Layer 2">
                <g _ngcontent-tee-c155="" id="Layer_1-2" data-name="Layer 1">
                  <polygon
                    _ngcontent-tee-c155=""
                    points="21.2 14.03 28.48 0 56.95 54.95 41.84 54.95 21.2 14.03"
                    fill="#3fa9f5"
                  ></polygon>
                  <polygon
                    _ngcontent-tee-c155=""
                    points="26.4 32.73 15.12 54.95 0 54.95 19.05 18.18 26.4 32.73"
                    fill="#111828"
                  ></polygon>
                  <polygon
                    _ngcontent-tee-c155=""
                    points="106.02 16.28 56.81 16.28 49.77 5.73 106.02 5.73 106.02 16.28"
                    fill="#111828"
                  ></polygon>
                  <rect
                    _ngcontent-tee-c155=""
                    x="74.38"
                    y="19.79"
                    width="14.06"
                    height="35.16"
                    fill="#111828"
                  ></rect>
                  <path
                    _ngcontent-tee-c155=""
                    d="M155.41,16.28H120.26l-7-10.55h42.19Q173,5.73,173,19.79v3.52q0,11.28-11.32,13.5L173,55H155.41L137.83,26.82h17.58c2.34,0,3.52-1.17,3.52-3.51V19.79C158.93,17.45,157.75,16.28,155.41,16.28Z"
                    fill="#111828"
                  ></path>
                  <rect
                    _ngcontent-tee-c155=""
                    x="120.26"
                    y="19.79"
                    width="14.06"
                    height="35.16"
                    fill="#111828"
                  ></rect>
                  <rect
                    _ngcontent-tee-c155=""
                    x="187.22"
                    y="5.73"
                    width="14.06"
                    height="49.22"
                    fill="#111828"
                  ></rect>
                  <path
                    _ngcontent-tee-c155=""
                    d="M229.58,40.89q0,3.51,3.51,3.51V55q-17.58,0-17.58-14.06V19.79q0-14.05,17.58-14.06h14.07V16.28H233.09q-3.51,0-3.51,3.51Z"
                    fill="#111828"
                  ></path>
                  <path
                    _ngcontent-tee-c155=""
                    d="M254.19,19.79c0-2.34-1.18-3.51-3.52-3.51V5.73q17.58,0,17.58,14.06v21.1q0,14.05-17.58,14.06H236.61V44.4h14.06c2.34,0,3.52-1.17,3.52-3.51Z"
                    fill="#111828"
                  ></path>
                  <path
                    _ngcontent-tee-c155=""
                    d="M300.06,5.73h35.16V16.28H300.06q-3.53,0-3.52,3.51v3.52q0,3.51,3.52,3.51h7V37.37h-7q-17.58,0-17.58-14.06V19.79Q282.48,5.74,300.06,5.73Z"
                    fill="#111828"
                  ></path>
                  <path
                    _ngcontent-tee-c155=""
                    d="M317.64,55H282.48V44.4h35.16q3.51,0,3.51-3.51t-3.51-3.52h-7V26.82h7q17.58,0,17.58,14.07T317.64,55Z"
                    fill="#111828"
                  ></path>
                </g>
              </g>
            </svg>
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav menu ms-lg-auto me-lg-auto">
              <li className="nav-item active">
                <a href="#" className="nav-link">
                  Home{" "}
                </a>
              </li>
              <li className="nav-item">
                <a href="#whyAtrios" className="nav-link">
                  Why Choose Atrios?{" "}
                </a>
              </li>
              <li className="nav-item">
                <a href="#benefits" className="nav-link">
                  Benefits
                </a>
              </li>

              <li className="nav-item">
                <a href="#contact" className="nav-link">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <ul className="list-unstyled alter_nav">
            {/* <!-- <li><a href="contact.html"></a></li> --> */}
            <li>
              <a href="https://app.atrios.io" className="nav_btn btn_hover">
                Login<span></span>
              </a>
            </li>
          </ul>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
    </header>
  );
}
