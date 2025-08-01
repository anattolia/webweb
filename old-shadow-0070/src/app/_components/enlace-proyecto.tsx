"use client";

import styles from "./styles/EnlaceProyecto.module.css";
import { useState } from "react";

type Props = {
  id: number;
  titulo: string;
  fondo: string;
  enlace: string;
  lleno: boolean;
  onHover: () => void;
  onLeave: () => void;
};

export function EnlaceProyecto({
  id,
  titulo,
  fondo,
  enlace,
  lleno,
  onHover,
  onLeave,
}: Props) {
  const [backgroundImageUrl, setBackgroundImageUrl] = useState(
    "/images/default-background.jpg"
  );
  const [activeId, setActiveId] = useState(id);

  const setActiveElementOnHover = (id: number) => {
    setActiveId(id);
  };

  const entraRaton = () => {
    setBackgroundImageUrl(`${fondo}`);
    setActiveElementOnHover(activeId);
    onHover(); // El comportamiento de onHover se define en el componente padre (page)
  };

  const saleRaton = () => {
    setBackgroundImageUrl("");
    onLeave();
  };

  return (
    <a
      className={lleno ? styles.enlaceProyecto : styles.vacio}
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "cover",
      }}
      onMouseEnter={entraRaton}
      onMouseLeave={saleRaton}
      href={enlace}
      target="_blank"
      rel="noopener noreferrer"
      key={id}
    >
      <p className={styles.tituloEnlace}>{titulo}</p>
    </a>
  );
}
