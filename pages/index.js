import Image from "next/image";

import React, { useState, useEffect } from "react";
import NavbarSection from "./components/navbar-section";
import HeaderSection from "./components/header-section";
import WhychooseatriosSection from "./components/whychooseatrios-section";
import BenefitsSection from "./components/benefits-section";
import ContactusSection from "./components/contactus-section";
import FooterSection from "./components/footer-section";

export default function Home() {
  useEffect(() => {
    setTimeout(() => {
      console.log("resetx");
    }, 2500);
  }, []);

  return (
    <div>
      <div className="page-wrapper dark" data-scroll-animation="true">
        <NavbarSection />
        <div className="main_body" data-bg-color="#f4f4f4">
          <HeaderSection />
          <WhychooseatriosSection />
          <BenefitsSection />
          <ContactusSection />
          <FooterSection />
        </div>
      </div>
    </div>
  );
}
