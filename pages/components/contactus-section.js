import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

export default function ContactusSection() {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    // console.log("handleSubmit ran");
    event.preventDefault(); // 👈️ prevent page refresh
    setLoading(true);

    try {
      e.preventDefault();
      console.log();
      const templateParams = {
        first_name: e.target.first_name.value,
        last_name: e.target.last_name.value,
        email: e.target.email.value,
        phone: e.target.phone.value,
        subject: e.target.subject.value,
        // budget: e.target.budget.value,
        message: e.target.message.value,
      };

      const response = await emailjs.send(
        "service_s56gr5m",
        "template_zoyfqcq",
        templateParams,
        "V0trd1k5kLogKcGBb"
      );
      // swal("SUCCESS!", "Email has been submitted.", "success");
      Swal.fire("SUCCESS!", "Email has been submitted.", "success");
      // 👇️ clear all input values in the form
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setSubject("");
      setMessage("");
      setLoading(false);
      // console.log("SUCCESS!", response.status, response.text);
    } catch (err) {
      console.error(err);
      Swal.fire("WARNING!", "Failed to send the Email!", "warning");
      // swal("warning", "Failed to send the Email !", "warning");
      setLoading(false);
    }
  };

  // $("submit").click(function () {
  //   swal("Success Message Title", "Well done, you pressed a button", "success");
  // });

  return (
    <div>
      <section className="contact_form" id="contact" data-bg-color="#FCFCFE">
        <div className="container">
          <div className="section_title innar_page text-center wow fadeInLeft">
            <h2 data-aos="fade-right">Let's discuss your projects</h2>
          </div>
          <form action="#" className="main_form" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-lg-6">
                <div className="form_box">
                  <h6>First Name</h6>
                  <input
                    required
                    className="form-control"
                    type="text"
                    placeholder="First Name"
                    id="first_name"
                    onChange={(event) => setFirstName(event.target.value)}
                    value={first_name}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form_box">
                  <h6>Last Name</h6>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Last Name"
                    id="last_name"
                    onChange={(event) => setLastName(event.target.value)}
                    value={last_name}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form_box">
                  <h6>Mail</h6>
                  <input
                    required
                    className="form-control"
                    type="email"
                    placeholder="Mail"
                    id="email"
                    onChange={(event) => setEmail(event.target.value)}
                    value={email}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form_box">
                  <h6>Phone</h6>
                  <input
                    className="form-control"
                    type="tel"
                    placeholder="Phone"
                    id="phone"
                    onChange={(event) => setPhone(event.target.value)}
                    value={phone}
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form_box">
                  <h6>Subject</h6>
                  <input
                    required
                    className="form-control"
                    type="text"
                    placeholder="What are you looking for"
                    id="subject"
                    onChange={(event) => setSubject(event.target.value)}
                    value={subject}
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form_box">
                  <h6>Message</h6>
                  <input
                    required
                    className="form-control"
                    type="text"
                    placeholder="Tell us about your project"
                    id="message"
                    onChange={(event) => setMessage(event.target.value)}
                    value={message}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="submit_note">
                  <span>*We won’t spam or publish your email</span>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="submit_area">
                  <button type="submit" className="submit_btn">
                    {loading ? (
                      <div
                        class="spinner-border"
                        style={{ width: "20px", height: "20px" }}
                        role="status"
                      >
                        <span class="sr-only">Loading...</span>
                      </div>
                    ) : (
                      ""
                    )}
                    <span style={{ paddingLeft: "10px" }}>
                      Submit your request
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="shape_items">
          <img src="assets/img/cfs1.png" alt="" className="one" />
          <img src="assets/img/cfs2.png" alt="" className="two" />
        </div>
      </section>

      <section className="dm_cta" data-bg-color="#1A1919">
        <div className="container">
          <div className="section_title h_6 text-center">
            <h2 data-aos="zoom-in-up">Get in touch!</h2>
            <p>
              More work, greater risk, increasing costs, and stunted innovation
              are all consequences of complex networks.
              <br />
              Let's change that with <strong>Atrios</strong>
            </p>
          </div>
          <form className="email_form">
            <input
              className="form-control"
              type="email"
              placeholder="enter your email address..."
            />
            <input className="dm_cta_btn" type="submit" value="Get Started" />
            <img src="assets/img/icon/mail1.png" alt="" className="icon" />
          </form>
        </div>
        <div className="shape_items">
          <img
            data-parallax='{"x": 0, "y": 100, "rotateZ":0}'
            src="assets/img/dm_cta_shape3.png"
            alt=""
            className="three"
          />
          <img src="assets/img/dm_cta_shape4.png" alt="" className="four" />
          <img
            data-parallax='{"x": 0, "y": 100, "rotateZ":0}'
            src="assets/img/dm_cta_shape5.png"
            alt=""
            className="five"
          />
        </div>
      </section>
    </div>
  );
}
