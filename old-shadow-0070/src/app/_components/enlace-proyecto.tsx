"use client";

import styles from './styles/EnlaceProyecto.module.css';
import { useState } from 'react';

type Props = {
    titulo: string;
    fondo: string;
    enlace: string;
    lleno: boolean;
}

export function EnlaceProyecto( { titulo, fondo, enlace, lleno }: Props) {

       const [backgroundImageUrl, setBackgroundImageUrl] = useState('/images/default-background.jpg');

    const entraRaton = () => {
        setBackgroundImageUrl(`${fondo}`);
    };

    const saleRaton = () => {
        setBackgroundImageUrl('');
    }

    return (
            <a className={ lleno ? styles.enlaceProyecto : styles.vacio}
                style={{backgroundImage: `url(${backgroundImageUrl})`, backgroundSize: 'cover'}}
                onMouseEnter={entraRaton}
                onMouseLeave={saleRaton}
                href={enlace}
                target="_blank"
                rel="noopener noreferrer"
            >
                <p className={styles.tituloEnlace}>{titulo}</p>
            </a>
        
    )
}