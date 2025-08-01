"use client";
import styles from "./styles/Intro.module.css";

export function Intro() {
  function handleClick() {
    console.log("increment like count");
  }

  return (
    <section onClick={handleClick}>
      <h1 className={styles.nombre}>Antonia Bustamante</h1>
      <div className={styles.intro}>
        <div className={styles.columna}>
          Coder and sound engineer based in Bogotá (Colombia). My creative
          practice focuses on a critical and practical understanding of the
          intersection of arts and technologies. I am interested in collective
          ways of working, listening practices, and experimental and local ways
          of using technologies. Currently, I am studying for an MA in
          Philosophy and work mixing live music, teaching, researching, and
          developing web projects.
        </div>
        <div className={styles.columna}>
          Ingeniera de sonido y programadora de Bogotá (Colombia). Mi práctica
          creativa se centra en la comprensión crítica y práctica de la
          intersección entre las artes y las tecnologías. Me interesan las
          formas colectivas de trabajo, las prácticas de escucha y las formas
          experimentales y locales de utilizar las tecnologías. Actualmente,
          estudio una maestría en Filosofía y trabajo mezclando música en vivo,
          enseñando, investigando y desarrollando proyectos web.
        </div>
      </div>
    </section>
  );
}
