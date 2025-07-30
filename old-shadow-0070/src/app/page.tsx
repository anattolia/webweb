"use client";

import { Footer } from "./_components/footer";
import { EnlaceProyecto } from "./_components/enlace-proyecto";
import { infoProyectos } from "./infoProyectos";

export default function Home() {
  return (
    
      <main className="contenedorInicio">
        <div className="enlaces">
          {infoProyectos.map(({ id }) => (
            
            <EnlaceProyecto
              key={id}
              id={infoProyectos[id].id}
              titulo={infoProyectos[id].titulo}
              fondo={infoProyectos[id].imagen}
              enlace={infoProyectos[id].enlace}
              lleno= {infoProyectos[id].lleno}
            />
          ))}
        </div>
       
     <div className="info">
          <h1 className="nombre">Antonia Bustamante</h1>
          <p>Audio, código y otras maravillas</p>
        </div>

         <Footer />
      </main>
  );
}
