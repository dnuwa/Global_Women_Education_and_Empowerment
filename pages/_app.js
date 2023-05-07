import { ThemeProvider } from "next-themes";
import "../css/tailwind.css";
import { Inter } from "next/font/google";
import Layout from "../components/Layout";
const inter = Inter({ weight: "400", subsets: ["latin"] });

function MyApp({ Component, pageProps }) {
  return (
    <Layout className={inter.className}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
