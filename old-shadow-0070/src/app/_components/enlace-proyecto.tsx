"use client";

import styles from './styles/EnlaceProyecto.module.css';
import { useState } from 'react';

type Props = {
    id: number;
    titulo: string;
    fondo: string;
    enlace: string;
    lleno: boolean;
}

export function EnlaceProyecto( { id, titulo, fondo, enlace, lleno }: Props) {
    const [backgroundImageUrl, setBackgroundImageUrl] = useState('/images/default-background.jpg');
    const [activeId, setActiveId] = useState(id);
    
    const setActiveElementOnHover = (id: number) => {
    setActiveId(id);
   };

    const entraRaton = () => {
        setBackgroundImageUrl(`${fondo}`);
        setActiveElementOnHover(activeId);
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
                key={id}
            >
                <p className={styles.tituloEnlace}>{titulo}</p>
            </a>
    )
}