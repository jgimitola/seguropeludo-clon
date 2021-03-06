import Head from 'next/head';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Why from '../components/Why';
import Plans from '../components/Plans';
import Club from '../components/Club';

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
      <Why />
      <Plans />
      <Club />
      <section id="comenzar"></section>
      <Footer />
    </>
  );
}
