<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    p.mb-4 La investigación es un proceso esencial para el avance del conocimiento y la solución de problemas en diversos campos. Su éxito radica en la identificación precisa del problema y la formulación de objetivos claros que orienten cada etapa del estudio. Estas primeras decisiones son el pilar que garantiza la relevancia y aplicabilidad de los resultados.
    .row.mb-5
      .col-12.col-xl-7.col-xxl-8.d-flex.flex-column
        .d-flex.align-items-start.bg-morado.p-4.mb-4(data-aos="fade-right")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-1.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.pe-xl-3.mb-0(data-aos="fade-up") Delimitar el problema implica definir un marco específico, considerando el contexto, los recursos disponibles y las limitaciones prácticas. Por su parte, los objetivos permiten estructurar las actividades, asegurando coherencia y dirección en el proceso investigativo.
        p.mb-0  La era digital ofrece herramientas poderosas, como bases de datos y software analítico, que potencian el alcance de la investigación. Con una metodología sólida, cada estudio tiene el potencial de generar contribuciones significativas y resolver preguntas clave en beneficio de la sociedad.
      .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-2.png', alt='Texto que describa la imagen')  
    
</template>

<script>
import BannerInterno from '../components/plantilla/BannerInterno'
import Muestras from '../components/muestras/Muestras.vue'

export default {
  name: 'Introduccion',
  components: {
    BannerInterno,
    Muestras,
  },
  data: () => ({
    globalData: global,
  }),
}
</script>

<style lang="sass"></style>
