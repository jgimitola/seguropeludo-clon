import Head from 'next/head';

import Button from 'react-bootstrap/Button';

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
      <Button variant="primary">Soy un botón</Button>
    </>
  );
}
