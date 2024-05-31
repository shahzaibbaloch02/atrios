import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function WhychooseatriosSection() {
  return (
    <div>
      <section id="whyAtrios" className="info_box h_4" data-bg-color="#111828">
        <div className="container">
          <div className="section_title h_4 text-center wow fadeInUp">
            <h2>
              Drive rapid change and <br />
              accelerate innovation
            </h2>
            <p>
              Cybersecurity is evolving. Consolidating features like secure web
              gateway, cloud-delivered firewall, and DNS security into one
              cloud-based architecture,
              <br />
              organizations can streamline their cybersecurity and improve their
              security resilience.
            </p>
          </div>
          <div className="min_area">
            <div className="row">
              <div className="col-lg-4">
                <div
                  className="single_info_box wow fadeInUp"
                  data-bg-color="rgba(241, 134, 53, 0.03)"
                >
                  <div
                    className="icon"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    <img src="assets/img/info_box/4_1.svg" alt="" />
                  </div>
                  <div className="content">
                    <h5>Content Filtering</h5>
                    <p>
                      Filter out all unwanted or inappropriate resources such as
                      pornography, violence, hate or racism, gambling and other
                      50+ categories.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div
                  className="single_info_box wow fadeInUp"
                  data-wow-delay="0.2s"
                  data-bg-color="rgba(91, 198, 67, 0.03)"
                >
                  <div
                    className="icon"
                    data-aos="fade-up"
                    data-aos-duration="1300"
                  >
                    <img src="assets/img/info_box/4_2.svg" alt="" />
                  </div>
                  <div className="content">
                    <h5>Security Threat Protection</h5>
                    <p>
                      Protect your users from phishing, malware, ransomware, and
                      more using our cloud-based DNS service.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div
                  className="single_info_box wow fadeInUp"
                  data-wow-delay="0.3s"
                  data-bg-color="rgba(75, 137, 225, 0.03)"
                >
                  <div
                    className="icon"
                    data-aos="fade-up"
                    data-aos-duration="1600"
                  >
                    <img src="assets/img/info_box/4_3.svg" alt="" />
                  </div>
                  <div className="content">
                    <h5>App Blocking</h5>
                    <p>
                      One Click away from blocking different applications in
                      your network. We have a signature base of 100+ relevant
                      Applications for Blocking.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="integration_two h_4" data-bg-color="#111828">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6">
              <div className="section_img">
                <div className="shape"></div>
                <img
                  className="wow fadeInLeft"
                  src="assets/img/newimages/aa.png"
                  alt=""
                />
              </div>
            </div>
            <div className="col-xl-6">
              <div className="content">
                <div className="section_title h_4 wow fadeInRight">
                  <h2>
                    DNS-layer security
                    <br />
                    that speeds up your network
                  </h2>
                  <p>
                    Our distributed edge nodes enable <strong>Atrios</strong> to
                    resolve requests faster and boost internet speed all while
                    protecting against cyberthreats
                  </p>
                </div>
                <ul
                  className="data_list list-unstyled"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                >
                  <li
                    className="d-flex align-items-center wow fadeInLeft"
                    data-wow-delay="0.1s"
                  >
                    <i className="ph-check"></i> Threat Intelligence
                  </li>
                  <li
                    className="d-flex align-items-center wow fadeInLeft"
                    data-wow-delay="0.4s"
                  >
                    <i className="ph-check"></i>Category based Web Security
                  </li>
                  <li
                    className="d-flex align-items-center wow fadeInLeft"
                    data-wow-delay="0.7s"
                  >
                    <i className="ph-check"></i>App discovery & blocking
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="shape_items">
          <img src="assets/img/inte_shape.png" alt="" className="one" />
        </div>
      </section>
    </div>
  );
}
