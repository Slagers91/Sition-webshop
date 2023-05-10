import Head from "next/head";
import Navbar from "../components/Navbar";
import Products from "../components/products";
import { Footer } from "../components/footer";

export default function Home() {
  return (
    <>
      <Head>
        <style>{`
          body {
            font-family: 'Roboto', sans-serif;
          }
        `}</style>
        <title>Ruud Slagers | Webshop React</title>
        <meta name="description" content="Sition opdracht" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Products />
      <Footer />
    </>
  );
}
