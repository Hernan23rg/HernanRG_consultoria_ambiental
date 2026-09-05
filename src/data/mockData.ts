import { 
  EnvironmentalInstrument, 
  RiskCategory, 
  Professional, 
  ProjectItem, 
  BlogPost, 
  ResourceItem, 
  SectorItem 
} from '../types';

export const ENVIRONMENTAL_INSTRUMENTS: EnvironmentalInstrument[] = [
  {
    id: 'evap',
    code: 'EVAP',
    name: 'Evaluación Ambiental Preliminar',
    fullName: 'Evaluación Ambiental Preliminar (EVAP)',
    tagline: 'Instrumento preventivo para clasificar la viabilidad e impacto del proyecto según el SEIA.',
    whatIs: 'Es el documento técnico que elabora el titular de un proyecto de inversión para solicitar la clasificación ambiental ante la autoridad competente (SENACE o ministerios sectoriales), conforme al Sistema Nacional de Evaluación del Impacto Ambiental (SEIA).',
    purpose: 'Determinar la categoría que le corresponde al proyecto (Categoría I - DIA, Categoría II - EIA-sd, o Categoría III - EIA-d) según la significancia de los impactos ambientales negativos previsibles.',
    whenRequired: 'Aplica a proyectos nuevos o modificaciones de inversión comprendidos en el Listado de Inclusión de Proyectos de Inversión sujetos al SEIA que aún no cuenten con certificación previa.',
    requirements: [
      'Memoria descriptiva y diseño conceptual del proyecto de inversión.',
      'Línea base ambiental preliminar (física, biológica y socioeconómica).',
      'Plano de ubicación georreferenciado en coordenadas UTM WGS84.',
      'Identificación preliminar de impactos ambientales y propuesta de medidas.',
      'Plan de participación ciudadana preliminar según sector.'
    ],
    deliverables: [
      'Documento técnico EVAP estructurado según los TdR de la autoridad.',
      'Cartografía temática digital (archivos Shapefile / Geodatabase).',
      'Matriz de identificación y valoración de impactos ambientales.',
      'Propuesta de Términos de Referencia en caso de Categoría II o III.',
      'Acompañamiento técnico hasta la emisión de la Resolución de Clasificación.'
    ],
    timelineEst: '30 a 60 días hábiles (según plazos sectoriales)',
    normativeReference: 'Ley N° 27446 (Ley del SEIA), D.S. N° 019-2009-MINAM y normativas sectoriales vigentes.',
    faqs: [
      {
        q: '¿La EVAP puede constituir por sí misma una DIA?',
        a: 'Sí. De acuerdo con el marco regulatorio del SEIA, si la autoridad competente determina que el proyecto corresponde a la Categoría I, la EVAP aprobada pasa a constituir la Declaración de Impacto Ambiental (DIA).'
      },
      {
        q: '¿Aplica a todos los proyectos?',
        a: 'No necesariamente. Depende del sector productivo, la magnitud de la inversión, y si el sector cuenta con clasificación anticipada o Ficha Técnica Ambiental (FITSA).'
      }
    ]
  },
  {
    id: 'dia',
    code: 'DIA',
    name: 'Declaración de Impacto Ambiental',
    fullName: 'Declaración de Impacto Ambiental (Categoría I - SEIA)',
    tagline: 'Estudio ambiental para proyectos cuya ejecución no genera impactos negativos de significación.',
    whatIs: 'Es el estudio ambiental preventivo aplicable a proyectos de inversión comprendidos en el SEIA que, por sus características e intensidad, generan impactos ambientales negativos leves, fácilmente mitigables.',
    purpose: 'Garantizar que las actividades constructivas y operativas cuenten con compromisos ambientales concretos de prevención, mitigación y monitoreo ambiental debidamente aprobados.',
    whenRequired: 'Requerido cuando el proyecto figura con clasificación anticipada como Categoría I en el reglamento sectorial o como resultado de la evaluación de una EVAP.',
    requirements: [
      'Expediente técnico o perfil de ingeniería a nivel de factibilidad.',
      'Caracterización ambiental del área de influencia directa e indirecta.',
      'Plan de manejo ambiental detallado (medidas, cronograma y presupuesto).',
      'Plan de vigilancia y monitoreo (efluentes, emisiones, ruido, residuos).',
      'Plan de abandono o cierre conceptual y plan de contingencias.'
    ],
    deliverables: [
      'Expediente completo de DIA impreso y digital según estándares del sector.',
      'Mapas temáticos de calidad cartográfica oficial (SIG/GIS).',
      'Actas y medios probatorios del Mecanismo de Participación Ciudadana.',
      'Informe de absolución de observaciones técnicas y legales ante la autoridad.'
    ],
    timelineEst: '45 a 90 días hábiles de trámite administrativo',
    normativeReference: 'D.S. N° 019-2009-MINAM y reglamentos de protección ambiental sectoriales (Vivienda, Transportes, Producción, etc.).',
    faqs: [
      {
        q: '¿Cuánto dura la vigencia de una DIA aprobada?',
        a: 'La certificación ambiental pierde vigencia si en el plazo de 3 a 5 años (según sector) el titular no inicia las obras para la ejecución del proyecto.'
      },
      {
        q: '¿Se requiere certificación antes de iniciar cualquier obra?',
        a: 'Sí. Ninguna autoridad puede autorizar el inicio de obras sin contar previamente con la Certificación Ambiental expedida.'
      }
    ]
  },
  {
    id: 'its',
    code: 'ITS',
    name: 'Informe Técnico Sustentatorio',
    fullName: 'Informe Técnico Sustentatorio (ITS)',
    tagline: 'Modificaciones y ampliaciones de proyectos con impactos no significativos.',
    whatIs: 'Instrumento complementario de gestión ambiental que permite al titular de una actividad con certificación ambiental vigente solicitar la modificación de componentes auxiliares o ampliaciones que generen impactos ambientales no significativos.',
    purpose: 'Agilizar la autorización ambiental para mejoras tecnológicas, reemplazo de equipos o reubicación de componentes sin tener que recurrir a una modificación integral del estudio ambiental original.',
    whenRequired: 'Cuando se requiera modificar un componente o hacer ampliaciones menores que cumplan estrictamente con los criterios de no significancia establecidos por el sector correspondiente.',
    requirements: [
      'Certificación ambiental principal aprobada y vigente (DIA, EIA-sd, EIA-d o PAMA).',
      'Memoria técnica de las modificaciones o ampliaciones propuestas.',
      'Demostración técnica de que las modificaciones no generan impactos significativos adicionales.',
      'Actualización de los programas de manejo y monitoreo ambiental.'
    ],
    deliverables: [
      'Documento de ITS estructurado bajo las guías sectoriales aplicables.',
      'Evaluación comparativa de impactos (con y sin modificación).',
      'Plano de ubicación de los nuevos componentes y polígono de influencia.',
      'Sustentación técnica ante la autoridad evaluadora.'
    ],
    timelineEst: '30 a 45 días hábiles promedio',
    normativeReference: 'D.S. N° 054-2013-PCM y directivas sectoriales de SENACE, PRODUCE, MINEM o MTC.',
    faqs: [
      {
        q: '¿Se puede usar un ITS para cambiar totalmente el proceso productivo principal?',
        a: 'No. Si las modificaciones conllevan impactos significativos o una alteración sustancial del proceso, la normativa exige una Modificación del Estudio de Impacto Ambiental (MEIA).'
      }
    ]
  },
  {
    id: 'pama',
    code: 'PAMA',
    name: 'Programa de Adecuación y Manejo Ambiental',
    fullName: 'Programa de Adecuación y Manejo Ambiental (PAMA)',
    tagline: 'Instrumento correctivo y de adecuación para actividades en curso.',
    whatIs: 'Es un instrumento de gestión ambiental de carácter correctivo exigible a actividades en operación continua que iniciaron antes de contar con una certificación ambiental o que requieren adecuarse a nuevos Límites Máximos Permisibles (LMP).',
    purpose: 'Establecer un diagnóstico de las operaciones en marcha y un programa calendarizado de inversiones técnicas para reducir emisiones, efluentes y residuos hasta cumplir con los estándares normativos.',
    whenRequired: 'Aplicable a instalaciones preexistentes cuando la normativa sectorial aprueba un marco de adecuación ambiental con plazo determinado.',
    requirements: [
      'Diagnóstico ambiental exhaustivo de las operaciones actuales.',
      'Monitoreo ambiental de efluentes, emisiones atmosféricas, calidad de aire y ruido.',
      'Balance de materia y energía del proceso productivo.',
      'Programa detallado de inversiones para la adecuación ambiental.'
    ],
    deliverables: [
      'Línea base ambiental de operaciones en curso.',
      'Cronograma físico y financiero de adecuación ambiental.',
      'Plan de Manejo Ambiental y monitoreo correctivo.',
      'Sustentación técnica ante la entidad fiscalizadora (OEFA o sectorial).'
    ],
    timelineEst: '60 a 120 días hábiles (según complejidad de planta)',
    normativeReference: 'Reglamentos sectoriales de gestión y adecuación ambiental.',
    faqs: [
      {
        q: '¿El PAMA es lo mismo que un EIA?',
        a: 'No. El EIA es eminentemente preventivo (se elabora antes de construir el proyecto), mientras que el PAMA es correctivo (para instalaciones que ya se encuentran operando).'
      }
    ]
  },
  {
    id: 'fitsa',
    code: 'FITSA',
    name: 'Ficha Técnica Ambiental',
    fullName: 'Ficha Técnica Ambiental (FITSA)',
    tagline: 'Instrumento ágil para proyectos de bajo impacto con clasificación anticipada.',
    whatIs: 'Es un instrumento complementario simplificado no comprendido en el SEIA que formaliza los compromisos ambientales de proyectos que no generan impactos ambientales negativos significativos.',
    purpose: 'Permitir a los titulares registrar y validar de manera célere sus compromisos de prevención y buenas prácticas ambientales ante la autoridad competente.',
    whenRequired: 'Para proyectos expresamente contemplados en los listados de exclusión o de atención mediante FITSA regulados por cada ministerio (como MTC, Vivienda, Produce, Minagri).',
    requirements: [
      'Ficha técnica con información básica del proponente y del proyecto.',
      'Coordenadas de localización y plano de planta básico.',
      'Compromiso formal de cumplimiento de normas de protección ambiental y manejo de residuos sólidos.'
    ],
    deliverables: [
      'Ficha Técnica Ambiental completada y validada en plataforma oficial.',
      'Constancia o registro formal de aprobación emitida por el sector competente.',
      'Guía práctica de cumplimiento para el supervisor de obra.'
    ],
    timelineEst: '10 a 25 días hábiles (en función de la plataforma sectorial)',
    normativeReference: 'Reglamentos de Protección Ambiental sectoriales y normas complementarias de simplificación.',
    faqs: [
      {
        q: '¿La FITSA requiere consulta previa o participación ciudadana compleja?',
        a: 'Por lo general contempla mecanismos simplificados de comunicación social o actas comunales, dependiendo del sector y ubicación específica.'
      }
    ]
  },
  {
    id: 'otros',
    code: 'OTROS',
    name: 'Otros Instrumentos Ambientales',
    fullName: 'Planes de Cierre, Monitoreos y Gestión Complementaria',
    tagline: 'Soluciones a medida: Planes de Manejo de Residuos, Planes de Cierre y Monitoreo.',
    whatIs: 'Elaboración de instrumentos complementarios exigidos por las entidades de fiscalización (OEFA, MINAM, ANA, Gobiernos Regionales) a lo largo del ciclo de vida de los proyectos.',
    purpose: 'Garantizar el cumplimiento continuo de las obligaciones ambientales fiscalizables y evitar sanciones o paralizaciones de obra.',
    whenRequired: 'Durante la operación, cierre progresivo, abandono o atención a requerimientos específicos de fiscalización.',
    requirements: [
      'Requerimientos específicos de la autoridad sectorial o fiscalizadora.',
      'Información histórica de monitoreos y reportes ambientales previos.',
      'Condiciones actuales del sitio de emplazamiento.'
    ],
    deliverables: [
      'Plan de Manejo de Residuos Sólidos (PMRS) según D.L. N° 1278.',
      'Plan de Cierre y Abandono de instalaciones.',
      'Informes de Monitoreo Ambiental de calidad de agua, aire y suelo.',
      'Auditorías ambientales preventivas y planes de minimización.'
    ],
    timelineEst: 'A convenir según alcance técnico',
    normativeReference: 'D.L. N° 1278, Ley de Recursos Hídricos Ley N° 29338 y estándares de calidad ambiental (ECA).',
    faqs: [
      {
        q: '¿Puedo solicitar un instrumento a medida si mi sector tiene reglamentos especiales?',
        a: 'Absolutamente. Nuestro equipo revisa la reglamentación aplicable a su sector específico y formula la propuesta adecuada.'
      }
    ]
  }
];

export const RISK_CATEGORIES: RiskCategory[] = [
  {
    id: 'geodinamica-interna',
    title: 'Peligros por Geodinámica Interna',
    subtitle: 'Sismos, Tsunamis y deformaciones de corteza',
    hazards: ['Sismos y terremotos', 'Tsunamis y maremotos', 'Licuación de suelos', 'Fallas geológicas activas'],
    description: 'Evaluamos las amenazas originadas por la dinámica tectónica y litosférica del territorio peruano, altamente influenciada por la zona de subducción entre la placa de Nazca y la placa Sudamericana.',
    workflow: [
      'Peligro sísmico regional y local',
      'Exposición de infraestructura y asentamientos',
      'Vulnerabilidad física, estructural y social',
      'Nivel de Riesgo (Bajo, Medio, Alto, Muy Alto)',
      'Medidas estructurales y no estructurales de prevención'
    ],
    technicalTools: [
      'Zonificación Sísmica y Geotécnica',
      'Acelerogramas históricos y espectros de diseño',
      'Simulaciones de inundación por Tsunami (cartas DHN)',
      'Microzonificación sísmica con SIG'
    ],
    typicalScenarios: [
      'Proyectos portuarios y costeros expuestos a tsunami',
      'Infraestructura hospitalaria, educativa y vial en zonas de alta sismicidad',
      'Habilitaciones urbanas sobre suelos licuables'
    ],
    deliverables: [
      'Informe de Evaluación del Riesgo (EVAR) por Sismo y Tsunami firmado por Evaluador acreditado CENEPRED.',
      'Mapas de peligro, susceptibilidad, vulnerabilidad y riesgo en SIG.',
      'Plan de mitigación y recomendaciones ingenieriles para el diseño estructural.'
    ]
  },
  {
    id: 'geodinamica-externa',
    title: 'Peligros por Geodinámica Externa',
    subtitle: 'Flujo de detritos, deslizamientos, caídas de rocas y movimientos en masa',
    hazards: [
      'Flujo de detritos (Huaycos geológicos)',
      'Deslizamientos rotacionales y traslacionales',
      'Caídas de rocas y derrumbes',
      'Reptación de suelos y socavación de taludes'
    ],
    description: 'Análisis minucioso del relieve, litología, pendientes y procesos morfodinámicos que provocan el desplazamiento de masas de suelo o roca ladera abajo, comprometiendo carreteras, canales y poblados.',
    workflow: [
      'Mapeo geomorfológico y litológico',
      'Identificación de factores condicionantes y detonantes',
      'Modelamiento numérico de trayectoria de desprendimientos',
      'Cálculo de matrices de vulnerabilidad',
      'Diseño de medidas de control de taludes y estabilización'
    ],
    technicalTools: [
      'Modelos Digitales de Elevación (DEM / LiDAR / Drones)',
      'Imágenes satelitales multiespectrales (Sentinel, Landsat)',
      'Sistemas de Información Geográfica (ArcGIS / QGIS)',
      'Análisis cinemático de taludes'
    ],
    typicalScenarios: [
      'Trazos viales en zonas andinas y de ceja de selva',
      'Presas, bocatomas y canales de regadío en quebradas',
      'Edificaciones en laderas y terrazas fluviales inestables'
    ],
    deliverables: [
      'Estudio de Peligros Geológicos y Evaluación de Riesgos (EVAR).',
      'Cartografía detallada de susceptibilidad a movimientos en masa (1:5000 / 1:25000).',
      'Perfiles geológicos y propuestas de mallas de contención o banquetas.'
    ]
  },
  {
    id: 'hidrometeorologicos',
    title: 'Peligros Hidrometeorológicos',
    subtitle: 'Inundaciones, lluvias intensas, desbordes fluviales y huaycos',
    hazards: [
      'Inundaciones por desborde fluvial o costero',
      'Lluvias extraordinarias asociadas al fenómeno El Niño (FEN)',
      'Huaycos por activación de quebradas secas',
      'Erosión fluvial en márgenes de ríos'
    ],
    description: 'Evaluación hidrológica e hidráulica de cuencas y microcuencas para determinar los caudales máximos instantáneos, zonas de inundación y tiempo de concentración frente a eventos climáticos extremos.',
    workflow: [
      'Lluvia extrema histórica y proyecciones climáticas',
      'Escorrentía superficial y transformación lluvia-caudal',
      'Modelación hidráulica de la mancha de inundación',
      'Exposición de bienes y población',
      'Cálculo del riesgo y delimitación de fajas marginales'
    ],
    technicalTools: [
      'HEC-HMS (Hidrología de cuencas)',
      'HEC-RAS 1D/2D (Modelación de manchas de inundación)',
      'Estaciones pluviométricas SENAMHI',
      'Mapas de fajas marginales y áreas de desborde'
    ],
    typicalScenarios: [
      'Puentes, defensas ribereñas y encauzamientos',
      'Asentamientos humanos y plantas industriales en riberas',
      'Infraestructura de saneamiento y tratamiento de aguas residuales'
    ],
    deliverables: [
      'Estudio hidrológico e hidráulico con modelamiento 2D de inundación.',
      'Evaluación del Riesgo de Desastres (EVAR) ante Inundación y Huaycos.',
      'Planimetría digital georreferenciada con tirantes y velocidades de flujo.'
    ]
  }
];

export const RISK_METHODOLOGY_STEPS = [
  {
    step: '01',
    title: 'Recopilación de información',
    desc: 'Levantamiento de antecedentes históricos, cartografía oficial (IGN, INGEMMET, SENAMHI, CENEPRED) y datos de campo in situ.'
  },
  {
    step: '02',
    title: 'Identificación del peligro',
    desc: 'Caracterización del fenómeno físico (magnitud, intensidad, frecuencia de retorno y área de influencia directa).'
  },
  {
    step: '03',
    title: 'Análisis territorial',
    desc: 'Evaluación geomorfológica, geológica, hidrológica y de uso de suelo mediante Sistemas de Información Geográfica (SIG).'
  },
  {
    step: '04',
    title: 'Evaluación de exposición y vulnerabilidad',
    desc: 'Análisis de la fragilidad física, resiliencia social y exposición de vidas humanas, viviendas e infraestructura clave.'
  },
  {
    step: '05',
    title: 'Estimación del riesgo',
    desc: 'Cruce matricial de Peligro x Vulnerabilidad para determinar los niveles de riesgo cualitativo y cuantitativo.'
  },
  {
    step: '06',
    title: 'Propuesta de medidas',
    desc: 'Recomendaciones concretas de ingeniería de prevención, mitigación estructural y planes de contingencia no estructurales.'
  }
];

export const RG_METHOD_STAGES = [
  {
    number: '01',
    phase: 'CONOCER',
    title: 'Entendemos el proyecto',
    detail: 'Analizamos las particularidades de tu inversión, plazos regulatorios y objetivos técnicos y financieros.'
  },
  {
    number: '02',
    phase: 'ANALIZAR',
    title: 'Evaluamos información y necesidades',
    detail: 'Revisión exhaustiva de la normativa sectorial vigente, antecedentes territoriales y levantamiento en campo.'
  },
  {
    number: '03',
    phase: 'PLANIFICAR',
    title: 'Definimos metodología y alcance',
    detail: 'Diseñamos la hoja de ruta técnica con cronograma realista, asignando a los especialistas colegiados precisos.'
  },
  {
    number: '04',
    phase: 'DESARROLLAR',
    title: 'Ejecutamos el servicio',
    detail: 'Modelaciones hidráulicas, SIG, muestreos ambientales y redacción rigurosa de los expedientes técnicos.'
  },
  {
    number: '05',
    phase: 'ENTREGAR',
    title: 'Presentamos resultados',
    detail: 'Entrega de informes técnicos, mapas en formato nativo y sustentación presencial o virtual ante la entidad.'
  },
  {
    number: '06',
    phase: 'ACOMPAÑAR',
    title: 'Brindamos seguimiento y orientación',
    detail: 'Absolución expedita de observaciones técnicas hasta la obtención de la resolución o conformidad final.'
  }
];

export const PROFESSIONALS: Professional[] = [
  {
    id: 'prof-01',
    name: 'Ing. Carlos Mendoza R.',
    profession: 'Ingeniería Ambiental',
    specialty: 'Gestión Ambiental y Fiscalización SEIA',
    experienceYears: 14,
    location: 'Lima / Nacional',
    modality: 'Híbrido',
    sectors: ['Minería', 'Industria', 'Energía'],
    bio: 'Especialista en elaboración y seguimiento de EVAP, DIA y Planes de Manejo Ambiental. Amplia experiencia en trámites ante SENACE y fiscalización con OEFA.',
    verifiedBadge: true,
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400',
    keyProjects: ['Certificación DIA de Central Fotovoltaica', 'ITS de Planta de Procesamiento Industrial']
  },
  {
    id: 'prof-02',
    name: 'Ing. Sofía Valdivia P.',
    profession: 'Ingeniería Geológica',
    specialty: 'Geodinámica Externa y Estabilidad de Taludes',
    experienceYears: 11,
    location: 'Arequipa / Cusco / Puno',
    modality: 'Campo',
    sectors: ['Construcción', 'Transporte', 'Infraestructura'],
    bio: 'Evaluadora del Riesgo de Desastres acreditada CENEPRED. Especialista en cartografía geológica de movimientos en masa y modelamiento de desprendimientos rocosos.',
    verifiedBadge: true,
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
    keyProjects: ['EVAR de Corredor Vial Interoceánico Sur', 'Estudio Geológico para Defensa Ribereña']
  },
  {
    id: 'prof-03',
    name: 'Ing. Marco Antonio Ríos',
    profession: 'Ingeniería Civil',
    specialty: 'Hidrología, Hidráulica y Defensas Fluviales',
    experienceYears: 16,
    location: 'Piura / Lambayeque / Lima',
    modality: 'Presencial',
    sectors: ['Agricultura', 'Infraestructura', 'Municipalidades'],
    bio: 'Experto en modelamiento bidimensional HEC-RAS 2D de inundaciones causadas por el FEN. Especialista en diseño de fajas marginales y diques de encauzamiento.',
    verifiedBadge: true,
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
    keyProjects: ['Delimitación de Fajas Marginales Cuenca del Río Piura', 'EVAR ante Inundación Fluvial']
  },
  {
    id: 'prof-04',
    name: 'Geóg. Patricia Morales T.',
    profession: 'Geografía / SIG',
    specialty: 'Sistemas de Información Geográfica y Teledetección',
    experienceYears: 9,
    location: 'Lima / Remoto',
    modality: 'Remoto',
    sectors: ['Ordenamiento Territorial', 'Gobiernos Regionales', 'Minería'],
    bio: 'Especialista en procesamiento de imágenes satelitales, fotogrametría con drones y estructuración de geodatabases para expedientes ambientales normativos.',
    verifiedBadge: true,
    avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400',
    keyProjects: ['Infraestructura de Datos Espaciales para Gobierno Regional', 'Geodatabase SEIA SENACE']
  },
  {
    id: 'prof-05',
    name: 'Ing. Fernando Quispe L.',
    profession: 'Ingeniería Forestal',
    specialty: 'Línea Base Biológica y Recursos Naturales',
    experienceYears: 12,
    location: 'Junín / Pasco / Ucayali',
    modality: 'Campo',
    sectors: ['Energía', 'Agricultura', 'Minería'],
    bio: 'Evaluación de flora, ecosistemas frágiles, inventarios forestales y planes de compensación ambiental conforme a los lineamientos del SERFOR y MINAM.',
    verifiedBadge: true,
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
    keyProjects: ['Línea base biológica en Línea de Transmisión 220kV', 'Plan de Desbosque y Reforestación']
  },
  {
    id: 'prof-06',
    name: 'Ing. Elena Barrenechea',
    profession: 'Especialistas en Gestión del Riesgo',
    specialty: 'Evaluación de Riesgos Originados por Fenómenos Naturales (EVAR)',
    experienceYears: 15,
    location: 'Áncash / La Libertad / Lima',
    modality: 'Híbrido',
    sectors: ['Vivienda', 'Construcción', 'Entidades Públicas'],
    bio: 'Acreditada CENEPRED para EVAR por sismos, aluviones e inundaciones. Asesora a municipios en planes de prevención y reducción del riesgo de desastres (PPRRD).',
    verifiedBadge: true,
    avatarUrl: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400',
    keyProjects: ['EVAR para Proyecto de Reasentamiento Poblacional', 'Plan PPRRD Distrito Costero']
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'proj-01',
    title: 'Evaluación de Riesgo de Inundación y Huaycos en Cuenca Hidrográfica',
    category: 'riesgos',
    sector: 'Infraestructura',
    location: 'Chosica / Río Rímac',
    region: 'Lima',
    year: 2025,
    description: 'Estudio integral de riesgo por flujo de detritos y modelamiento hidráulico bidimensional en quebradas críticas para proteger un tramo de infraestructura vial nacional.',
    imageUrl: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=800',
    challenge: 'Frecuente activación de quebradas durante temporadas de lluvia extraordinaria que generaban interrupciones del tránsito y riesgos para las cuadrillas operativas.',
    analysis: 'Modelamiento HEC-RAS 2D acoplado con levantamiento fotogramétrico por dron de alta resolución y análisis de eventos históricos de los últimos 50 años.',
    solution: 'Informe técnico de EVAR con delimitación de fajas de escorrentía crítica y diseño conceptual de diques disipadores de energía de gaviones.',
    result: 'Aprobación del expediente técnico ante CENEPRED y priorización de obras de defensa que redujeron el riesgo de interrupción en un 85%.'
  },
  {
    id: 'proj-02',
    title: 'Declaración de Impacto Ambiental (DIA) para Parque Industrial Sostenible',
    category: 'gestion-ambiental',
    sector: 'Construcción / Industria',
    location: 'Chilca',
    region: 'Lima',
    year: 2024,
    description: 'Elaboración del instrumento de gestión ambiental preventivo conforme a los lineamientos de PRODUCE para un complejo logístico e industrial de 45 hectáreas.',
    imageUrl: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800',
    challenge: 'Cumplir con los plazos perentorios del inversionista y articular la línea base en una zona de alta demanda hídrica y presencia de humedales cercanos.',
    analysis: 'Muestreos de calidad de aire, ruido ambiental y monitoreo de flora/fauna con enfoque de no afectación de fuentes de agua subterránea.',
    solution: 'Desarrollo de una DIA con Plan de Manejo Ambiental de ciclo cerrado de efluentes tratados para riego de áreas verdes.',
    result: 'Certificación Ambiental obtenida en primera ronda sin observaciones de fondo en 55 días hábiles.'
  },
  {
    id: 'proj-03',
    title: 'Informe Técnico Sustentatorio (ITS) para Reubicación de Subestación Eléctrica',
    category: 'gestion-ambiental',
    sector: 'Energía',
    location: 'Marcona',
    region: 'Ica',
    year: 2024,
    description: 'Trámite ambiental de modificación de componentes auxiliares de línea de transmisión ante la Dirección General de Asuntos Ambientales de Electricidad (MINEM).',
    imageUrl: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800',
    challenge: 'El trazado inicial interfería con un área arqueológica delimitada posteriormente, requiriendo un desvío técnico sin paralizar el cronograma de obra.',
    analysis: 'Evaluación comparativa de impactos de la nueva variante demostrando la nula afectación a ecosistemas frágiles ni restos patrimoniales.',
    solution: 'Sustentación técnica del ITS demostrando no significancia ambiental e integrando un plan de rescate biológico inmediato.',
    result: 'Resolución de Aprobación emitida en 35 días hábiles, permitiendo continuar la energización dentro del cronograma previsto.'
  },
  {
    id: 'proj-04',
    title: 'Estudio de Geodinámica Externa y Estabilidad de Laderas en Corredor Minero',
    category: 'riesgos',
    sector: 'Minería',
    location: 'Espinar',
    region: 'Cusco',
    year: 2023,
    description: 'Cartografía geológica a escala 1:5,000 para identificación de deslizamientos y asentamientos diferenciales a lo largo de 48 km de vía de transporte pesado.',
    imageUrl: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&q=80&w=800',
    challenge: 'Condiciones climáticas de granizada y alta pluviosidad que provocaban desprendimientos frecuentes sobre el trazado vial de transporte concentrado.',
    analysis: 'Levantamiento de perfiles geotécnicos, ensayos de resistencia y fotocontrol satelital de grietas de tensión.',
    solution: 'Zonificación de susceptibilidad alta y diseño de medidas de banqueteo y zanjas de coronación impermeabilizadas.',
    result: 'Cero incidentes por derrumbes no previstos en la temporada de lluvias 2024-2025.'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-01',
    slug: 'diferencia-entre-peligro-y-riesgo-desastres-peru',
    title: '¿Qué diferencia existe realmente entre Peligro, Vulnerabilidad y Riesgo en el Perú?',
    category: 'Gestión del Riesgo',
    date: '15 de Mayo, 2026',
    author: 'Equipo Técnico RG',
    readTime: '6 min de lectura',
    excerpt: 'En la práctica de la ingeniería y la gestión pública con frecuencia se confunden estos tres conceptos. Conoce la metodología CENEPRED y su impacto en proyectos de inversión.',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
    tags: ['CENEPRED', 'EVAR', 'Gestión del Riesgo', 'Normativa'],
    content: `
      La confusión conceptual entre **Peligro** y **Riesgo** suele ser uno de los errores más frecuentes al momento de justificar expedientes técnicos ante CENEPRED, el Sistema Nacional de Inversión Pública (Invierte.pe) y las autoridades ambientales.

      ### 1. El Peligro (Amenaza)
      El peligro es la probabilidad de que un fenómeno físico potencialmente dañino (de origen natural como un sismo o inducido por la acción humana) ocurra en un lugar específico, con una determinada intensidad y en un período de recurrencia definido.
      *Ejemplo:* La precipitación pluvial extraordinaria de 120 mm/24h en la cuenca de una quebrada.

      ### 2. La Vulnerabilidad
      Es la susceptibilidad física, económica, social o ambiental que tiene una población, una vivienda o una carretera de sufrir daños en caso de manifestarse el peligro.
      *Ejemplo:* Construir viviendas con cimientos precarios directamente sobre el cono de deyección de la quebrada sin muros de encauzamiento.

      ### 3. El Riesgo: El resultado de la interacción
      El Riesgo de Desastre se define matemáticamente como la estimación de las pérdidas probables (vidas, infraestructura, medios de subsistencia) generadas por la interacción entre el Peligro y la Vulnerabilidad:
      **Riesgo = f(Peligro, Vulnerabilidad)**

      > *Sin población o infraestructura expuesta, existe peligro natural, pero no existe riesgo de desastre.*

      En **RG CONSULTORÍA AMBIENTAL**, nuestros profesionales acreditados evalúan ambos factores de forma independiente para proporcionar medidas ingenieriles viables y costo-efectivas.
    `
  },
  {
    id: 'blog-02',
    slug: 'guia-practica-cuando-requiere-its-eia',
    title: '¿Cuándo un proyecto requiere un ITS y cuándo una Modificación de EIA (MEIA)?',
    category: 'Gestión Ambiental',
    date: '28 de Abril, 2026',
    author: 'Consultoría Ambiental RG',
    readTime: '8 min de lectura',
    excerpt: 'Optimiza tus tiempos de permisología ambiental. Conoce los criterios normativos de no significancia ambiental para modificaciones de componentes auxiliares.',
    imageUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800',
    tags: ['ITS', 'MEIA', 'SENACE', 'SEIA', 'Permisos'],
    content: `
      Uno de los dolores de cabeza más comunes en la etapa constructiva u operativa de un proyecto es la necesidad de adaptar la infraestructura a imprevistos de campo. ¿Se debe hacer un ITS o una Modificación del Estudio de Impacto Ambiental?

      ### ¿Qué dice el D.S. N° 054-2013-PCM?
      El Informe Técnico Sustentatorio (ITS) fue creado para viabilizar modificaciones en componentes auxiliares o ampliaciones de proyectos que cuenten con certificación ambiental previa, siempre que se demuestre fehacientemente que:
      1. No se generan nuevos impactos ambientales negativos significativos.
      2. No se incrementa la capacidad de producción en porcentajes que superen los umbrales normativos sectoriales.
      3. No se afecta a comunidades nativas ni áreas naturales protegidas sin previa compatibilidad.

      ### Plazos administrativos comparativos
      - **ITS:** 30 a 45 días hábiles promedio de trámite.
      - **MEIA:** Puede tomar de 6 a 18 meses debido a los requerimientos de línea base estacional y participación ciudadana integral.

      Contar con un análisis ambiental preliminar responsable por parte de especialistas evita que la autoridad declare inadmisible el ITS por considerarlo un cambio sustancial.
    `
  },
  {
    id: 'blog-03',
    slug: 'importancia-modelamiento-hidraulico-2d-hec-ras',
    title: 'Modelamiento Hidráulico 2D en fajas marginales y proyectos de infraestructura',
    category: 'SIG/GIS',
    date: '10 de Marzo, 2026',
    author: 'Área Hidrológica RG',
    readTime: '7 min de lectura',
    excerpt: 'Descubre por qué las representaciones unidimensionales tradicionales ya no son suficientes para sustentar defensas ribereñas seguras ante eventos FEN extraordinarios.',
    imageUrl: 'https://images.unsplash.com/photo-1508873696983-2df5293cb32f?auto=format&fit=crop&q=80&w=800',
    tags: ['HEC-RAS 2D', 'Hidrología', 'Fajas Marginales', 'ANA', 'SIG'],
    content: `
      En cauces meándricos y llanuras de inundación complejas en la costa y selva peruana, el flujo de agua durante avenidas extraordinarias no se desplaza en una sola dirección. 

      ### Las ventajas del modelamiento bidimensional (2D)
      - **Tirantes y velocidades vectoriales:** Determina no solo la altura de la lámina de agua sino el vector exacto de fuerza contra las estructuras.
      - **Identificación de brazos secundarios:** Muestra con precisión por dónde romperá el agua antes de alcanzar la corona del dique.
      - **Integración directa con GIS:** Genera polígonos geoespaciales listos para delimitar la Faja Marginal ante la Autoridad Nacional del Agua (ANA).
    `
  }
];

export const TECHNICAL_RESOURCES: ResourceItem[] = [
  {
    id: 'res-01',
    title: 'Checklist de Requisitos para Clasificación Ambiental EVAP (SEIA)',
    type: 'Checklist',
    pagesOrFormat: 'PDF Interactivo · 6 páginas',
    description: 'Lista de verificación técnica y documental exhaustiva para expedientes de Evaluación Ambiental Preliminar ante SENACE y ministerios.',
    downloadCount: 342
  },
  {
    id: 'res-02',
    title: 'Guía Rápida: Criterios para la Delimitación de Fajas Marginales (ANA)',
    type: 'Guía Técnica',
    pagesOrFormat: 'E-Book PDF · 18 páginas',
    description: 'Resumen gráfico de la metodología de huella máxima histórica, modelación hidráulica y criterios de protección ribereña.',
    downloadCount: 512
  },
  {
    id: 'res-03',
    title: 'Matriz Comparativa de Instrumentos de Gestión Ambiental en el Perú',
    type: 'Infografía',
    pagesOrFormat: 'Poster de Alta Resolución / PDF',
    description: 'Cuadro comparativo entre DIA, EIA-sd, EIA-d, ITS, PAMA y FITSA: alcance, tiempos estimados y entidades evaluadoras.',
    downloadCount: 780
  },
  {
    id: 'res-04',
    title: 'Plantilla Modelo para Términos de Referencia de EVAR ante CENEPRED',
    type: 'Plantilla',
    pagesOrFormat: 'Documento Word Editable · 14 páginas',
    description: 'Estructura modelo para contratación de evaluadores acreditados de riesgo de desastres para proyectos de inversión pública y privada.',
    downloadCount: 425
  }
];

export const SECTORS: SectorItem[] = [
  {
    id: 'construccion',
    name: 'Construcción e Inmobiliario',
    iconName: 'Building2',
    description: 'Habilitaciones urbanas, complejos residenciales, centros comerciales y edificaciones en zonas de expansión urbana.',
    applicableServices: ['DIA / FITSA', 'EVAR por Sismo y Licuación', 'Estudio Geotécnico', 'Monitoreo de Ruido y Polvo'],
    regulations: 'Reglamento de Protección Ambiental del Sector Vivienda (D.S. N° 015-2012-VIVIENDA)'
  },
  {
    id: 'mineria',
    name: 'Minería',
    iconName: 'Pickaxe',
    description: 'Proyectos de exploración, explotación y beneficio, transporte de concentrados, plantas de beneficio e instalaciones auxiliares.',
    applicableServices: ['ITS de Componentes Auxiliares', 'Monitoreo Ambiental Integrado', 'Estudios de Estabilidad de Taludes', 'Plan de Cierre'],
    regulations: 'D.S. N° 040-2014-EM y lineamientos de fiscalización ambiental de OEFA'
  },
  {
    id: 'infraestructura',
    name: 'Infraestructura y Transporte',
    iconName: 'Truck',
    description: 'Carreteras, autopistas, puentes, puertos, vías férreas y aeropuertos a nivel nacional.',
    applicableServices: ['Evaluación de Riesgo por Deslizamientos y Huaycos', 'DIA / EIA MTC', 'Delimitación de Faja Marginal para Puentes'],
    regulations: 'Reglamento de Protección Ambiental para el Sector Transportes (D.S. N° 004-2017-MTC)'
  },
  {
    id: 'energia',
    name: 'Energía y Electricidad',
    iconName: 'Zap',
    description: 'Centrales hidroeléctricas, parques solares fotovoltaicos, parques eólicos y líneas de transmisión en alta tensión.',
    applicableServices: ['EVAP y DIA para Centrales Renovables', 'Línea Base Biológica', 'ITS para Desvío de Líneas de Transmisión'],
    regulations: 'Reglamento de Protección Ambiental en las Actividades Eléctricas (D.S. N° 014-2019-EM)'
  },
  {
    id: 'agricultura',
    name: 'Agricultura y Riego',
    iconName: 'Wheat',
    description: 'Proyectos agroindustriales, represas, canales de derivación, sistemas de riego tecnificado y defensas ribereñas agrícolas.',
    applicableServices: ['Evaluación de Riesgo por Inundación Fluvial', 'Permisos de Vertimiento y Reuso (ANA)', 'FITSA Agraria'],
    regulations: 'Reglamento de Gestión Ambiental del Sector Agrario y de Riego (D.S. N° 019-2012-AG)'
  },
  {
    id: 'entidades-publicas',
    name: 'Gobiernos Regionales y Municipalidades',
    iconName: 'Landmark',
    description: 'Gestión del territorio, planes de desarrollo urbano, planes de prevención y reducción del riesgo (PPRRD) y proyectos Invierte.pe.',
    applicableServices: ['EVAR para Pip / Invierte.pe', 'Estudios de Microzonificación y SIG', 'Capacitación a Cuadrillas Municipales'],
    regulations: 'Ley N° 29664 del SINAGERD y manuales metodológicos CENEPRED'
  }
];

export const GENERAL_FAQS = [
  {
    q: '¿Qué es una Evaluación Ambiental Preliminar (EVAP)?',
    a: 'La EVAP es el documento técnico que elabora el titular de un proyecto para solicitar la clasificación ambiental ante la autoridad competente (como SENACE o ministerios sectoriales). Su fin es definir si el proyecto requiere una DIA (Cat. I), EIA-sd (Cat. II) o EIA-d (Cat. III).'
  },
  {
    q: '¿Qué es una Declaración de Impacto Ambiental (DIA)?',
    a: 'Es el estudio ambiental preventivo aplicable a proyectos clasificados en la Categoría I del SEIA, cuyos impactos ambientales negativos previsibles son considerados leves y susceptibles de medidas de mitigación directas.'
  },
  {
    q: '¿Qué es un Informe Técnico Sustentatorio (ITS)?',
    a: 'Es un instrumento ágil que permite modificar componentes auxiliares, hacer mejoras tecnológicas o ampliaciones en proyectos que ya cuentan con certificación ambiental vigente, demostrando que no se generarán impactos significativos.'
  },
  {
    q: '¿Qué es un PAMA y una FITSA?',
    a: 'El PAMA (Programa de Adecuación y Manejo Ambiental) es un instrumento correctivo para operaciones preexistentes en curso que deben adecuarse a nuevos límites ambientales. La FITSA (Ficha Técnica Ambiental) es un instrumento célere y simplificado para proyectos con clasificación anticipada que no ingresan al SEIA ordinario.'
  },
  {
    q: '¿Cuándo puede requerirse un instrumento de gestión ambiental?',
    a: 'Todo proyecto de inversión susceptible de generar impactos ambientales negativos debe contar con certificación ambiental previamente al inicio de sus obras o actividades, de acuerdo con la Ley del SEIA y la normativa sectorial vigente.'
  },
  {
    q: '¿Qué es una evaluación de riesgos originados por fenómenos naturales (EVAR)?',
    a: 'Es un proceso técnico y analítico mediante el cual se determina el nivel de riesgo ante peligros naturales (sismos, tsunamis, deslizamientos, inundaciones), analizando de forma cruzada la probabilidad del peligro y la vulnerabilidad de los elementos expuestos, siguiendo la metodología oficial de CENEPRED.'
  },
  {
    q: '¿Qué diferencia existe entre peligro y riesgo?',
    a: 'El peligro es el evento físico con potencial de causar daño (como un huayco o un sismo). El riesgo es la probabilidad de que ocurran pérdidas concretas de vidas, bienes o servicios si dicho peligro impacta sobre una población o infraestructura vulnerable.'
  },
  {
    q: '¿Qué fenómenos naturales pueden evaluarse?',
    a: 'Se clasifican en Geodinámica Interna (sismos, tsunamis, licuación), Geodinámica Externa (deslizamientos, derrumbes, flujos de detritos/huaycos, caída de rocas) e Hidrometeorológicos (inundaciones fluviales, lluvias intensas, activación de quebradas).'
  },
  {
    q: '¿Qué información se necesita para iniciar una evaluación de riesgos?',
    a: 'Ubicación georreferenciada del predio o proyecto, memoria descriptiva de obras, antecedentes de eventos extremos en la zona, planos topográficos y facilidades para la visita técnica de campo del evaluador acreditado.'
  },
  {
    q: '¿Atienden proyectos en otras regiones del Perú?',
    a: 'Sí. RG Consultoría Ambiental brinda cobertura técnica mediante profesionales habilitados y equipos de campo para proyectos en la Costa, Sierra y Selva del Perú.'
  },
  {
    q: '¿Cómo solicito una cotización?',
    a: 'Puede utilizar nuestro Cotizador Inteligente en línea en solo 5 pasos, escribirnos al WhatsApp corporativo para atención inmediata, o completar el formulario de contacto indicando las características de su proyecto.'
  },
  {
    q: '¿Cómo puedo coordinar una evaluación o estudio para mi proyecto?',
    a: 'Puede contactarnos a través de nuestros canales de atención directa, cotizador en línea o WhatsApp. Nuestro equipo técnico evaluará los requerimientos de su proyecto para brindarle la propuesta técnica correspondiente.'
  }
];

export const PERU_REGIONS = [
  'Amazonas', 'Áncash', 'Apurímac', 'Arequipa', 'Ayacucho', 
  'Cajamarca', 'Callao', 'Cusco', 'Huancavelica', 'Huánuco', 
  'Ica', 'Junín', 'La Libertad', 'Lambayeque', 'Lima Metropolitana', 
  'Lima Provincias', 'Loreto', 'Madre de Dios', 'Moquegua', 'Pasco', 
  'Piura', 'Puno', 'San Martín', 'Tacna', 'Tumbes', 'Ucayali'
];

export const REGULATORY_ENTITIES = [
  { acronym: 'SENACE', name: 'Servicio Nacional de Certificación Ambiental', role: 'Evaluación y aprobación de EIA detallados y semidetallados de gran envergadura.' },
  { acronym: 'OEFA', name: 'Organismo de Evaluación y Fiscalización Ambiental', role: 'Supervisión, fiscalización y sanción ambiental en minería, energía, pesquería e industria.' },
  { acronym: 'MINAM', name: 'Ministerio del Ambiente', role: 'Rector del Sistema Nacional de Gestión Ambiental y formulador de los ECA y LMP.' },
  { acronym: 'CENEPRED', name: 'Centro Nacional de Estimación y Prevención', role: 'Norma y acredita la evaluación de riesgos ante fenómenos naturales (EVAR).' },
  { acronym: 'ANA', name: 'Autoridad Nacional del Agua', role: 'Delimitación de fajas marginales, licencias de uso de agua y autorizaciones de vertimiento.' },
  { acronym: 'SERFOR', name: 'Servicio Nacional Forestal y de Fauna Silvestre', role: 'Planes de desbosque, gestión forestal y protección de biodiversidad nativa.' },
  { acronym: 'MINEM', name: 'Ministerio de Energía y Minas (DGAAM / DGAAE)', role: 'Certificación y adecuación ambiental en minería, electricidad e hidrocarburos.' },
  { acronym: 'PRODUCE', name: 'Ministerio de la Producción (DGAAMI)', role: 'Instrumentos ambientales (DIA, EVAP, PAMA) para plantas industriales y acuicultura.' },
  { acronym: 'MTC', name: 'Ministerio de Transportes y Comunicaciones (DGAAM)', role: 'Certificación ambiental en carreteras, puentes, ferrovías y puertos.' },
  { acronym: 'VIVIENDA', name: 'Ministerio de Vivienda, Construcción y Saneamiento', role: 'Habilitaciones urbanas, PTAR, plantas desalinizadoras y edificaciones.' },
  { acronym: 'MIDAGRI', name: 'Ministerio de Desarrollo Agrario y Riego', role: 'Proyectos de irrigación, agroindustria y adecuación ambiental agrícola.' },
  { acronym: 'GORE / GOLO', name: 'Gobiernos Regionales y Municipalidades', role: 'Fiscalización y aprobación ambiental delegada en pequeña minería y saneamiento.' }
];

export const LEGAL_FRAMEWORK = [
  { law: 'Ley N° 28611 — Ley General del Ambiente', desc: 'Marco rector de los derechos y deberes ambientales en el territorio peruano.' },
  { law: 'Ley N° 27446 — Ley del Sistema de Evaluación del Impacto Ambiental (SEIA)', desc: 'Obligatoriedad de contar con certificación previa al inicio de actividades.' },
  { law: 'D.S. N° 019-2009-MINAM — Reglamento de la Ley del SEIA', desc: 'Procedimientos, criterios de protección y clasificación anticipada.' },
  { law: 'Ley N° 29664 — Ley del SINAGERD', desc: 'Sistema Nacional de Gestión del Riesgo de Desastres y lineamientos de prevención.' },
  { law: 'D.S. N° 054-2013-PCM — Disposiciones para agilizar trámites de inversión', desc: 'Regula la aplicación y aprobación de los Informes Técnicos Sustentatorios (ITS).' },
  { law: 'Resolución Jefatural N° 112-2014-CENEPRED/J', desc: 'Manual oficial para la evaluación de riesgos originados por fenómenos naturales (EVAR).' }
];

export const AI_FAQ_SUGGESTIONS = [
  '¿Qué diferencia hay entre EVAP y DIA?',
  '¿Qué evalúa CENEPRED en sismos o deslizamientos?',
  '¿Qué riesgo tiene mi terreno si está cerca de una quebrada?',
  '¿Qué instrumento necesito para una planta de tratamiento?',
  '¿Qué información debo tener lista antes de iniciar?'
];

export const SAMPLE_PROJECTS = [
  {
    id: 'cas-02',
    title: 'Modelación Hidráulica 2D y Delimitación de Faja Marginal en Río Piura',
    category: 'riesgo' as const,
    sector: 'Infraestructura',
    instrument: 'Evaluación de Riesgo de Inundación / HEC-RAS 2D',
    location: 'Piura - Bajo Piura',
    authority: 'Autoridad Nacional del Agua (ANA) / CENEPRED',
    challenge: 'Desbordes históricos recurrentes durante eventos Niño costero que amenazaban un proyecto vial de conectividad interdistrital.',
    solution: 'Batimetría de precisión, análisis hidrológico con período de retorno Tr=100 años y simulación bidimensional de flujo continuo.',
    result: 'Delimitación formal de la faja marginal con hitos georreferenciados y diseño de muros de protección con gavieras aprobados por la ALA.',
    imageUrl: '/images/riesgos_naturales_vest.jpg'
  },
  {
    id: 'cas-03',
    title: 'Informe Técnico Sustentatorio (ITS) para Ampliación de Línea Eléctrica',
    category: 'ambiental' as const,
    sector: 'Energía',
    instrument: 'Informe Técnico Sustentatorio (ITS)',
    location: 'Ica / Huancavelica',
    authority: 'MINEM - Dirección General de Asuntos Ambientales de Electricidad',
    challenge: 'Requerimiento de reubicar 14 torres de alta tensión por interferencia con infraestructura pública proyectada sin paralizar las obras.',
    solution: 'Demostración técnica de no significancia ambiental mediante evaluación acústica, electromagnética y de paisaje en la nueva variante.',
    result: 'Aprobación del ITS en plazo de 32 días hábiles, evitando una modificación de EIA de más de 8 meses.',
    imageUrl: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'cas-05',
    title: 'Plan de Adecuación y Manejo Ambiental (PAMA) para Planta Industrial',
    category: 'integral' as const,
    sector: 'Industria',
    instrument: 'PAMA Sectorial',
    location: 'Callao - Ventanilla',
    authority: 'PRODUCE (DGAAMI) / OEFA',
    challenge: 'Instalación productiva en operación con adecuación exigida a los nuevos Límites Máximos Permisibles (LMP) de efluentes y emisiones.',
    solution: 'Diagnóstico ambiental exhaustivo, caracterización de descargas con laboratorio acreditado por INACAL y diseño de planta de pre-tratamiento.',
    result: 'Resolución Directoral aprobatoria con cronograma de inversiones validado, eximiendo a la empresa de procesos sancionadores.',
    imageUrl: '/images/gestion_ambiental_vest.jpg'
  }
];

export const BLOG_ARTICLES = [
  {
    id: 'art-01',
    title: '¿Cuándo corresponde una EVAP y cuándo una Declaración de Impacto Ambiental (DIA)?',
    author: 'Ing. Ambiental Senior RG',
    date: '18 de Mayo, 2026',
    readTime: '6 min',
    excerpt: 'Comprende el procedimiento de clasificación ambiental ante el SEIA y cómo la EVAP puede convertirse formalmente en DIA evitando demoras innecesarias.',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
    tags: ['Normativa', 'Instrumentos', 'SEIA']
  },
  {
    id: 'art-02',
    title: 'Factores determinantes en la evaluación del riesgo por sismos en el Perú',
    author: 'Especialista en Geotécnica RG',
    date: '02 de Mayo, 2026',
    readTime: '7 min',
    excerpt: 'La interacción de la Placa de Nazca y la Placa Sudamericana exige analizar la amplificación de onda, licuación y susceptibilidad estructural con rigor CENEPRED.',
    imageUrl: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&q=80&w=800',
    tags: ['Riesgos', 'CENEPRED', 'Sismos']
  },
  {
    id: 'art-03',
    title: 'Huaycos e inundaciones: cómo prepararse técnicamente para la temporada de lluvias',
    author: 'Evaluador de Riesgo CENEPRED RG',
    date: '20 de Abril, 2026',
    readTime: '8 min',
    excerpt: 'Metodología para diagnosticar conos de deyección, umbrales de precipitación crítica y fajas marginales antes de la activación de quebradas.',
    imageUrl: '/images/riesgos_naturales_vest.jpg',
    tags: ['Riesgos', 'Inundaciones', 'Prevención']
  },
  {
    id: 'art-05',
    title: 'Qué revisar antes de contratar un evaluador de riesgos o consultor ambiental',
    author: 'Dirección Técnica RG',
    date: '28 de Marzo, 2026',
    readTime: '6 min',
    excerpt: 'Acreditación CENEPRED vigente, colegiatura habilitada, experiencia auditable y rigor en trabajo de campo para proteger tu inversión.',
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800',
    tags: ['Gestión', 'Normativa', 'Profesionales']
  }
];

