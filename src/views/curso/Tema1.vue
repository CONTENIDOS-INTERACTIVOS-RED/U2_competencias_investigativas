<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Introducción a la identificación del problema y formulación de objetivos'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-12.col-xl-7.col-xxl-8.d-flex.flex-column
        p.mb-4 La ciencia, como campo del conocimiento humano, se fundamenta en la búsqueda de verdades mediante la rigurosa aplicación de métodos específicos. 
        .d-flex.align-items-start.bg-morado.p-4.mb-4(data-aos="fade-right")
          span Estos métodos consisten en reglas y procesos aprobados y validados por la comunidad científica, garantizando así la confiabilidad y consistencia de los descubrimientos. Cualquier conocimiento que no se ajuste a estas normas no puede considerarse científico, lo que subraya la importancia de su correcta aplicación.
        p.mb-0  El éxito de cualquier investigación depende de identificar y delimitar adecuadamente el problema y de definir objetivos claros. A continuación, se explora su importancia, junto con herramientas y enfoques que facilitan este proceso crítico.
      .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-3.png', alt='Texto que describa la imagen')  

    h2 Importancia de la delimitación del problema y formulación de objetivos
    p.mb-4 La delimitación del problema y la formulación de objetivos no solo orientan la dirección de un estudio, sino que también determinan su éxito potencial. En un contexto donde el flujo de información es constante, los investigadores enfrentan el reto de distinguir fuentes confiables y relevantes para construir conocimiento válido.

    .row.mb-4
      .col-12.col-lg-10.mx-auto
        .row.mb-4.justify-content-center
          .col-10.col-md-8.col-lg-6.mb-4.mb-xl-0(data-aos="fade-right")
            .custom-image-card.d-flex.p-3
              img.pe-2(src='@/assets/curso/unidad/img-4.svg', style="width: 80px")
              .d-flex.flex-column
                p.text-bold.mb-3 Delimitación del problema
                p.px-1.text-small.mb-0.d-flex Proceso sistemático que define los elementos esenciales y los límites del estudio.
          .col-10.col-md-8.col-lg-6.mb-4.mb-xl-0(data-aos="fade-left")
            .custom-image-card.d-flex.p-3
              img.pe-2(src='@/assets/curso/unidad/img-5.svg', style="width: 80px")
              .d-flex.flex-column
                p.text-bold.mb-3 Planteamiento de objetivos
                p.px-1.text-small.mb-0.d-flex Guías conceptuales que establecen criterios claros para tomar decisiones técnicas y metodológicas.

    h2 Elementos clave en la delimitación del problema
    p.mb-4 La delimitación va más allá de establecer límites temporales o espaciales. Implica identificar elementos innovadores y esenciales, considerando:
    .row.mb-4
      .col-5.d-none.d-xl-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-6.png', alt='Texto que describa la imagen')
      .col-12.col-xl-7(data-aos="fade-left")
        ol.lista-ol--cuadro
          li.d-flex(data-aos="fade-up")
            .lista-ol--cuadro__vineta.bg-rojo-2
              span 1
            p.mb-0 <strong>Contexto del estudio.</strong> Comprensión profunda del entorno en el que se desarrollará la investigación.
          li.d-flex(data-aos="fade-up")
            .lista-ol--cuadro__vineta.bg-rojo-2
              span 2
            p.mb-0 <strong>Herramientas metodológicas.</strong> Conocimiento de métodos y recursos disponibles para abordar el problema.
          li.d-flex(data-aos="fade-up")
            .lista-ol--cuadro__vineta.bg-rojo-2
              span 3
            p.mb-0 <strong>Limitaciones prácticas.</strong> Evaluación realista de los recursos y restricciones que podrían influir en el desarrollo del estudio.

    h2 Planteamiento de objetivos: precisión intelectual
    p.mb-4 Formular objetivos es un ejercicio que requiere claridad conceptual y un entendimiento de los recursos disponibles. Los objetivos bien definidos:
    .row.mb-4.justify-content-center
      .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0
        .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
          img.mx-auto.mb-4(src='@/assets/curso/unidad/img-7.svg', style="width: 80px")
          p.text-bold.mb-4.text-center Claridad conceptual
          p.px-1.text-small.mb-0.d-flex.text-center Facilita la toma de decisiones técnicas durante la investigación.
      .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0
        .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
          img.mx-auto.mb-4(src='@/assets/curso/unidad/img-8.svg', style="width: 80px")
          p.text-bold.mb-4.text-center Orientación metodológica
          p.px-1.text-small.mb-0.d-flex.text-center Establece criterios para seleccionar herramientas y técnicas adecuadas.
      .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0
        .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
          img.mx-auto.mb-4(src='@/assets/curso/unidad/img-9.svg', style="width: 80px")
          p.text-bold.mb-4.text-center Guía para el análisis
          p.px-1.text-small.mb-0.d-flex.text-center Ayuda a identificar y explorar brechas de conocimiento relevantes.

    h2 Herramientas tecnológicas para la delimitación y formulación de objetivos
    p.mb-4 La era digital ha transformado la forma de acceder y procesar información, permitiendo un manejo más eficiente de la documentación. Las herramientas clave incluyen:
    .row.mb-4
      .col-12.col-xl-7(data-aos="fade-right")
        ol.lista-ol--cuadro
          li.d-flex(data-aos="fade-up")
            .lista-ol--cuadro__vineta.bg-rojo-2
              span 1
            p.mb-0 <strong>Bases de datos especializadas.</strong> Facilitan el acceso a fuentes confiables y relevantes.
          li.d-flex(data-aos="fade-up")
            .lista-ol--cuadro__vineta.bg-rojo-2
              span 2
            p.mb-0 <strong>Gestores bibliográficos.</strong> Ayudan a organizar y citar referencias de manera sistemática.
          li.d-flex(data-aos="fade-up")
            .lista-ol--cuadro__vineta.bg-rojo-2
              span 3
            p.mb-0 <strong>Software de análisis.</strong> Permite identificar tendencias y brechas en el conocimiento existente.
      .col-5.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-10.png', alt='Texto que describa la imagen')

    .row.mb-5
      .col-12.col-md-10.mx-auto
        .row.mb-4
          .d-flex.align-items-center
            div.d-flex.align-items-center.bg-morado.px-3.py-4
              img.me-4(style="width: 90px" src='@/assets/curso/unidad/img-11.svg', alt='Texto que describa la imagen')
              p.pe-xl-5.mb-0 La delimitación del problema y el planteamiento de objetivos constituyen la base del proceso investigativo, estableciendo un marco claro para generar conocimiento significativo. La precisión y claridad en estas etapas iniciales no solo facilitan el desarrollo de la investigación, sino que también garantizan la relevancia y aplicabilidad de los resultados, contribuyendo al avance científico y a la solución de problemas específicos.

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
              a.text-small.text-primary(target="_blank", href="http://scielo.sld.cu/scielo.php?pid=S1990-86442018000400022&script=sci_arttext") Espinoza Freire, E. E. (2018). El problema de investigación. Conrado, 14(64), 22-32.

            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://dialnet.unirioja.es/servlet/articulo?codigo=8583045") Serrano, S. S., Navarro, I. P., & González, M. D. (2022). ¿Cómo hacer una revisión sistemática siguiendo el protocolo PRISMA?

            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=NgIG029_IM4") Universidad Continental (2019). El problema de la investigación [Vídeo]

            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=sM6HXoVUH54") CRAI Bibliotecas UPAEP (2020). Operadores booleanos y comodín [Vídeo]
          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='Imagen de material complementario')



</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.tabs-content
  background-color: $color-sistema-h
.img-infografica
  background-color: $color-adicional-1
</style>
