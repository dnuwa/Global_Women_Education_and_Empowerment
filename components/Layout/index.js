import Head from "next/head";
import Navbar from "../navbar";
import Footer from "../footer";
import PopupWidget from "../popupWidget";

const Layout = ({ children }) => {
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
      <div className="">
        <main className="">{children}</main>
        <Footer />
        <PopupWidget />
      </div>
    </>
  );
};

export default Layout;
