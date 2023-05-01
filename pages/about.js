import React from "react";
import Head from "next/head";
import AboutComponents from "../components/AboutComponent";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
// import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

export default function about() {
  return (
    <>
      <Navbar />
      <AboutComponents />
      <Footer />
      <PopupWidget />
    </>
  );
}
