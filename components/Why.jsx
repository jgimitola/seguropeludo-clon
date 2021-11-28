import Image from 'next/image';

import ArrowButton from '../components/ArrowButton';

const Why = () => {
  return (
    <section id="por-que">
      <h1>¿Por qué Seguro Peludo?</h1>
      <p>
        Estar preparado es la mejor opción para proteger la vida de aquellos
        peluditos a los que tanto amamos
      </p>
      <div>
        <div>
          <Image
            src="/assets/images/atencion.png"
            width={176}
            height={190}
            alt=""
          />
        </div>
        <p>Atención Veterinaria</p>
      </div>
      <div>
        <div></div>
        <p>Servicios de Guardería</p>
      </div>
      <div>
        <div></div>
        <p>Servicios Funerarios</p>
      </div>
    </section>
  );
};
export default Why;
