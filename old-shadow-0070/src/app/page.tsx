
import { Footer } from "./_components/footer";
import { EnlaceProyecto } from "./_components/enlace-proyecto";

export default function Home() {
  return (
      <main className="contenedorInicio">
        <div className="enlaces">
            <EnlaceProyecto
              titulo="Welcome to my homepage"
              fondo="wtmh.png"
              enlace="https://anattolia.github.io/www/welcomeToMyHomepage"
              lleno= {true}
            />
            <EnlaceProyecto
              titulo=""
              fondo=""
              enlace=""
              lleno= {false}
            />
            <EnlaceProyecto
              titulo=""
              fondo=""
              enlace=""
              lleno= {false}
            />
         
            <EnlaceProyecto
              titulo="Espectros Bogotá"
              fondo="/espectrosbta.png"
              enlace="https://enflujo.github.io/enflujo-espectros-bogota/"
              lleno= {true}
            />

            <EnlaceProyecto
              titulo=""
              fondo=""
              enlace=""
              lleno= {false}
            />

             <EnlaceProyecto
              titulo=""
              fondo=""
              enlace=""
              lleno= {false}
            />

            <EnlaceProyecto
              titulo="Pronóstico del clima"
              fondo="/pronosticoclima.png"
              enlace="https://enflujo.github.io/programacion-creativa/anattolia/clima/"
              lleno= {true}
            />
            
            <EnlaceProyecto
              titulo=""
              fondo=""
              enlace=""
              lleno= {false}
            />
            <EnlaceProyecto
              titulo="Libres, no valientes"
              fondo="/libresvalientes.png"
              enlace="https://cerosetenta.uniandes.edu.co/especiales/libres-no-valientes/"
              lleno= {true}
            />
            
            <EnlaceProyecto
              titulo=""
              fondo=""
              enlace=""
              lleno= {false}
            />
            <EnlaceProyecto
              titulo=""
              fondo=""
              enlace=""
              lleno= {false}
            />
             <EnlaceProyecto
              titulo="Acústicas del poder"
              fondo="/icono-codigoaz.webp"
              enlace="./acusticasDelPoder"
              lleno= {true}
            />

            <EnlaceProyecto
              titulo=""
              fondo=""
              enlace=""
              lleno= {false}
            />

            <EnlaceProyecto
              titulo=""
              fondo=""
              enlace=""
              lleno= {false}
            />
        </div>
         <Footer />
      </main>

     
    
   
  );
}
