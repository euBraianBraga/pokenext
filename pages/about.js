import Image from "next/image";

import styles from "../styles/About.module.css";

export default function About() {
  return (
    <div className={styles.about}>
      <h1>Sobre o projeto</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit velit
        eum, excepturi illo, vitae fugit, provident rerum alias magni molestias
        deserunt ducimus similique! Culpa sequi minima ipsum facilis, nostrum
        atque.
      </p>
      <Image
        src="/images/charizard.png"
        width="300"
        height="300"
        alt="Imagem do Charizard"
      />
    </div>
  );
}
