type Props = {
    titulo: string;
    descripcion: string;

}

export function ProyectoCuerpo( { titulo, descripcion }: Props) {
    return (
        <section>
             <div className="contenedorGeneral">
                    <h1>{titulo}</h1>
                  
                    <div className="descripcion" >
                    {descripcion}
                  </div>
                  </div>
        </section>
    )
}