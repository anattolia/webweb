import styles from "./styles/ProyectoCuerpo.module.css";

type Props = {
  //titulo: string;
  //descripcion: string;
  id?: number | undefined;
  datos: {
    id: number;
    titulo?: string;
    año?: string;
    enlace?: string;
    imagen?: string;
    descripcion?: string;
    lleno: boolean;
  }[];
};

export function ProyectoCuerpo({ datos, id }: Props) {
  return (
    <section>
      {id && (
        <div className={styles.proyectoCuerpo}>
          <h1 className={styles.titulo}>{datos[id].titulo}</h1>
          {datos[id].año && <p className={styles.año}>{datos[id].año}</p>}
          <div className={styles.descripcion}>{datos[id].descripcion}</div>
        </div>
      )}
    </section>
  );
}
