import Image from "next/image";
import { Footer } from "../_components/footer";

export default function Home() {
  return (
    <main className="paginaProyecto">
      <h1 className="titulo">Acústicas del poder</h1>
      <div className="descripcion">
        <p>2020</p>
        <p>
          Póster con el que participé en el 19{" "}
          <a href="https://festivaldelaimagen.com/" target="_blank">
            Festival Internacional de la Imagen
          </a>{" "}
          (Manizales, Colombia), realizado a partir de un ensayo ilustrado sobre
          el sonido y el ejercicio del poder.
        </p>
      </div>
      <Image
        className="imagenProyectoPag"
        aria-hidden
        src="/acusticas-del-poder-poster.webp"
        alt="Acústicas del poder: poster"
        width={2000}
        height={1000}
      />
      <p className="enlaceDescarga">
        <a href="./acusticas-del-poder-poster.pdf">Descarga en pdf.</a>
      </p>

      <div className="texto">
        <p>
          El ensayo ilustrado del que surgió este póster nace de una pregunta que me hago desde hace
          años: ¿qué relación hay entre el ejercicio del poder y lo sonoro?
          Quizás mi interés al respecto se deba a un corto abandono a “manos” de
          una máquina incubadora al que fui sometida al nacer, debido a una
          prolongada apnea neonatal, típica de niños prematuros (no mi caso). Si
          escuchando la voz de la madre se inaugura en el ser el primer espacio
          de sentido, imaginemos qué tipo de sentido se inaugura en el alma de
          un ser pequeñito al pasar sus primeros ocho días con sus noches en
          compañía del rumor de la máquina, mezclado con alaridos de abandono y
          hambre, y con vaya uno a saber qué otros espantos que hicieran parte
          del paisaje sonoro hospitalario (en el peor sentido del término) de
          finales de los años ochenta.
          
        </p>

        <p>|||||||||||||||||||  IIIIIIIIIII ||||||||||||||||||| IIIIIIIIIII ||||||||||||||||||| IIIIIIIIIII</p>
        <p> || escuchar--emitir || </p>
        <p>
          Dos acciones que se generan mutuamente, a la vez naturaleza y cultura.
          Con ellas, para ellas (haciéndolas posibles) un sujeto que escucha y
          un objeto que [re]produce sonido. Propongo etonces que la escucha
          puede ser:
        </p>
        <p>ATENTA o EVIDENTE: legitimando, intimidando, comprendiendo.</p>
        <p>FURTIVA: espía o expandida, invisible, lejana.</p>
        <p>
          CONDICIONADA: mediante la censura o la coerción(qué, cómo, cuándo,
          dónde).
        </p>
        <p>AUSENTE: por su imposibilidad impuesta externa o internamente.</p>
        <p>
          Algunas veces no escuchar es también un acto voluntario o
          autoimpuesto: evitar la propia escucha. Para ello, distintos
          mecanismos: huir/irse, apagar, distorsionar, enmascarar con sonidos
          propios o externos, interrumpir, cumplir con lo que el sonido reclama,
          taparse los oídos.
        </p>
        <p>
          En cuando a la emisión y sus posibles formas, propongo una
          clasificación que combina fuentes, contextos e intenciones:
        </p>
        <p>EMITIR_YO: cuerpo, entre_cuerpos, cuerpo_espacio, voz.</p>
        <p>EMITIR_HERRAMIENTA_O_INSTRUMENTO: música, ritual, trabajo.</p>
        <p>EMITIR_GEO / EMITIR_BIO: vegetal, mineral, animal.</p>
        <p>EMITIR_ARTEFACTO: tecnologías de reproducción y otras.</p>
        <p>EMITIR_OFICIAL: regímenes de legitimación.</p>
        <p>
          EMITIR_ARMA / EMITIR_MIEDO: diseñar para el miedo, el daño o el dolor.
        </p>
        <p>EMITIR_FURTIVO / EMITIR_RESISTENCIA: tomar, ocupar, invadir.</p>
        <p>
          Emitir de forma persuasiva, voluntaria, involuntaria, impositiva,
          censurada, condicionada, imposible (no emitir). Mediante la emisión:
          Afirmar, negar, enmascarar (sonar_más_que, reemplazar), callar,
          manipular (editar), amenazar, amedrentar, informar, advertir,
          convencer, encantar (las sirenas, El flautista de Hamelin), pedir,
          molestar, exigir, expresar, causar daño, controlar, violentar.
        </p>
        <p>
          Desde tiempos prehistóricos el ser humano ha aprovechado el vínculo
          entre el sonido y el espacio. La emisión se ha ubicado en lugares
          cuyas características plásticas y geométricas modifican las cualidades
          acústicas para, por ejemplo, exaltar, permitir la escucha democrática,
          espiar o guardar secretos.
        </p>
        <p>
          Asimismo, la voz, la lengua, las formas de comunicarse, se han
          utilizado como “evidencias” de una condición humana (en contra de lo
          “no-humano”) y por tanto, como excusa para el ejercicio violento del
          poder sobre otros. Elementos sonoros como la música o las formas de
          pronunciación han servido también para generar identificación:
          nosotros vs. ellos/los otros.
        </p>
        <p>
          En su libro Aurality, Ana María Ochoa habla de un régimen acústico de
          verdades: “un nexo poder-conocimiento en el cual algunos modos de
          percepción, descripción e inscripción del sonido son más válidos que
          otros en el contexto de relaciones de poder desiguales”. (Ochoa, p.
          33) En el espacio público se hacen evidentes esas relaciones. Los
          emisores y las características de estas sonoridades legítimas, con
          derecho a ocupar, han cambiado a lo largo de la historia, y diversos
          movimientos se han hecho escuchar, a pesar de no estar autorizados
          oficialmente, como acto de resistencia contra la censura y como
          muestra de descontento colectivo.
        </p>
        <p>
          El sonido sirve además para incomodar, puede causar daños físicos o
          psicológicos irreversibles, inducir miedo y generar ambientes de
          terror colectivo. Al imponerse funciona como advertencia y ejerce
          violencia, adelantando o haciendo presente mediante el miedo un
          posible futuro acontecimiento negativo.
        </p>
        <p></p>
        <p>
          Años de prestar auditiva atención me han llevado a observar que en las
          formas en que suena y se escucha el mundo subyacen lógicas de poder y
          resistencia que condicionan y moldean las relaciones sociales. No se
          trata únicamente de discursos, músicas o tecnologías, sino de
          dispositivos en el sentido amplio del término: redes -atravesadas de
          diversas formas por lo sonoro que se tienden entre “discursos,
          instituciones, edificios, leyes, medidas de policía, proposiciones
          filosóficas, etc.”, en palabras de Agamben.{" "}
        </p>
        <p>
          Al estudiar ejemplos de distintas épocas y lugares del mundo, desde la
          prehistoria hasta la actualidad, resulta claro que lo acústico puede
          ser comprendido y estudiado como un elemento importante en el
          ejercicio del poder. Sus lógicas no son siempre evidentes, pues a
          menudo el sonido parece un resultado involuntario o una consecuencia
          inevitable, y se da por sentado debido a nuestra dificultad física
          para evitarlo. Sin embargo, a lo largo de la historia aparecen muchos
          ejemplos de su uso deliberado. En este trabajo he buscado desenterrar
          algunas de estas relaciones para comprender las políticas de la
          emisión y de la escucha en distintos momentos y lugares.
        </p>
                <p>|||||||||||||||||||  IIIIIIIIIII ||||||||||||||||||| IIIIIIIIIII ||||||||||||||||||| IIIIIIIIIII</p>
<p>  </p>
<p>  </p>
        <h3>REFERENCIAS BIBLIOGRÁFICAS</h3>
<ul>
        <li>
          Agamben, Giorgio. (2014). &quot;¿Qué es un dispositivo?&quot;. Adriana
          Hidalgo
        </li>
        <li>Attali, Jacques (2001). &quot;Conferencia sobre ruido&quot;</li>
        <li>
          Barker, Vicki. (2009). &quot;The Real Story Behind Britain’s Rock ‘N’
          Roll Pirates&quot; en
          <a
            href="https://www.npr.org/2009/11/13/120358447/the-real-story-behind-britains-rock-n-roll-pirates"
            target="_blank"
          >
            NPR
          </a>
          , consultado en diciembre de 2019.
        </li>
        <li>
          Goodman, Steve (2010). &quot;Sonic Warfare: Sound, affect and the
          ecology of fear&quot;. The MIT Press
        </li>
        <li>
          (2005). &quot;Palestinians hit by sonic-boom air raids&quot; en{" "}
          <a href="https://mg.co.za/article/2005-11-03-palestinians-hit-by-sonicboom-air-raids/">
            Mail&Guardian
          </a>{" "}
        </li>
        <li>
          Ochoa, Ana María. (2014). &quot;Aurality: Listening and Knowledge in
          Nineteenth-Century Colombia&quot;. Duke University Press
        </li>
        <li>
          Reznikoff, Iegor. (2008). Resonance in prehistoric times: A study of
          Paleolithic painted caves and rocks en &quot;The Journal of the
          Acoustical Society of America 123(5):3603&quot;
        </li>
        <li>
          -Varios. (2005). &quot;Espacios sonoros, tecnopolítica y vida
          cotidiana: Aproximaciones a una antropología sonora&quot;. La Orquesta
          del Caos.
        </li>
        <li>
          <a href="https://www.x-rayaudio.com/" target="_blank">
            x-rayaudio.com/
          </a>
        </li>
        </ul>
      </div>
      <Footer />
    </main>
  );
}
