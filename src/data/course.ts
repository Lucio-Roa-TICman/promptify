// Contenido del curso + datos de ejemplo (mock).
// Los comentarios "TODO BACK" marcan qué conectar al backend.

// ---------- USUARIO DE EJEMPLO ----------
// TODO BACK: reemplazar por la sesión real de better-auth.
export const MOCK_USER = {
  name: "Lucio Roa",
  email: "lucio@ejemplo.com",
};

// ---------- PROGRESO DE EJEMPLO ----------
// TODO BACK: reemplazar por el progreso real leído de la base.
// completedModules: slugs de módulos terminados.
export const MOCK_PROGRESS = {
  completedModules: ["introduccion", "elementos"] as string[],
  completedAt: null as string | null,
};

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
        body: "Un prompt es el texto que le das a una IA para iniciar una conversación o pedirle algo. La idea central es simple: la IA no adivina lo que querés, responde a lo que le pedís. Si el pedido es vago, la respuesta será vaga.",
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
    slug: "elementos",
    index: 2,
    kicker: "Módulo 2 · Anatomía",
    title: "Anatomía de un Prompt Profesional",
    subtitle: "Los cuatro componentes que estructuran cualquier instrucción efectiva.",
    lessons: [
      { heading: "Instrucción", body: "La tarea específica que querés que el modelo realice: resumir, escribir, comparar, explicar." },
      { heading: "Contexto", body: "Información de fondo que dirige al modelo: quién sos, para qué público, qué situación rodea la tarea." },
      { heading: "Datos de entrada", body: "La entrada concreta sobre la que querés una respuesta: el texto a resumir, los datos a analizar." },
      { heading: "Indicador de salida", body: "El formato del resultado esperado: una lista, una tabla, un tono, una longitud máxima." },
    ],
    exercise: {
      type: "order",
      prompt: "Ordená los bloques para armar un prompt profesional que pida ideas de negocio.",
      blocks: [
        { id: "rol", text: "Actuá como un asesor de emprendimientos." },
        { id: "contexto", text: "Soy diseñador gráfico con 2 años de experiencia en Argentina." },
        { id: "tarea", text: "Dame 5 ideas de negocio freelance con baja inversión inicial." },
        { id: "formato", text: "Presentalas en una lista numerada, cada una con una justificación." },
      ],
      correctOrder: ["rol", "contexto", "tarea", "formato"],
      successMessage: "¡Exacto! Rol → Contexto → Tarea → Formato. Esa estructura no deja lugar a la ambigüedad.",
    },
  },
  {
    slug: "especifico-vs-generico",
    index: 3,
    kicker: "Módulo 3 · Precisión",
    title: "Específico vs. Genérico",
    subtitle: "Por qué un prompt detallado vence siempre a uno vago.",
    lessons: [
      { heading: "Definí tu objetivo", body: "Todo prompt eficaz empieza con un objetivo claro. Definirlo reduce los resultados imprecisos o fuera de tema." },
      { heading: "Sé específico y directo", body: "Si la IA no sabe exactamente qué le pedís, completará los huecos por su cuenta. Sé detallado: cuántos elementos, en qué formato, con qué tono." },
    ],
    exercise: {
      type: "compare",
      prompt: "Seleccioná el prompt más completo para pedir contenido para redes sociales.",
      options: [
        { id: "a", text: "Redactar contenido para redes sociales.", feedback: "Demasiado vago: no hay plataforma, tono ni formato." },
        { id: "b", text: "Escribí algo para Instagram sobre una panadería.", feedback: "Mejora, pero falta cantidad, tono y estilo." },
        { id: "c", correct: true, text: "Escribí tres pies de foto para Instagram de una panadería que promociona brunch los fines de semana. Tono alegre, con emojis de comida.", feedback: "Tarea, plataforma, cantidad, tono y estilo: todo definido." },
      ],
      successMessage: "Correcto. Ese prompt no deja nada librado al azar.",
    },
  },
  {
    slug: "contexto-y-rol",
    index: 4,
    kicker: "Módulo 4 · Contexto",
    title: "Contexto y Prompts de Rol",
    subtitle: "Cómo darle a la IA un papel y un público para afinar el tono.",
    lessons: [
      { heading: "Añadí contexto", body: "El contexto ayuda a la IA a entender tu intención y el papel que debe asumir. Sin él, hasta un objetivo claro da resultados genéricos." },
      { heading: "Prompts de rol", body: "Pedirle que «actúe como un experto en marketing» cambia inmediatamente su forma de responder." },
    ],
    exercise: {
      type: "improve",
      prompt: "Reescribí este prompt vago incluyendo: un rol, el contexto, el público objetivo y el formato de salida.",
      badPrompt: "Explicame cómo hacer una presentación.",
      criteria: [
        "Incluye un rol (ej: «actuá como…»)",
        "Define el contexto o nivel del usuario",
        "Menciona el público objetivo",
        "Especifica el formato de salida",
      ],
      successMessage: "¡Muy bien! Rol + contexto + público + formato: la IA ya tiene casi todo resuelto.",
    },
  },
  {
    slug: "formato-y-encadenamiento",
    index: 5,
    kicker: "Módulo 5 · El Método",
    title: "Formato y Encadenamiento",
    subtitle: "Definir el resultado y dividir tareas complejas en pasos.",
    lessons: [
      { heading: "Definí el resultado deseado", body: "Indicá si querés viñetas, tabla, lista, tono y longitud. Cuanta más orientación de formato, más útil el resultado." },
      { heading: "Desglosá lo complejo", body: "Si la tarea tiene varias partes, dividila en pasos. Esto se llama encadenamiento de prompts: cada paso se apoya en el anterior." },
    ],
    exercise: {
      type: "order",
      prompt: "Ordená los pasos de un encadenamiento de prompts para escribir un blog.",
      blocks: [
        { id: "p1", text: "Creá un esquema para un blog titulado «Cómo iniciar un negocio freelance»." },
        { id: "p2", text: "Usando ese esquema, escribí la introducción con tono motivador, máx. 100 palabras." },
        { id: "p3", text: "Ahora escribí la primera sección con tres ejemplos." },
      ],
      correctOrder: ["p1", "p2", "p3"],
      successMessage: "Perfecto. Esquema → introducción → secciones. Eso es prompt chaining.",
    },
  },
  {
    slug: "prompt-visual",
    index: 6,
    kicker: "Módulo 6 · Aplicación",
    title: "El Arte del Prompt Visual",
    subtitle: "Cómo el nivel de detalle afecta el resultado al generar imágenes.",
    lessons: [
      { heading: "El detalle lo es todo", body: "Al generar imágenes, el nivel de detalle define qué tan cerca queda el resultado de lo que imaginás: estilo, colores, composición, iluminación." },
    ],
    exercise: {
      type: "open",
      prompt: "Escribí el prompt que usarías para generar una imagen con IA. Sé preciso: estilo, colores, composición y ambiente.",
      placeholder: "Ej: Una cabaña de madera en un bosque nevado al atardecer, estilo fotorrealista, paleta cálida, luz suave…",
      criteria: ["Describe el sujeto principal", "Menciona un estilo artístico", "Incluye colores o paleta", "Describe composición o ambiente"],
      successMessage: "¡Excelente! Cuanto más detalle visual, más fiel es el resultado.",
    },
  },
  {
    slug: "sintesis-final",
    index: 7,
    kicker: "Módulo 7 · Cierre",
    title: "Síntesis y Desafío Final",
    subtitle: "Integrá todo lo aprendido en un único prompt completo.",
    lessons: [
      { heading: "Consolidá lo aprendido", body: "Esta etapa integra todo: objetivo, contexto, rol, especificidad, formato e iteración. No es una técnica nueva, es la combinación de todas." },
    ],
    exercise: {
      type: "open",
      prompt: "Desafío final. Usá la IA para responder: «¿Cómo construir un buen prompt?». Integrá la mayor cantidad de técnicas del curso.",
      placeholder: "Escribí tu prompt final, integrando rol, contexto, objetivo, especificidad y formato…",
      criteria: ["Define un objetivo claro", "Incluye contexto o rol", "Es específico", "Especifica el formato", "Integra varias técnicas"],
      successMessage: "¡Felicitaciones! Demostraste que sabés construir un prompt completo. Tu certificado está listo.",
    },
  },
];

export const TOTAL_MODULES = MODULES.length;
