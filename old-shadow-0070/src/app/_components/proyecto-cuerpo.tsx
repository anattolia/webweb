import styles from './styles/ProyectoCuerpo.module.css';

type Props = {
    titulo: string;
    descripcion: string;

}

export function ProyectoCuerpo( { titulo, descripcion }: Props) {
    return (
        <section>
            <div className={styles.proyectoCuerpo}>
                <h1 className={styles.titulo}>{titulo}</h1>
                <div className={styles.descripcion} >
                    {descripcion}
                </div>
            </div>
        </section>
    )
}