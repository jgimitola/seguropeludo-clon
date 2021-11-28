import Head from 'next/head';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

import styles from '../styles/page-styles/Home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Seguro Peludo - Clon</title>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Seguro Peludo - Clon" />
        <meta
          property="og:description"
          content="Estar preparado es la mejor opción para proteger la vida de aquellos peluditos a los que tanto amamos ¡Cotiza ya!"
        />
      </Head>

      <Navbar />
      <Hero />

      <section id="por-que">
        
      </section>

      <section id="planes"></section>

      <section id="mas-info"></section>

      <section id="club"></section>

      <section id="blog"></section>

      <section id="comenzar"></section>

      <Footer />
    </>
  );
}
