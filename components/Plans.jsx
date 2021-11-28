import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import ArrowButton from '../components/ArrowButton';
import styles from '../styles/Plans.module.scss';

const Plans = () => {
  return (
    <section className={styles.section} id="planes">
      <div className={styles.container}>
        <h2 className={styles.title}>Nuestros Planes</h2>

        <table className={styles.planPrices}>
          <tr>
            <th>Básico</th>
            <th>Estándar</th>
            <th>Premium</th>
          </tr>
          <tr>
            <td>
              <p>$20.000</p>
              <p>Mensual</p>
            </td>
            <td>
              <p>$28.000</p>
              <p>Mensual</p>
            </td>
            <td>
              <p>$36.000</p>
              <p>Mensual</p>
            </td>
          </tr>
        </table>

        <h2 className={styles.title}>Beneficios de Seguro Peludo</h2>
        <p className={styles.message}>
          Diseñamos nuestros planes para que sean simples y sencillos, de modo
          que puedas pasar menos tiempo eligiendo y más tiempo con tu peludito.
        </p>

        <table className={styles.comparePlans}>
          <tr>
            <th></th>
            <th>Básico</th>
            <th>Estándar</th>
            <th>Premium</th>
          </tr>
          <tr>
            <td>
              <strong>Gastos Medicos por accidente</strong>
            </td>
            <td>
              <FontAwesomeIcon icon={faCheck} />
            </td>
            <td>
              <FontAwesomeIcon icon={faCheck} />
            </td>
            <td>
              <FontAwesomeIcon icon={faCheck} />
            </td>
          </tr>
          <tr>
            <td>
              <strong>Servicio de eutanasia por enfermedad o accidente</strong>
            </td>
            <td>
              <FontAwesomeIcon icon={faCheck} />
            </td>
            <td>
              <FontAwesomeIcon icon={faCheck} />
            </td>
            <td>
              <FontAwesomeIcon icon={faCheck} />
            </td>
          </tr>
          <tr>
            <td>
              <strong>
                Asistencia funeraria, cremación por enfermedad o accidente
              </strong>
            </td>
            <td>
              <FontAwesomeIcon icon={faCheck} />
            </td>
            <td>
              <FontAwesomeIcon icon={faCheck} />
            </td>
            <td>
              <FontAwesomeIcon icon={faCheck} />
            </td>
          </tr>
          <tr>
            <td>
              <strong>
                Consulta médica veterinaria a domicilio o en clínica
              </strong>
            </td>
            <td></td>
            <td>
              <FontAwesomeIcon icon={faCheck} />
            </td>
            <td>
              <FontAwesomeIcon icon={faCheck} />
            </td>
          </tr>
          <tr>
            <td>
              <strong>
                Guardería por accidente o enfermedad del asegurado
              </strong>
            </td>
            <td></td>
            <td>
              <FontAwesomeIcon icon={faCheck} />
            </td>
            <td>
              <FontAwesomeIcon icon={faCheck} />
            </td>
          </tr>
          <tr>
            <td>
              <strong>Muerte accidental de la mascota</strong>
            </td>
            <td></td>
            <td>
              <FontAwesomeIcon icon={faCheck} />
            </td>
            <td>
              <FontAwesomeIcon icon={faCheck} />
            </td>
          </tr>
          <tr>
            <td>
              <strong>Responsabilidad civil extracontractual</strong>
            </td>
            <td>
              <FontAwesomeIcon icon={faCheck} />
            </td>
            <td>
              <FontAwesomeIcon icon={faCheck} />
            </td>
            <td>
              <FontAwesomeIcon icon={faCheck} />
            </td>
          </tr>
          <tr>
            <td>Daños a Bienes de Terceros</td>
            <td>
              <FontAwesomeIcon icon={faCheck} />
            </td>
            <td>
              <FontAwesomeIcon icon={faCheck} />
            </td>
            <td>
              <FontAwesomeIcon icon={faCheck} />
            </td>
          </tr>
          <tr>
            <td>Lesiones o Muerte a Terceros</td>
            <td>
              <FontAwesomeIcon icon={faCheck} />
            </td>
            <td>
              <FontAwesomeIcon icon={faCheck} />
            </td>
            <td>
              <FontAwesomeIcon icon={faCheck} />
            </td>
          </tr>
          <tr>
            <td>Gastos Médicos de Urgencia</td>
            <td>
              <FontAwesomeIcon icon={faCheck} />
            </td>
            <td>
              <FontAwesomeIcon icon={faCheck} />
            </td>
            <td>
              <FontAwesomeIcon icon={faCheck} />
            </td>
          </tr>
          <tr>
            <td>Gastos de Defensa</td>
            <td>
              <FontAwesomeIcon icon={faCheck} />
            </td>
            <td>
              <FontAwesomeIcon icon={faCheck} />
            </td>
            <td>
              <FontAwesomeIcon icon={faCheck} />
            </td>
          </tr>
        </table>
        <button className={styles.button}>COTIZAR</button>
      </div>
      <Image
        className={styles.sticker}
        src="/assets/images/plans.png"
        width={428}
        height={222}
        alt=""
      />
      <div className={styles.buttonGroup}>
        <ArrowButton to="#por-que" up />
        <ArrowButton to="#club" />
      </div>
    </section>
  );
};
export default Plans;
