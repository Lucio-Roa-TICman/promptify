// Contenido del curso.
// El usuario sale de la sesión real (better-auth, ver src/lib/auth-client.ts)
// y el progreso se lee/escribe en la base (ver src/lib/progressStore.ts).

// ============================================================
//  CONTENIDO DEL CURSO (real, editable)
// ============================================================

export type LessonBlock = { heading?: string; body: string };

export type Exercise =
  | {
      type: "order";
      prompt: string;
      blocks: { id: string; text: string }[];
      correctOrder: string[];
      successMessage: string;
    }
  | {
      type: "compare";
      prompt: string;
      options: { id: string; text: string; correct?: boolean; feedback?: string }[];
      successMessage: string;
    }
  | {
      type: "improve";
      prompt: string;
      badPrompt: string;
      criteria: string[];
      successMessage: string;
    }
  | {
      type: "open";
      prompt: string;
      placeholder: string;
      criteria: string[];
      successMessage: string;
    };

export type Module = {
  slug: string;
  index: number;
  kicker: string;
  title: string;
  subtitle: string;
  lessons: LessonBlock[];
  exercise?: Exercise;
};

export const MODULES: Module[] = [
  {
    slug: "introduccion",
    index: 1,
    kicker: "Módulo 1 · Fundamentos",
    title: "Introducción y Fundamentos",
    subtitle:
      "Qué es realmente un prompt y por qué la calidad de la respuesta depende de cómo preguntás.",
    lessons: [
      {
        heading: "¿Qué es un prompt?",
        body: "Un prompt es una instrucción, pregunta o texto que usás para interactuar con un sistema de inteligencia artificial. Es como un comando: le pedís a la IA que realice una tarea concreta, ya sea generar una imagen, escribir un texto o responder algo puntual. Todo lo que la IA te devuelve nace de ese prompt.",
      },
      {
        heading: "Por qué son importantes",
        body: "El resultado que obtenés de una IA depende pura y exclusivamente de tu prompt. No es lo mismo pedirle «dibujá una oveja» que «dibujame una oveja al estilo de Picasso»: en el segundo caso agregaste contexto y un estilo, y el resultado va a ser completamente distinto. Por eso el prompt es lo más importante que controlás como usuario.",
      },
      {
        heading: "El problema no es técnico, es comunicacional",
        body: "Mucha gente cree que la IA no sirve cuando en realidad el problema es cómo se le habla. Preguntas poco claras generan respuestas poco útiles y frustración. Aprender a promptear bien es aprender a comunicar tu intención con precisión.",
      },
      {
        heading: "Qué es la ingeniería de prompts",
        body: "Es el proceso de diseñar y optimizar las instrucciones que le das a un modelo. No necesitás saber programar: necesitás claridad, lógica y un poco de práctica.",
      },
    ],
  },
  {
    slug: "prompting-iterativo",
    index: 2,
    kicker: "Módulo 2 · El Proceso",
    title: "El Prompting es un Proceso Iterativo",
    subtitle:
      "Nadie encuentra el prompt perfecto al primer intento: los mejores resultados salen de ajustar y volver a intentar.",
    lessons: [
      {
        heading: "No existe el prompt perfecto a la primera",
        body: "Uno de los errores más comunes es pensar que hay un prompt «perfecto» desde el primer intento. En realidad, los mejores usuarios de IA trabajan de forma iterativa: escriben un primer prompt, analizan la respuesta, detectan errores o partes mejorables, modifican el prompt, agregan contexto o ejemplos, ajustan el formato y repiten el proceso hasta llegar al resultado ideal. No ganan por escribir magia en una sola línea, sino por mejorar continuamente sus instrucciones.",
      },
      {
        heading: "Un ejemplo de iteración",
        body: "Primer prompt: «Explicame la fotosíntesis.» La respuesta probablemente sea muy general. Segundo prompt mejorado: «Explicame la fotosíntesis como si fuera para un estudiante de 13 años, usando ejemplos simples y un resumen final de 3 puntos.» Ahora la IA entiende el nivel del usuario, el formato, el tono y la profundidad esperada, y el resultado mejora muchísimo.",
      },
      {
        heading: "La regla principal del prompting",
        body: "Cuanto más claro y específico seas, mejores resultados vas a obtener. La IA no adivina exactamente lo que querés: necesita contexto. Un prompt ambiguo genera respuestas ambiguas; un prompt detallado genera respuestas más útiles.",
      },
    ],
    exercise: {
      type: "improve",
      prompt:
        "Mejorá este prompt: agregale especificidad, definí un público objetivo y un formato de salida. No importa qué tema elijas, lo que se evalúa es qué tan bien construido queda el prompt.",
      badPrompt: "Hablame de historia.",
      criteria: [
        "Especifica sobre qué tema o período histórico",
        "Indica para quién es la respuesta (público objetivo)",
        "Define el formato de salida",
      ],
      successMessage:
        "¡Bien! Reducir la ambigüedad y sumar contexto es exactamente el proceso iterativo del que hablamos.",
    },
  },
  {
    slug: "metodo-clara",
    index: 3,
    kicker: "Módulo 3 · Autoevaluación",
    title: "El Método CLARA",
    subtitle: "Una forma simple y efectiva de comprobar si un prompt está bien construido.",
    lessons: [
      {
        heading: "C — Concreto",
        body: "El prompt debe ser específico y detallado sobre lo que querés obtener. «Hablame de marketing» es malo; «Explicame 5 estrategias de marketing digital para una startup tecnológica con poco presupuesto» es mucho mejor.",
      },
      {
        heading: "L — Lógico",
        body: "La información debe estar organizada en un orden claro y coherente: contexto, objetivo, restricciones y formato esperado. Un prompt desordenado puede confundir a la IA.",
      },
      {
        heading: "A — Alimentado",
        body: "El prompt debe incluir contexto, ejemplos o información adicional. Cuanta más información relevante tenga la IA, mejores respuestas puede generar. Ejemplo: «Actuá como un profesor de historia. Explicá la Revolución Francesa usando un lenguaje sencillo y ejemplos cotidianos.»",
      },
      {
        heading: "R — Relevante",
        body: "Solo debe incluirse información útil para la tarea. Agregar datos innecesarios puede empeorar la respuesta: un prompt eficiente va directo al objetivo, evita información irrelevante y mantiene la claridad.",
      },
      {
        heading: "A — Ajustable",
        body: "Un buen prompt puede mejorarse. La idea no es escribir algo perfecto desde el inicio, sino probar, ajustar, mejorar y experimentar: el prompting profesional funciona mediante iteraciones constantes.",
      },
    ],
    exercise: {
      type: "compare",
      prompt: "¿Cuál de estos prompts está mejor construido según el método CLARA?",
      options: [
        {
          id: "a",
          text: "Quiero un resumen corto de física cuántica, detallado y extremadamente completo.",
          feedback:
            "Falla en Lógico: pedís algo «corto» y «extremadamente completo» a la vez, son instrucciones difíciles de cumplir juntas.",
        },
        {
          id: "b",
          correct: true,
          text: "Explicá programación para un principiante usando palabras simples.",
          feedback:
            "Tiene objetivo claro, público definido y tono adecuado: bastante bien construido.",
        },
        {
          id: "c",
          text: "Escribí un artículo de un tema interesante, mínimo 100 palabras.",
          feedback: "Falla en Alimentado: no da contexto de tema, público ni estilo.",
        },
      ],
      successMessage:
        "Correcto. Reconocer qué letra de CLARA falla es la mejor forma de mejorar un prompt antes de usarlo.",
    },
  },
  {
    slug: "instruccion-contexto",
    index: 4,
    kicker: "Módulo 4 · Anatomía I",
    title: "Instrucción y Contexto",
    subtitle: "Los dos primeros componentes que necesita entender cualquier IA para responder bien.",
    lessons: [
      {
        heading: "Instrucción",
        body: "La instrucción es la orden principal que recibe la IA: define qué tarea debe realizar (explicar, resumir, traducir, analizar, comparar, crear, clasificar). Es el componente más importante del prompt. «Hablame de tecnología» es vago porque no especifica tema, profundidad, formato ni público. «Explicá cómo funciona el machine learning para estudiantes de secundaria usando ejemplos simples» ya le da a la IA todo lo que necesita para acertar.",
      },
      {
        heading: "Contexto",
        body: "El contexto es la información adicional que ayuda a la IA a entender la situación: quién sos, qué estás haciendo, para qué necesitás la respuesta. Muchas veces una IA responde mal no porque «no sepa», sino porque no tiene suficiente contexto. Puede ser personal («soy principiante en programación»), profesional («trabajo en marketing digital»), técnico («estoy usando React y Tailwind»), educativo («explicalo para un estudiante de secundaria») o creativo («la historia debe tener una atmósfera cyberpunk oscura»).",
      },
    ],
  },
  {
    slug: "datos-indicador-salida",
    index: 5,
    kicker: "Módulo 5 · Anatomía II",
    title: "Datos de Entrada e Indicador de Salida",
    subtitle: "Sobre qué información trabaja la IA, y cómo le pedís que te entregue el resultado.",
    lessons: [
      {
        heading: "Datos de entrada",
        body: "Los datos de entrada son la información específica sobre la que la IA debe trabajar: mientras la instrucción dice QUÉ hacer, los datos de entrada indican SOBRE QUÉ hacerlo. Por ejemplo: instrucción «Resumí el siguiente texto», datos de entrada el texto que pegás debajo. Si esos datos están incompletos, desordenados o son ambiguos, la respuesta también va a empeorar.",
      },
      {
        heading: "Indicador de salida",
        body: "El indicador de salida especifica cómo debe verse la respuesta final: formato (tabla, lista, pasos numerados, código, JSON), longitud («en menos de 100 palabras»), estilo (formal, técnico, amigable) y nivel de dificultad (para principiantes, nivel universitario). Sin este componente, la IA responde como quiere; con él, tenés una estructura clara desde el principio.",
      },
    ],
    exercise: {
      type: "order",
      prompt: "Ordená estos cuatro bloques para armar un prompt completo y bien estructurado.",
      blocks: [
        { id: "instruccion", text: "Explicame cómo armar un plan de ahorro mensual." },
        { id: "contexto", text: "Soy estudiante universitario con ingresos variables." },
        { id: "datosEntrada", text: "Mis gastos fijos son alquiler, comida y transporte." },
        { id: "indicadorSalida", text: "Presentalo como una lista de pasos con montos aproximados." },
      ],
      correctOrder: ["instruccion", "contexto", "datosEntrada", "indicadorSalida"],
      successMessage:
        "Exacto. Instrucción → Contexto → Datos de entrada → Indicador de salida: ese orden le da a la IA todo lo que necesita, en el orden en que lo necesita.",
    },
  },
  {
    slug: "rol-restricciones-ejemplos",
    index: 6,
    kicker: "Módulo 6 · Anatomía III",
    title: "Rol, Restricciones y Ejemplos",
    subtitle: "Tres herramientas extra para afinar todavía más la respuesta de la IA.",
    lessons: [
      {
        heading: "Rol",
        body: "El rol le indica a la IA qué personalidad o profesión debe adoptar: «Actuá como abogado», «Sos un experto en nutrición», «Comportate como un profesor». Esto modifica el vocabulario, el tono, la profundidad y el estilo de razonamiento de la respuesta.",
      },
      {
        heading: "Restricciones",
        body: "Las restricciones limitan la respuesta: «No uses lenguaje técnico», «No excedas 200 palabras», «No menciones política». Ayudan a controlar exactamente qué tan larga, técnica o enfocada va a ser la respuesta.",
      },
      {
        heading: "Ejemplos (Few-Shot Prompting)",
        body: "Dar ejemplos suele mejorar muchísimo las respuestas; a esta técnica se la llama Few-Shot Prompting. Los ejemplos ayudan a que la IA entienda patrones, formatos, estilo esperado y calidad deseada. Si le mostrás «Quiero títulos similares a estos: Cómo aprender IA desde cero, Guía rápida de prompts, Errores comunes al usar ChatGPT. Ahora generá 10 más», la IA detecta el patrón automáticamente.",
      },
    ],
    exercise: {
      type: "open",
      prompt:
        "Creá un prompt para explicar qué son los agujeros negros, con estas restricciones: menos de 80 palabras, para adolescentes, sin lenguaje técnico.",
      placeholder: "Escribí acá tu prompt con las restricciones incluidas…",
      criteria: [
        "Menciona el límite de palabras (80 o menos)",
        "Indica que es para adolescentes",
        "Pide que se evite el lenguaje técnico",
      ],
      successMessage:
        "¡Muy bien! Las restricciones bien definidas evitan que la IA se vaya por las ramas.",
    },
  },
  {
    slug: "combinando-componentes",
    index: 7,
    kicker: "Módulo 7 · Integración",
    title: "Cómo se Combinan los Componentes",
    subtitle: "Rol, contexto, objetivo, formato y restricciones, todos trabajando juntos.",
    lessons: [
      {
        heading: "Una fórmula simple",
        body: "Una estructura básica muy útil es: Rol + Contexto + Objetivo + Formato + Restricciones. Ejemplo: «Actuá como un profesor de programación. Estoy aprendiendo Python por primera vez. Explicame qué son los bucles for usando ejemplos simples y ejercicios prácticos. Respondé de forma clara y breve.»",
      },
      {
        heading: "Todos los componentes reducen la ambigüedad",
        body: "Cuantos más elementos útiles y relevantes tenga un prompt, mejor va a comprender la IA la tarea, menos errores va a haber y más control vas a tener sobre el resultado. La diferencia entre un usuario principiante y alguien que domina el prompting suele estar justamente en cómo combina estos componentes.",
      },
    ],
    exercise: {
      type: "open",
      prompt:
        "Este prompt combina varios componentes: «Actuá como profesor de historia. Explicá la Revolución Francesa para un estudiante de 14 años usando ejemplos simples y una lista final de causas y consecuencias.» Identificá cuál es el rol, la instrucción, el contexto y el indicador de salida.",
      placeholder: "Rol: … Instrucción: … Contexto: … Indicador de salida: …",
      criteria: [
        "Identifica el rol (profesor de historia)",
        "Identifica la instrucción (explicar la Revolución Francesa)",
        "Identifica el contexto (estudiante de 14 años)",
        "Identifica el indicador de salida (ejemplos simples y lista final)",
      ],
      successMessage:
        "¡Exacto! Reconocer cada pieza por separado te ayuda a construir tus propios prompts desde cero.",
    },
  },
  {
    slug: "consejos-errores",
    index: 8,
    kicker: "Módulo 8 · Buenas Prácticas",
    title: "Consejos y Errores Comunes",
    subtitle: "Lo que hace bien un buen prompt, y lo que suele arruinarlo.",
    lessons: [
      {
        heading: "Cinco consejos para escribir mejores prompts",
        body: "Empezá simple y sumá complejidad de a poco. Sé específico: cuanto más detallada la instrucción, mejores los resultados. Usá verbos claros como explicá, resumí, clasificá, compará, traducí o generá. Separá secciones (contexto, objetivo, formato) para mejorar la comprensión. Y evitá ambigüedades: en vez de «hacelo corto», decí «explicalo en 3 oraciones».",
      },
      {
        heading: "Errores avanzados comunes",
        body: "Sobrecargar el prompt con información irrelevante puede confundir a la IA. Dar instrucciones contradictorias (como «explicalo profundamente en menos de una oración») genera resultados pobres. No definir el público objetivo hace que la IA no sepa qué nivel de complejidad usar. No controlar el formato deja respuestas desordenadas. Y esperar perfección inmediata ignora que el prompting profesional requiere iteración.",
      },
    ],
    exercise: {
      type: "improve",
      prompt:
        "Este prompt no tiene contexto. Reescribilo agregando para qué es la presentación, quién la va a ver y qué tono debería tener.",
      badPrompt: "Escribí una presentación.",
      criteria: [
        "Indica el tema de la presentación",
        "Menciona el público o para quién es",
        "Define el objetivo o el tono",
      ],
      successMessage:
        "¡Bien! Sin contexto la IA improvisa; con contexto, apunta directo a lo que necesitás.",
    },
  },
  {
    slug: "chain-of-thought",
    index: 9,
    kicker: "Módulo 9 · Técnicas Avanzadas I",
    title: "Chain of Thought y Self-Consistency",
    subtitle: "Cómo hacer que la IA razone paso a paso, y cómo detectar cuándo esa respuesta es confiable.",
    lessons: [
      {
        heading: "Chain of Thought (Cadena de Pensamiento)",
        body: "Chain of Thought es una técnica donde se le pide a la IA que razone paso a paso en vez de responder directamente, descomponiendo el problema en etapas. Muchos errores ocurren porque la IA responde demasiado rápido, omite razonamientos o salta pasos lógicos; al obligarla a pensar paso a paso, se reducen los errores y aumenta la coherencia. Se usa mucho en matemáticas, programación, lógica y resolución de problemas. Ejemplo: «Resolvé este problema matemático explicando cada paso de tu razonamiento.»",
      },
      {
        heading: "Self-Consistency",
        body: "Self-Consistency es una técnica relacionada con Chain of Thought: consiste en generar varios razonamientos distintos para un mismo problema y luego elegir la respuesta más consistente entre todos. La idea es que si varios caminos de razonamiento llegan a la misma conclusión, la probabilidad de que esa respuesta sea correcta aumenta. Se usa en razonamiento complejo, matemáticas y análisis profundo.",
      },
    ],
    exercise: {
      type: "compare",
      prompt: "¿Cuál de estos prompts va a generar el mejor resultado?",
      options: [
        {
          id: "a",
          text: "Hablame de marketing.",
          feedback: "Demasiado ambiguo: no dice qué tipo de marketing ni con qué objetivo.",
        },
        {
          id: "b",
          text: "Dame ideas de marketing digital, contame también toda la historia del marketing desde 1950 y las diferencias entre online y offline.",
          feedback: "Tiene información innecesaria para lo que en realidad estás pidiendo.",
        },
        {
          id: "c",
          correct: true,
          text: "Actuá como especialista en marketing digital. Dame 5 ideas de campaña para redes sociales, para una tienda de ropa de streetwear dirigida a adolescentes. Presentalas en una lista numerada con una breve justificación de cada una.",
          feedback: "Rol, tarea, público, cantidad y formato: todo definido con precisión.",
        },
        {
          id: "d",
          text: "Escribime ideas de campaña.",
          feedback: "Falta contexto: no sabemos para qué marca, producto ni público.",
        },
      ],
      successMessage:
        "Correcto. Cuantos más componentes bien definidos tenga el prompt, más previsible y útil es el resultado.",
    },
  },
  {
    slug: "prompt-chaining-role",
    index: 10,
    kicker: "Módulo 10 · Técnicas Avanzadas II",
    title: "Prompt Chaining y Role Prompting",
    subtitle: "Dividir tareas complejas en etapas, y asignarle un personaje a la IA.",
    lessons: [
      {
        heading: "Prompt Chaining",
        body: "Prompt Chaining consiste en conectar varios prompts entre sí: en vez de resolver todo con una instrucción gigante, el problema se divide en etapas, y cada respuesta se usa como entrada para el siguiente prompt. Por ejemplo, para crear contenido: generar ideas, elegir la mejor, desarrollarla, corregirla y convertirla en presentación. Las tareas complejas suelen fallar cuando intentamos resolverlas todas de una vez; dividirlas mejora la claridad, la precisión y el control.",
      },
      {
        heading: "Role Prompting",
        body: "Role Prompting consiste en asignarle un rol específico a la IA, como «Actuá como un abogado» o «Sos un experto en nutrición». El rol modifica el vocabulario, el tono, la profundidad y el tipo de razonamiento de la respuesta. «Explicá física cuántica» es genérico; «Actuá como un profesor de física y explicá física cuántica para adolescentes usando ejemplos simples» ya tiene un rol definido y da un resultado mucho más ajustado.",
      },
    ],
    exercise: {
      type: "order",
      prompt: "Ordená las etapas de un prompt chaining para crear contenido para una startup.",
      blocks: [
        { id: "ideas", text: "Generar varias ideas de contenido." },
        { id: "elegir", text: "Elegir la mejor idea." },
        { id: "desarrollar", text: "Desarrollarla en detalle." },
        { id: "corregir", text: "Corregirla y ajustarla." },
        { id: "presentacion", text: "Convertirla en una presentación final." },
      ],
      correctOrder: ["ideas", "elegir", "desarrollar", "corregir", "presentacion"],
      successMessage: "Perfecto. Dividir la tarea en etapas evita que se pierda calidad en el camino.",
    },
  },
  {
    slug: "priming-iteracion",
    index: 11,
    kicker: "Módulo 11 · Técnicas Avanzadas III",
    title: "Priming e Iteración de Prompts",
    subtitle: "Preparar el terreno antes de preguntar, y refinar el resultado en varias rondas.",
    lessons: [
      {
        heading: "Priming",
        body: "Priming consiste en preparar el contexto antes de realizar la tarea principal, para «orientar» a la IA hacia cierto tipo de respuestas. Por ejemplo: «Vamos a trabajar sobre marketing digital moderno para startups tecnológicas. Quiero respuestas creativas y orientadas a redes sociales», y recién después se hace la pregunta principal. Esto mejora la coherencia, mantiene la consistencia y reduce las respuestas fuera de contexto.",
      },
      {
        heading: "La iteración es la habilidad más importante",
        body: "Los mejores usuarios de IA raramente obtienen resultados perfectos en el primer intento: crean un prompt inicial, analizan la respuesta, detectan problemas, agregan contexto, ajustan instrucciones, refinan el formato y vuelven a probar. Ejemplo: «Creá un plan de negocios» da una respuesta demasiado general; «Creá un plan de negocios para una startup educativa de IA enfocada en adolescentes, con propuesta de valor, público objetivo, estrategia de monetización y marketing digital» ya mejora mucho; y «Ahora desarrollá únicamente la estrategia de marketing con enfoque en TikTok, YouTube e Instagram» termina de afinar el resultado. La calidad mejora en cada vuelta.",
      },
    ],
    exercise: {
      type: "improve",
      prompt:
        "Este prompt generó una respuesta pobre: «Lunes: pecho. Martes: piernas. Miércoles: espalda.» Mejorá el prompt para conseguir una rutina de entrenamiento realmente útil.",
      badPrompt: "Creá una rutina de entrenamiento.",
      criteria: [
        "Indica la cantidad de días de entrenamiento",
        "Define el nivel de la persona (por ejemplo, principiante)",
        "Menciona el objetivo (por ejemplo, ganar masa muscular)",
        "Pide series y repeticiones para cada ejercicio",
      ],
      successMessage:
        "¡Así se ve la iteración en acción! Cada vuelta de ajuste acerca más el resultado a lo que necesitás.",
    },
  },
  {
    slug: "presente-y-futuro",
    index: 12,
    kicker: "Módulo 12 · Cierre",
    title: "Prompt Engineering: Presente y Futuro",
    subtitle: "Un repaso de todo lo aprendido, y por qué esta habilidad cada vez importa más.",
    lessons: [
      {
        heading: "Cómo construir prompts correctamente",
        body: "Reducí la ambigüedad: mientras menos interpretaciones posibles existan, mejor. Agregá contexto útil para que la IA entienda la situación. Especificá el formato que esperás. Usá ejemplos para mostrarle a la IA qué tipo de respuesta buscás. Dividí las tareas complejas en partes más chicas. Y refiná continuamente: la mejora iterativa es la base de todo esto.",
      },
      {
        heading: "Cómo piensa un Prompt Engineer profesional",
        body: "Un Prompt Engineer no solo escribe preguntas: piensa qué necesita la IA, qué información falta, qué contexto ayudaría, cómo reducir errores, cómo estructurar el razonamiento y cómo optimizar el resultado. La ingeniería de prompts combina lógica, comunicación, análisis, creatividad y pensamiento estructurado.",
      },
      {
        heading: "Por qué esto importa cada vez más",
        body: "A medida que la IA se integra en más industrias, saber comunicarse correctamente con modelos de lenguaje va a ser cada vez más valioso. Quienes dominen el Prompt Engineering van a tener ventajas enormes en productividad, automatización, creatividad, resolución de problemas y desarrollo profesional.",
      },
    ],
  },
  {
    slug: "sintesis-final",
    index: 13,
    kicker: "Módulo 13 · Desafío Final",
    title: "Síntesis y Desafío Final",
    subtitle: "Integrá todo lo aprendido en un único prompt completo.",
    lessons: [
      {
        heading: "La calidad del prompt define la calidad de la respuesta",
        body: "Un buen prompt es claro, específico, lógico, relevante, contextualizado y ajustable. El prompting no es magia: es comunicación. Y como toda comunicación, cuanto mejor expreses lo que querés, mejores resultados vas a obtener.",
      },
    ],
    exercise: {
      type: "open",
      prompt:
        "Desafío final. Usá la IA para responder: «¿Cómo construir un buen prompt?». Integrá la mayor cantidad de técnicas del curso.",
      placeholder: "Escribí tu prompt final, integrando rol, contexto, objetivo, especificidad y formato…",
      criteria: [
        "Define un objetivo claro",
        "Incluye contexto o rol",
        "Es específico",
        "Especifica el formato",
        "Integra varias técnicas",
      ],
      successMessage:
        "¡Felicitaciones! Demostraste que sabés construir un prompt completo. Tu certificado está listo.",
    },
  },
];

export const TOTAL_MODULES = MODULES.length;
