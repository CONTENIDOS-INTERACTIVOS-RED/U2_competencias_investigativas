export default {
  global: {
    componenteFormativo:
      'Componente Formativo con un nombre extremadamente largo y extenso',
    descripcionCurso:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis vestibulum quam bibendum varius.<br/><br/>Quisque pretium at nulla sit amet placerat. Vestibulum consequat suscipit accumsan. Proin pharetra congue enim et tempus. Sed sodales dui volutpat, placerat tellus accumsan, semper est. Phasellus nec lorem elementum, mattis quam eget, vestibulum nibh. Sed.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/banner-principal-decorativo-2.svg'),
      },
    ],
    numeroUnidad: '2',
    tituloUnidad: 'Formulación de Problemas y Preguntas de Investigación',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo:
          'Introducción a la identificación del problema y formulación de objetivos',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Identificación del problema      ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Delimitación del problema de investigación',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Pregunta de investigación',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo:
              'Relación entre la pregunta problema y la hipótesis del estudio',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Enfoques de investigación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Objetivo general: características y estructura',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Objetivos específicos: características y estructura',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Coronel-Carvajal, C. (2023). Los objetivos de la investigación. Revista Archivo Médico de Camagüey, 27.',
      link: 'https://bit.ly/48z8AgY',
    },
    {
      referencia:
        'Espinoza Freire, E. E. (2018). El problema de investigación. Conrado, 14(64), 22-32.',
      link:
        'http://scielo.sld.cu/scielo.php?pid=S1990-86442018000400022&script=sci_arttext',
    },
    {
      referencia:
        'Maxwell, J. A. (2019). Diseño de investigación cualitativa. Editorial Gedisa.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/127783',
    },
    {
      referencia:
        'Peñaloza-Carreón, J. E., Mayorga-Ponce, R. B., & Roldan-Carpio, A. (2022). Correcto uso de la Taxonomía de Bloom para desarrollar objetivos. Educación Y Salud Boletín Científico Instituto De Ciencias De La Salud Universidad Autónoma Del Estado De Hidalgo, 11(21), 63-65.',
      link: 'https://doi.org/10.29057/icsa.v11i21.9779',
    },
    {
      referencia:
        'Sánchez-Martín, M., Pedreño Plana, M., Ponce Gea, A. I., & Navarro-Mateu, F. (2023). Y, al principio, fue la pregunta de investigación … Los formatos PICO, PECO, SPIDER y FINER. Cuadernos del Profesorado, 16(32), 126-136.',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=8906805',
    },
    {
      referencia:
        'Serrano, S. S., Navarro, I. P., & González, M. D. (2022). ¿Cómo hacer una revisión sistemática siguiendo el protocolo PRISMA?: Usos y estrategias fundamentales para su aplicación en el ámbito educativo a través de un caso práctico. Bordón: Revista de pedagogía, 74(3), 51-66.',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=8583045',
    },
    {
      referencia:
        'Yucra Quispe, T., & Bernedo Villalta, L. Z. (2020). Epistemología e Investigación Cuantitativa. IGOBERNANZA, 3(12), 107–120.',
      link: 'https://doi.org/10.47865/igob.vol3.2020.88',
    },
  ],
  glosario: [
    {
      termino: 'Delimitación',
      significado:
        'Proceso de establecer límites concretos en una investigación, definiendo su alcance espacial, temporal y conceptual.',
    },
    {
      termino: 'FINER',
      significado:
        'Criterios para evaluar preguntas de investigación: factible, interesante, novedoso, ético y relevante.',
    },
    {
      termino: 'Hipótesis',
      significado:
        'Proposición o respuesta tentativa a la pregunta de investigación que plantea una relación anticipada entre variables.',
    },
    {
      termino: 'Metodología',
      significado:
        'Conjunto de procedimientos y técnicas que se aplican de manera sistemática durante el proceso de investigación.',
    },
    {
      termino: 'Objetivo general',
      significado: 'Meta principal que resume el propósito global del estudio.',
    },
    {
      termino: 'Objetivos específicos',
      significado:
        'Acciones detalladas que desglosan el objetivo general en partes manejables.',
    },
    {
      termino: 'PICOT',
      significado:
        'Formato para estructurar preguntas de investigación que considera población, intervención, comparación, resultado (outcome) y tiempo.',
    },
    {
      termino: 'Pregunta de investigación',
      significado:
        'Interrogante precisa que actúa como eje central y guía todo el proceso investigativo.',
    },
    {
      termino: 'Problema de investigación',
      significado:
        'Vacío en el conocimiento o discrepancia entre la teoría y la práctica que requiere ser estudiado de manera sistemática.',
    },
    {
      termino: 'Taxonomía de Bloom',
      significado:
        'Sistema que clasifica las habilidades cognitivas en seis niveles ascendentes: conocimiento, comprensión, aplicación, análisis, síntesis y evaluación, que pueden ser utilizados en la formulación de objetivos educativos/investigativos.',
    },
    {
      termino: 'Variables',
      significado:
        'Elementos o características que son objeto de estudio y medición en una investigación.',
    },
  ],
  complementario: [
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Maria Camila Garcia Santamaria',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor metodológico y pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Francisco José Lizcano Reyes',
          cargo: 'Responsable del equipo',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Leyson Fabian Castaño Perez',
          cargo: 'Soporte organizacional',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
        {
          nombre: ['Nombre 1', 'Nombre 2'],
          cargo: 'Diseño web',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Desarrollo Front-End',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Validación de diseño y contenido',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'GESTORES DE REPOSITORIO',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
