import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function BenefitsSection() {
  return (
    <div>
      <section id="benefits" className="dm_info_box" data-bg-color="#111828">
        <div className="container">
          <div className="section_title h_6 text-center wow fadeInLeft">
            <h2>
              Key <br />
              Benefits
            </h2>
          </div>
          <div className="min_dm_info_box">
            <div className="row">
              <div
                className="col-xl-3 col-md-6"
                data-aos="flip-left"
                data-aos-duration="1000"
              >
                <div
                  className="single-item wow fadeInLeft"
                  data-bg-color="#fff"
                  data-wow-delay="1s"
                >
                  <img src="assets/img/icon/dm_info1.png" alt="" />
                  <h5>
                    Simplify and
                    <br />
                    Automate IT
                  </h5>
                  <p>
                    Orchestrate and automate provisioning processes across
                    distributed locations.
                  </p>
                </div>
              </div>
              <div
                className="col-xl-3 col-md-6"
                data-aos="flip-left"
                data-aos-duration="1200"
              >
                <div
                  className="single-item wow fadeInLeft"
                  data-bg-color="#fff"
                  data-wow-delay="1.2s"
                >
                  <img src="assets/img/icon/dm_info2.png" alt="" />
                  <h5>
                    Enhance network
                    <br />
                    visibility
                  </h5>
                  <p>
                    Increase visibility into end users and devices across the
                    network regardless of their location
                  </p>
                </div>
              </div>
              <div
                className="col-xl-3 col-md-6"
                data-aos="flip-left"
                data-aos-duration="1400"
              >
                <div
                  className="single-item wow fadeInLeft"
                  data-bg-color="#fff"
                  data-wow-delay="1.4s"
                >
                  <img src="assets/img/icon/dm_info3.png" alt="" />
                  <h5>
                    DNS <br />
                    Security
                  </h5>
                  <p>
                    Protect your hybrid workplace and improve your entire
                    security stack against real-time threats
                  </p>
                </div>
              </div>
              <div
                className="col-xl-3 col-md-6"
                data-aos="flip-left"
                data-aos-duration="1600"
              >
                <div
                  className="single-item wow fadeInLeft"
                  data-bg-color="#fff"
                >
                  <img src="assets/img/icon/dm_info4.png" alt="" />
                  <h5>
                    Accelerate
                    <br />
                    DevOps
                  </h5>
                  <p>
                    Eliminate manual intervention and automate network services
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="country_area" data-bg-color="#111828">
        {/* <!-- style="background-color: rgb(18, 18, 47)" --> */}

        <div className="container">
          <div className="section_title h_5 text-center wow fadeInDown">
            <h2>
              We have a global presence. <br />
            </h2>
            <p>
              Atrios Next-gen DNS security solution providing protection from
              cyber security threats <br />
              as well as advanced DNS filtering controls to organisations and
              enterprises.
            </p>
          </div>
          <div
            className="min_country_area"
            data-bg-img="assets/img/flag_bg_2.png"
          >
            <img
              src="assets/img/flag/flag1.png"
              alt=""
              className="one wow fadeInLeft"
              data-wow-delay="1s"
              data-aos="zoom-in"
              data-aos-duration="1000"
            />
            <img
              src="assets/img/flag/flag2.png"
              alt=""
              className="two wow fadeInLeft"
              data-wow-delay="1.3s"
              data-aos="zoom-in"
              data-aos-duration="1200"
            />
            <img
              src="assets/img/flag/flag3.png"
              alt=""
              className="three wow fadeInLeft"
              data-wow-delay="1.6s"
              data-aos="zoom-in"
              data-aos-duration="1400"
            />
            <img
              style={{
                width: "82px",
                height: "82px",
                top: "193px",
                right: "288px",
              }}
              src="assets/img/flag/flag4.png"
              alt=""
              className="four wow fadeInLeft"
              data-wow-delay="1.9s"
              data-aos="zoom-in"
              data-aos-duration="1600"
            />
            <img
              src="assets/img/flag/flag5.png"
              alt=""
              className="five wow fadeInLeft"
              data-wow-delay="2.1s"
              data-aos="zoom-in"
              data-aos-duration="1800"
            />
            <img
              src="assets/img/flag/flag6.png"
              alt=""
              className="six wow fadeInLeft"
              data-wow-delay="2.3s"
              data-aos="zoom-in"
              data-aos-duration="2000"
            />
            <img
              src="assets/img/flag/flag7.png"
              alt=""
              className="seven wow fadeInLeft"
              data-wow-delay="2.6s"
              data-aos="zoom-in"
              data-aos-duration="2200"
            />
            <img
              src="assets/img/flag/flag8.png"
              alt=""
              className="eight wow fadeInLeft"
              data-wow-delay="2.9s"
              data-aos="zoom-in"
              data-aos-duration="2400"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
