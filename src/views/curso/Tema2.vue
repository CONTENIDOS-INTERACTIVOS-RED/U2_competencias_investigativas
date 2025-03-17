<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Identificación del problema'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.mb-4
      .col-12.col-xl-7(data-aos="fade-right")
        .bg-morado.p-4.mb-4
          span La identificación de un problema de investigación requiere una aproximación sistemática que permita transformar una inquietud inicial en una propuesta investigable. Para identificar un problema con potencial investigativo, es fundamental comenzar con una observación crítica de la realidad, identificando vacíos en el conocimiento existente o discrepancias entre la teoría y la práctica.
        span De acuerdo con Espinoza Freire, (2018), un problema de investigación debe cumplir con ciertos criterios fundamentales: debe ser relevante para la disciplina, factible de estudiar con los recursos disponibles y capaz de generar nuevo conocimiento. La identificación puede surgir de diversas fuentes, incluyendo la revisión sistemática de literatura, la experiencia profesional, o la observación de fenómenos sociales o naturales que requieren explicación o intervención.

      .col-5.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-12.png', alt='Texto que describa la imagen')

    p.mb-4  Maxwell (2019) sugiere que la identificación efectiva de problemas de investigación implica un proceso iterativo que incluye:
    .row.mb-4
      .col-12.col-lg-8.mx-auto(data-aos="fade-up")
        p.mb-3 <strong>Figura 1.</strong> Ciclo para identificar un problema de investigación.
        img(src='@/assets/curso/unidad/img-13.png', alt='Texto que describa la imagen')
        figcaption <strong>Nota.</strong> Elaboración propia a partir de Maxwell (2019)

    h2 Revisión exhaustiva de literatura especializada
    p.mb-4 La revisión de literatura es el fundamento inicial para identificar brechas en el conocimiento existente y establecer el marco teórico de una investigación. Este proceso implica un análisis sistemático de publicaciones académicas, incluyendo artículos científicos, libros especializados y tesis doctorales. Una revisión exhaustiva debe enfocarse en varios aspectos clave:
    .row.mb-4
      .col-12.col-xl-7(data-aos="fade-right")
        .bg-morado.p-4.mb-4
          div.d-flex.mb-4
            img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
            p.mb-0 Identificar el estado actual del conocimiento en el campo de estudio.

          div.d-flex.mb-4
            img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
            p.mb-0 Detectar inconsistencias o contradicciones en la literatura existente.
          div.d-flex.mb-4
            img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
            p.mb-0 Reconocer áreas poco exploradas o que requieren actualización.
          div.d-flex.mb-4
            img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
            p.mb-0 Analizar las metodologías utilizadas y sus limitaciones.
          div.d-flex.mb-4
            img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
            p.mb-0 Examinar las recomendaciones para investigaciones futuras propuestas por otros autores.
        span Para llevar a cabo una revisión de literatura efectiva, se recomienda seguir de manera rigurosa el protocolo PRISMA (Serrano et al., 2020), el cual proporciona una guía estructurada para realizar revisiones sistemáticas y meta-análisis.
      .col-5.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-14.png', alt='Texto que describa la imagen')

    p.mb-4 Además, es fundamental utilizar bases de datos especializadas para garantizar la calidad y relevancia de las fuentes consultadas. A continuación, se presentan algunas de las bases de datos académicas más utilizadas:

    ImagenInfografica.color-secundario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/unidad/img-15.png', alt='Texto que describa la imagen')

      .tarjeta.bg-white.p-4(x="19%" y="32%" numero="+")
        .h5.mb-2 Google Académico
        p Buscador especializado de Google que proporciona acceso gratuito a literatura científico-académica, incluyendo artículos, libros, tesis y citas. Ofrece una interfaz intuitiva y amplia cobertura, aunque no todo su contenido está validado académicamente.
      .tarjeta.bg-white.p-4(x="73%" y="32%" numero="+")
        .h5.mb-2 Latindex
        p Sistema de información que cataloga y evalúa revistas científicas de América Latina, el Caribe, España y Portugal. Establece criterios de calidad editorial y mantiene directorios actualizados de publicaciones académicas regionales, tanto impresas como digitales.
      .tarjeta.bg-white.p-4(x="19%" y="81%" numero="+")
        .h5.mb-2 SciELO
        p Biblioteca científica electrónica de acceso abierto enfocada en la región latinoamericana, el Caribe y la península ibérica. Opera bajo un modelo cooperativo, garantiza control de calidad en sus publicaciones y ofrece métricas de impacto propias.
      .tarjeta.bg-white.p-4(x="73%" y="81%" numero="+")
        .h5.mb-2 Scopus
        p Base de datos bibliográfica de Elsevier, líder mundial en citas y resúmenes académicos revisados por pares. Ofrece herramientas bibliométricas avanzadas y cobertura global, aunque requiere suscripción paga y tiene menor representación de publicaciones regionales. Es importante destacar que no todas sus funciones están disponibles para el público general; se necesita una suscripción para acceder a la totalidad de sus atributos.

    .row.mb-4
      .col-5.d-none.d-xl-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-16.png', alt='Texto que describa la imagen')
      .col-12.col-xl-7(data-aos="fade-left")
        p.mb-4 La utilización de estas herramientas permite afinar la búsqueda de información y asegurar que las fuentes consultadas sean pertinentes y de alta calidad. Además, facilitan la identificación de tendencias actuales en el campo de estudio y respaldan la justificación de la investigación propuesta.
        span Es esencial que el investigador desarrolle habilidades para evaluar críticamente las fuentes y gestionar eficientemente la información recopilada. Esto incluye la capacidad de discernir entre estudios de alto impacto y aquellos que no aportan significativamente al conocimiento existente, así como el manejo adecuado de referencias bibliográficas mediante gestores como Zotero, Mendeley o EndNote.

    p Para obtener resultados mucho más precisos en la búsqueda de información, se recomienda el uso de los operadores Booleanos, para saber cómo utilizarlos, consulte: CRAI Bibliotecas UPAEP (Director). (2020). Operadores booleanos y comodín

    p.d-flex.my-4
      img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
      a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=sM6HXoVUH54") CRAI Bibliotecas UPAEP (2020). Operadores booleanos y comodín [Vídeo]
          

    h2 Consulta con expertos en el campo
    p.mb-4 La interacción con expertos ofrece perspectivas valiosas que pueden no estar presentes en la literatura publicada. Sin embargo, no siempre es sencillo acceder a entrevistas con autoridades académicas del campo disciplinar. Además, es importante tener en cuenta que este tipo de interacciones puede estar influenciado por sesgos personales, lo que limita su aceptación en la comunidad científica. Este paso puede incluir:

    

    .row.mb-4
      .col-12.col-xl-7(data-aos="fade-right")
        .bg-morado.p-4.mb-4
          div.d-flex.mb-4
            img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
            p.mb-0 Entrevistas o consultas formales con investigadores reconocidos en el área.

          div.d-flex.mb-4
            img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
            p.mb-0 Participación en seminarios y conferencias especializadas.
          div.d-flex.mb-4
            img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
            p.mb-0 Discusiones con profesionales que enfrentan problemas prácticos en el campo.
          div.d-flex.mb-4
            img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
            p.mb-0 Contacto con grupos de investigación establecidos.
          div.d-flex.mb-4
            img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
            p.mb-0 Validación de la relevancia del problema identificado desde la perspectiva de los expertos.
        span
      .col-5.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-17.png', alt='Texto que describa la imagen')

    h2 Evaluación de la relevancia social y científica
    p.mb-4 La identificación del problema es una etapa crucial en la investigación, donde convergen los hallazgos de la revisión de literatura y las consultas a expertos. Este proceso contribuye a delimitar el estudio y asegurar su pertinencia académica y social.
    .row.mb-5.justify-content-center 
      .col-10.col-md-8.col-lg-6.col-xl-4.col-xxl-3.mb-4.mb-xl-0
        .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
          img.mx-auto.mb-4(src='@/assets/curso/unidad/img-18.svg', style="width: 80px")
          p.text-bold.mb-4.text-center Análisis del impacto social
          p.px-1.text-small.mb-0.d-flex.text-center Evalúa el efecto potencial de la investigación en la sociedad.
      .col-10.col-md-8.col-lg-6.col-xl-4.col-xxl-3.mb-4.mb-xl-0
        .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
          img.mx-auto.mb-4(src='@/assets/curso/unidad/img-19.svg', style="width: 80px")
          p.text-bold.mb-4.text-center Evaluación de la contribución científica
          p.px-1.text-small.mb-0.d-flex.text-center Examina cómo el estudio amplía el conocimiento existente.
      .col-10.col-md-8.col-lg-6.col-xl-4.col-xxl-3
        .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
          img.mx-auto.mb-4(src='@/assets/curso/unidad/img-20.svg', style="width: 80px")
          p.text-bold.mb-4.text-center Identificación de beneficiarios
          p.px-1.text-small.mb-0.d-flex.text-center Define quiénes serán los beneficiarios directos e indirectos de los hallazgos.
      .col-10.col-md-8.col-lg-6.col-xl-4.col-xxl-3
        .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
          img.mx-auto.mb-4(src='@/assets/curso/unidad/img-21.svg', style="width: 80px")
          p.text-bold.mb-4.text-center Valoración de pertinencia
          p.px-1.text-small.mb-0.d-flex.text-center Analiza la relevancia temporal y contextual del problema.

    .bg-morado.p-4.mb-4
      span La interacción continua entre estas acciones permite refinar la definición del problema, asegurando que sea científicamente relevante, metodológicamente viable y socialmente pertinente. Esto sienta las bases para el desarrollo de una investigación sólida y significativa.

    #t_2_1.titulo-segundo
      div.d-flex
        span.me-3 2.1  
        h2 Delimitación del problema de investigación

    p.mb-4 La delimitación del problema es un paso esencial para transformar una problemática general en un objeto de estudio específico y manejable. A continuación, se describen las dimensiones clave que deben considerarse para una delimitación adecuada:

    .row.mb-4
      .col-5.d-none.d-xl-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-22.png', alt='Texto que describa la imagen')
      .col-12.col-xl-7(data-aos="fade-left")
        ol.lista-ol--cuadro
          li.d-flex(data-aos="fade-up")
            .lista-ol--cuadro__vineta.bg-rojo-2
              span 1
            p.mb-0 <strong>Delimitación espacial.</strong> Define el contexto geográfico o institucional del estudio, estableciendo los límites territoriales en los que se llevará a cabo la investigación.
          li.d-flex(data-aos="fade-up")
            .lista-ol--cuadro__vineta.bg-rojo-2
              span 2
            p.mb-0 <strong>Delimitación temporal.</strong> Establece el marco de tiempo en el que se analizará el fenómeno, abarcando tanto el período de análisis como la duración de la investigación.
          li.d-flex(data-aos="fade-up")
            .lista-ol--cuadro__vineta.bg-rojo-2
              span 3
            p.mb-0 <strong>Delimitación conceptual.</strong> Identifica las variables o categorías específicas que se abordarán, asegurando que los conceptos clave estén claramente definidos y alineados con los objetivos.

    h2 Condiciones para una delimitación efectiva
    p.mb-4 Una delimitación bien estructurada debe cumplir ciertas condiciones que garanticen la precisión y viabilidad del estudio. Estas condiciones se presentan a continuación:
    .row.mb-5.justify-content-center 
      .col-10.col-md-8.col-lg-6.col-xl-4.col-xxl-3.mb-4.mb-xl-0
        .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
          img.mx-auto.mb-4(src='@/assets/curso/unidad/img-23.svg', style="width: 80px")
          p.text-bold.mb-4.text-center Alineación con objetivos
          p.px-1.text-small.mb-0.d-flex.text-center La delimitación debe estar en consonancia con los objetivos del estudio, asegurando que estos sean alcanzables dentro del marco definido. 
      .col-10.col-md-8.col-lg-6.col-xl-4.col-xxl-3.mb-4.mb-xl-0
        .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
          img.mx-auto.mb-4(src='@/assets/curso/unidad/img-24.svg', style="width: 80px")
          p.text-bold.mb-4.text-center Evaluación de recursos
          p.px-1.text-small.mb-0.d-flex.text-center Es crucial considerar recursos disponibles (humanos, financieros, temporales) para ajustar el alcance y garantizar la viabilidad de la investigación.
      .col-10.col-md-8.col-lg-6.col-xl-4.col-xxl-3
        .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
          img.mx-auto.mb-4(src='@/assets/curso/unidad/img-25.svg', style="width: 80px")
          p.text-bold.mb-4.text-center Consulta de antecedentes
          p.px-1.text-small.mb-0.d-flex.text-center Revisar literatura y estudios previos para identificar enfoques similares y evitar duplicidades en el planteamiento del problema.
      .col-10.col-md-8.col-lg-6.col-xl-4.col-xxl-3
        .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
          img.mx-auto.mb-4(src='@/assets/curso/unidad/img-26.svg', style="width: 80px")
          p.text-bold.mb-4.text-center Flexibilidad en ajustes
          p.px-1.text-small.mb-0.d-flex.text-center La delimitación debe ser lo suficientemente flexible para permitir ajustes en caso de limitaciones imprevistas durante el desarrollo del proyecto.

    p.mb-4 Estas dimensiones y condiciones aseguran que el problema se aborde de forma precisa y eficiente, maximizando el impacto del estudio dentro del campo de investigación seleccionado. Para ello se sugieren algunas condiciones a tener en cuenta para delimitar de forma correcta y lograr la integración:
    .row.mb-5
      .col-12.col-lg-7(data-aos="fade-right")
        AcordionA(tipo="b")
          .div(titulo="Análisis de factibilidad")
            p ●  Evaluar realísticamente los recursos disponibles.

            p ●  Considerar el acceso a fuentes de información y participantes.
            p ●  Analizar las limitaciones técnicas y metodológicas.
            p ●  Valorar el tiempo disponible para la investigación.
          .div(titulo="Precisión conceptual")
            p ●  Definir claramente los términos y conceptos clave.

            p ●  Establecer las variables o categorías específicas de estudio.
            p ●  Identificar las relaciones conceptuales relevantes.
            p ●  Determinar los límites teóricos del estudio.
          .div(titulo="Contextualización adecuada")
            p ●  Especificar el ámbito geográfico del estudio.

            p ●  Definir el período temporal del análisis.
            p ●  Identificar la población o muestra específica.
            p ●  Considerar las características particulares del contexto.
      .col-12.col-lg-5.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-27.png', alt='Texto que describa la imagen')


    .bg-morado.p-4.mb-4
      span La delimitación efectiva del problema de investigación no solo facilita el desarrollo del estudio, sino que también aumenta significativamente las probabilidades de generar contribuciones valiosas al conocimiento científico. Un problema bien delimitado constituye la base para una investigación rigurosa y exitosa, permitiendo optimizar recursos y maximizar el impacto potencial de los resultados obtenidos.
    
    #t_2_2.titulo-segundo
      div.d-flex
        span.me-3 2.2  
        h2 Pregunta de investigación

    p.mb-4 La pregunta de investigación constituye el eje central que orienta todo el proceso investigativo, cristalizando el problema de investigación en una interrogante precisa y científicamente abordable. Actúa como una brújula, guiando las decisiones metodológicas y definiendo la naturaleza y el alcance del estudio.

    p.mb-4 La estructuración de la pregunta de investigación varía según el enfoque metodológico elegido:

    h2 Enfoque cuantitativo
    p.mb-4 Según López Domínguez y Diez Fumero (2020), la pregunta debe especificar claramente las variables de estudio y la relación entre ellas.

    .row.mb-4
      .col-12.col-xl-7(data-aos="fade-right")
        .bg-morado.p-4.mb-4
          p.text-bold.mb-4 Ejemplo
          p.mb-4 "¿Cuál es la relación entre el nivel socioeconómico y el rendimiento académico en estudiantes universitarios de primer año?"
          div.d-flex.mb-4
            img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
            p.mb-0 <strong>Variables:</strong> nivel socioeconómico y rendimiento académico.

          div.d-flex.mb-4
            img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
            p.mb-0 Incluye delimitación temporal y sujetos de estudio, facilitando la medición y el análisis estadístico.
      .col-5.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-28.png', alt='Texto que describa la imagen')

    .row.mb-4
      .col-5.d-none.d-xl-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-29.png', alt='Texto que describa la imagen')
      .col-12.col-xl-7(data-aos="fade-left")
        h2 Enfoque cualitativo
        p.mb-4 En este enfoque, la pregunta se centra en explorar la naturaleza y significado de fenómenos sociales, incluyendo percepciones y experiencias subjetivas.
        .bg-morado.p-4.mb-0
          p.text-bold.mb-4 Ejemplo
          span ¿Cómo experimentan los docentes la implementación de metodologías innovadoras en el aula?
    .row.mb-4
      .col-12.col-xl-7(data-aos="fade-right")
        h2 Enfoque Mixto
        p.mb-4 Combina aspectos medibles con interpretativos del fenómeno estudiado.
        .bg-morado.p-4.mb-0
          p.text-bold.mb-4 Ejemplo
          p.mb-4 ¿De qué manera influyen los factores socioemocionales en el rendimiento académico de estudiantes universitarios y cómo interpretan estos su impacto en su experiencia educativa?

          span Considera variables cuantitativas y aspectos cualitativos como la percepción personal.
      .col-5.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-30.png', alt='Texto que describa la imagen')
    

    h2 Formatos para estructurar preguntas de investigación
    p.mb-4 La comunidad académica del mundo ha establecido algunos criterios o formatos “mundialmente aceptados” que permiten establecer o estructurar preguntas de manera efectiva, algunos de los formatos comúnmente utilizados son el PICOT y el FINER. A continuación, se muestran de manera detallada las características de cada formato, tal como se muestran en Sánchez-Martín, et al., (2023).
    
    p.mb-3 <strong>Tabla 1.</strong> Descripción de la estrategia PICOT 
    .tabla-a.mb-4
      table
        caption <strong>Nota.</strong> Sánchez-Martín, et al., (2023).
        thead
          tr
            th.bg-rojo-3.text-center(width="25%") Iniciales
            th.bg-rojo-3.text-center(width="35%").borde-gris-left Significado
            th.bg-rojo-3.text-center(width="40%").borde-gris-left Descripción
        tbody
          tr
            td.text-center 
              p.mb-1.text-bold P
              span <em>Population</em>
            td.text-center.borde-gris-left Población de estudio o participantes
            td.borde-gris-left Características principales de los participantes o de la población a estudiar. Definir brevemente las características de inclusión de los participantes en el estudio sobre los que se va a realizar la intervención a estudiar.
          tr
            td.text-center 
              p.mb-1.text-bold I
              span <em>Intervention</em>
            td.text-center.borde-gris-left Intervención
            td.borde-gris-left La intervención (TIC, prevención, hábito lector…) a estudiar.
          tr
            td.text-center 
              p.mb-1.text-bold C
              span <em>Comparison</em>
            td.text-center.borde-gris-left Comparación
            td.borde-gris-left Características de la intervención de control con la que se va a comparar la intervención principal. No siempre se realiza una intervención de control.
          tr
            td.text-center 
              p.mb-1.text-bold C
              span <em>Outcome</em>
            td.text-center.borde-gris-left Resultado
            td.borde-gris-left Especifica cuál es el resultado principal que se va a medir al examinar el efecto de la intervención, qué se espera que mejore en el grupo experimental al aplicarle la intervención y cómo se va a medir
          tr
            td.text-center 
              p.mb-1.text-bold T
              span <em>Time</em>
            td.text-center.borde-gris-left Tiempo
            td.borde-gris-left Especifica el marco temporal en el que se plantea el proyecto de investigación

    p.mb-3 <strong>Tabla 2.</strong> Definición criterios FINER
    .tabla-a.mb-5
      table
        caption <strong>Nota.</strong> Sánchez-Martín, et al., (2023).
        thead
          tr
            th.bg-rojo-3.text-center(width="25%") Iniciales
            th.bg-rojo-3.text-center(width="35%").borde-gris-left Significado 
            th.bg-rojo-3.text-center(width="40%").borde-gris-left Descripción
        tbody
          tr
            td.text-center 
              p.mb-1.text-bold F 
              span <em>Feasible</em>
            td.text-center.borde-gris-left Factible
            td.borde-gris-left 
              p ▪ Asegura la adecuación de: 
              p.ms-1 - El diseño de investigación.
              p.ms-1 - El tamaño muestral.
              p.ms-1 - El equipo de investigación.
              p.ms-1 - Los recursos disponibles.
              p ▪ Tiene en cuenta posibles pérdidas / abandonos. 
              p ▪ Prioriza medidas de resultado realistas.
          tr
            td.text-center 
              p.mb-1.text-bold I
              span <em>Intesesting</em>
            td.text-center.borde-gris-left Interesante
            td.borde-gris-left Responde al interés de los/as investigadores/as, editores y potenciales lectores.
          tr
            td.text-center 
              p.mb-1.text-bold N
              span <em>Novel</em>
            td.text-center.borde-gris-left Novedoso
            td.borde-gris-left
              p.mb-3 ▪ Aborda el problema de investigación desde una perspectiva diferente. 
   
              p.mb-3 ▪ Replica, confirma o refuta hallazgos previos.  
              p ▪ Genera nuevas hipótesis y cubre necesidades de información.
          tr
            td.text-center 
              p.mb-1.text-bold E 
              span <em>Ethical</em>
            td.text-center.borde-gris-left Ético 
            td.borde-gris-left 
              p.mb-3 ▪ Cumple con los estándares éticos de investigación. 
              p ▪ Evaluada por un Comité Ético de Investigación local.*
          tr
            td.text-center 
              p.mb-1.text-bold R
              span <em>Relevant</em>
            td.text-center.borde-gris-left Relevante 
            td.borde-gris-left 
              p.mb-3 ▪ Influye y contribuye a la mejora en la práctica habitual del momento. 
 
              p.mb-3 ▪ Estimula nuevas y futuras líneas de investigación.

              p ▪ Proporciona una respuesta precisa a preguntas específicas de investigación.

    .row.mb-4
      .col-12.col-xl-7(data-aos="fade-right")
        p.mb-4 Cuando se aplica este tipo de herramientas definidas por la comunidad científica, es posible definir preguntas mucho más certeras y específicas. No se debe perder de vista que la especificidad de un estudio permitirá encontrar resultados puntuales, es por esto que se sugiere tener solo una pregunta que guíe todo el estudio.
        span Si bien pueden existir preguntas secundarias o subsidiarias, estas deben derivar directamente de la pregunta principal y contribuir a su respuesta integral. La fragmentación del enfoque investigativo a través de múltiples preguntas independientes puede resultar en un estudio superficial que no logra aportar significativamente al conocimiento científico. Este proceso de refinamiento permite asegurar que la pregunta no solo sea investigable desde una perspectiva metodológica, sino que también contribuya significativamente al campo de estudio específico.
      .col-5.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-31.png', alt='Texto que describa la imagen')

    p.mb-4 Lo anterior funciona como instrumento de medición de la calidad de la pregunta y permite establecer la siguiente estructura para la pregunta de investigación:
    p.mb-3 <strong>Figura 3.</strong>Estructura de la pregunta de investigación
    img(src='@/assets/curso/unidad/img-32.png', alt='Texto que describa la imagen').mb-5

    #t_2_3.titulo-segundo
      div.d-flex
        span.me-3 2.3  
        h2 Relación entre la pregunta problema y la hipótesis del estudio
    
    p.mb-4 La relación entre la pregunta de investigación y la hipótesis es esencial para garantizar la coherencia y el rigor de un estudio científico. Ambos elementos son fundamentales en el proceso de formulación del problema y la metodología de investigación.
    figure.mb-4
      .video
        <iframe width="1903" height="748" src="https://www.youtube.com/embed/CKt0g0FfFZs" title="Investigación e hipótesis" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    
    .bg-morado.p-4.mb-5
      span Esta relación asegura la coherencia metodológica del estudio al permitir que el investigador defina los métodos estadísticos o cualitativos adecuados para evaluar la validez de la hipótesis. Así, la conexión entre ambos elementos contribuye a la generación de un conocimiento científico sólido, confiable y aplicable.

    .bg-full-width.border-top-9-azul
      .px-4.px-md-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/229656") Gregorio Rojas, N. (2023). Metodología de la investigación para anteproyectos. Universidad Abierta para Adultos (UAPA).

            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/127783") Maxwell, J. A. (2019). Diseño de investigación cualitativa. Editorial Gedisa.

            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/ereader/tecnologicadeloriente/127966") López Domínguez, A. & Diez Fumero, T. (2020). El debate entre lo cualitativo y lo cuantitativo de cara a la investigación educativa hacia el 2030.

            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://dialnet.unirioja.es/servlet/articulo?codigo=8906805") Sánchez-Martín, M., et al. (2023). Y, al principio, fue la pregunta de investigación … Los formatos PICO, PECO, SPIDER y FINER.

            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=NSwkypkC3v4") Blackbot (2020). Caja de herramientas: ¿Cómo definir un problema? [Vídeo]

            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=sM6HXoVUH54") CRAI Bibliotecas UPAEP (2020). Operadores booleanos y comodín [Vídeo]
          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='Imagen de material complementario')



</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema2',
  components: {
    BannerInterno,
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
