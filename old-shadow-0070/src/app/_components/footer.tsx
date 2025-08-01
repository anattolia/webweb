import Image from "next/image";
import styles from "./styles/Footer.module.css";

const fecha = new Date();
const dia = fecha.getDate();
const mes = fecha.getMonth() + 1;
const anio = fecha.getFullYear();

export function Footer() {
  return (
    <footer className={styles.footer}>
      <a className={styles.nombre} href="./" rel="noopener noreferrer">
        <Image
          className={styles.icono}
          aria-hidden
          src="/home.png"
          alt="File icon"
          width={16}
          height={16}
        />
        Home
      </a>

      <a className={styles.nombre} href="./anto" rel="noopener noreferrer">
        <Image
          className={styles.icono}
          aria-hidden
          src="/cara.png"
          alt="File icon"
          width={16}
          height={16}
        />
        Bio | CV
      </a>

      <a
        className={styles.nombre}
        href="https://github.com/anattolia"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          className={styles.icono}
          aria-hidden
          src="/github.svg"
          alt="File icon"
          width={16}
          height={16}
        />
        Github
      </a>

      <p className={styles.nombre}>{`${dia} / ${mes} / ${anio}`}</p>
    </footer>
  );
}
