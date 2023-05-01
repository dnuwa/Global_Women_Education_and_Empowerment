import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
// import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

const Home = () => {
  return (
    <>
      <Head>
        <title>Global Women Education and Empowerment</title>
        <meta
          name="description"
          content="Supporting girls and women’s personal, and professional, growth through education, training and empowerment."
        />
        <link rel="icon" href="/img/gweelogo.jpg" />
      </Head>
      <Navbar />
      <Hero />
      <Testimonials />
      <Footer />
      <PopupWidget />
    </>
  );
};

export default Home;
