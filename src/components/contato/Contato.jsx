import styles from "./Contato.module.css";
import img from "../../../public/images/contato.jpg";
import dataContato from "../../config/contact.json";
import Head from "../head/Head";

const Contato = () => {
  return (
    <>
      <section className={`${styles.contato} animeLeft`}>
        <Head title="Ranek | Contato" description="Entre em contato" />
        <img src={img} alt="Máquina de escrever" />
        <div>
          <h1>Entre em contato.</h1>
          <ul className={styles.dados}>
            {dataContato.contact.map((item, index) => (
              <li key={index}>{item.text}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Contato;
