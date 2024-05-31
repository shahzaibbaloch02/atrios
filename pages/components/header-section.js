import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function HeaderSection() {
  return (
    <div>
      <section
        className="marketing_area apps_craft_animation "
        data-bg-color="#111828"
      >
        <ul className="list-unstyled prallax_img_element">
          <li>
            <img
              data-parallax='{"x": 0, "y": 100, "rotateZ":100}'
              src="assets/img/start.png"
              alt=""
            />
          </li>
        </ul>
        <div className="container">
          <div className="marketing_inner text-center">
            <h2 className="marketing_banner_title">
              Next-gen DNS Based Cloud <span> Security</span>
            </h2>
            <p>
              Enterprise-ready DDoS protection, DNS content filtering & threat
              control.
            </p>
            <div className="d-flex align-items-center justify-content-center mt-5">
              <a
                href="#contact"
                className="marketing_btn_solid border-radius-3 btn_hover"
              >
                <i className="ph-arrow-down-bold"></i> Request For Demo
                <span></span>
              </a>
              {/* <!-- <a
                href="https://www.youtube.com/watch?v=sU3FkzUKHXU"
                className="marketing_video_btn ms-4 popup-youtube"
                ><i className="ph-play-fill"></i> Watch video</a
            > --> */}
            </div>
          </div>
          <ul className="marketing_image list-unstyled text-center">
            <li>
              <img src="assets/img/newimages/3.png" alt="" />
            </li>
            <li>
              <img src="assets/img/card.png" alt="" />
            </li>
            <li>
              <img src="assets/img/card-2.png" alt="" />
            </li>
          </ul>
        </div>
      </section>

      {/* <div> */}
      <section className="mr_expreience_area">
        <img
          className="position-absolute bell_img"
          src="assets/img/app/bell.png"
          alt="bell"
          data-aos="fade-down"
        />
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 ex_app_img d-flex justify-content-center">
              <div className="">
                <div className="round_shap" data-bg-color="#D3C3FC">
                  <img src="assets/img/app/app_bg.png" alt="" />
                </div>
                <img
                  className="position-absolute zigzag"
                  src="assets/img/app/zigzag-three.png"
                  alt=""
                />
                <img
                  data-parallax='{"x": 60, "y": 0, "rotateZ":0}'
                  className="position-absolute one"
                  src="assets/img/newimages/servers-2.png"
                  alt=""
                />
                <img
                  data-parallax='{"x": -60, "y": 0, "rotateZ":0}'
                  className="position-absolute two"
                  src="assets/img/app/mobile.png"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-5 ">
              <div className="mr_expreience_content ps-5" data-aos="zoom-in">
                <h2 className="m_title">
                  Enterprise
                  <span className="title_border_line">Cybersecurity</span> made
                  easy.
                </h2>
                <p>
                  <strong>Atrios</strong> offers flexible, enterprise-ready,
                  all-in-one, cloud-delivered security & reliability.
                </p>
                {/* <!-- <a href="#" className="theme_btn_text fst-italic">Learn more</a> --> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* </div> */}

      <section className="mr_features_area" data-bg-color="#EAECF1">
        <img
          className="f_img_one position-absolute wow fadeInLeft"
          src="assets/img/app/success_img.png"
          alt=""
        />
        <img
          className="f_img_two position-absolute"
          src="assets/img/app/leaf_top.png"
          alt=""
        />
        <img
          className="f_img_three position-absolute"
          src="assets/img/app/leaf_bottom.png"
          alt=""
        />
        <img
          className="f_img_four position-absolute"
          src="assets/img/app/dot.png"
          alt=""
        />
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div
                className="marketing_section_title pe-5"
                data-aos="zoom-out-right"
              >
                <h2 className="m_title">
                  It's time to simplify and
                  <span className="title_border_line">transform</span>
                </h2>
                <p>
                  Leverage DNS from your biggest threat vector into your first
                  line of defense. Harness zero-touch automation for low network
                  costs, rapid innovation and smooth, seamless networking.
                </p>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="d-grid">
                <div className="mr_features_item">
                  <img src="assets/img/app/flower.png" alt="" />
                  <h3>Reliable</h3>
                  <p>
                    Minimize downtime, cut latency and deliver a seamless
                    network experience using Cloud-native tools.
                  </p>
                  <a className="arrow_btn">
                    <i className="ph-arrow-right"></i>
                  </a>
                </div>
                <div className="mr_features_item">
                  <img src="assets/img/app/flexible.png" alt="" />
                  <h3>Visibility</h3>
                  <p>
                    View and export network activity and security reports via
                    <strong>Atrios'</strong> rich dashboard.
                  </p>
                  <a className="arrow_btn">
                    <i className="ph-arrow-right"></i>
                  </a>
                </div>
                <div className="mr_features_item">
                  <img src="assets/img/app/Union.png" alt="" />
                  <h3>Protect</h3>
                  <p>
                    Prevention against phishing, malware, and ransomware attacks
                  </p>
                  <a className="arrow_btn">
                    <i className="ph-arrow-right"></i>
                  </a>
                </div>
                <div className="mr_features_item">
                  <img src="assets/img/app/scalable.png" alt="" />
                  <h3>Scalable</h3>
                  <p>
                    Easily scale to millions of users and RPS using latest
                    hybrid technologies.
                  </p>
                  <a className="arrow_btn">
                    <i className="ph-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
