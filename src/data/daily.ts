// Desafío del día: un ejercicio corto que rota cada día del año.
// La selección es determinística (día del año % cantidad), así todos los
// usuarios ven el mismo desafío el mismo día, sin necesidad de base de datos.

export type DailyChallenge = {
  title: string;
  brief: string;
  placeholder: string;
  criteria: string[];
};

export const DAILY_CHALLENGES: DailyChallenge[] = [
  {
    title: "El mail incómodo",
    brief: "Escribí un prompt para que la IA redacte un mail pidiendo una extensión de plazo a un cliente, sin sonar poco profesional.",
    placeholder: "Actuá como… El contexto es… Necesito que…",
    criteria: ["Define un rol", "Explica la situación", "Pide un tono concreto", "Especifica el formato"],
  },
  {
    title: "Explicalo como a tu abuela",
    brief: "Pedile a la IA que explique qué es una red social a alguien que nunca usó internet.",
    placeholder: "Sos un… Tu público es… Explicá…",
    criteria: ["Define el público", "Pide lenguaje simple", "Limita la extensión", "Pide un ejemplo cotidiano"],
  },
  {
    title: "La lista imposible",
    brief: "Tenés 14 pendientes y 3 horas. Escribí un prompt para que la IA los priorice con criterio.",
    placeholder: "Tengo estas tareas… Ordenalas según…",
    criteria: ["Da el contexto de tiempo", "Define el criterio de prioridad", "Pide un formato de salida", "Es específico"],
  },
  {
    title: "El regalo difícil",
    brief: "Prompt para conseguir 5 ideas de regalo para alguien que 'ya tiene todo'. Dale contexto real a la IA.",
    placeholder: "La persona tiene X años, le gusta…",
    criteria: ["Describe a la persona", "Define presupuesto", "Pide cantidad exacta", "Pide justificación por idea"],
  },
  {
    title: "Traducí sin traicionar",
    brief: "Pedí una traducción al inglés de un texto informal argentino que mantenga el tono, no solo las palabras.",
    placeholder: "Traducí este texto… manteniendo…",
    criteria: ["Aclara el tono original", "Define el público destino", "Pide mantener registro informal", "Da el texto o describe su estilo"],
  },
  {
    title: "El plan de viaje",
    brief: "Un prompt para armar un itinerario de 3 días en una ciudad, con restricciones reales (presupuesto, ritmo, gustos).",
    placeholder: "Viajo a… con un presupuesto de…",
    criteria: ["Define destino y duración", "Da restricciones (presupuesto/ritmo)", "Menciona gustos o intereses", "Pide formato por día"],
  },
  {
    title: "Modo profesor",
    brief: "Pedile a la IA que te tome un mini examen de un tema que estés estudiando, con corrección incluida.",
    placeholder: "Sos mi profesor de… Tomame…",
    criteria: ["Asigna el rol de profesor", "Define el tema y nivel", "Especifica cantidad de preguntas", "Pide corrección con explicación"],
  },
  {
    title: "El post que no da vergüenza",
    brief: "Prompt para un post de LinkedIn sobre un logro propio, que informe sin sonar arrogante.",
    placeholder: "Escribí un post sobre… con tono…",
    criteria: ["Describe el logro concreto", "Pide un tono específico", "Limita la extensión", "Define el público"],
  },
  {
    title: "Receta de heladera vacía",
    brief: "Pedí una receta usando SOLO los ingredientes que tenés. Forzá a la IA a no inventar ingredientes.",
    placeholder: "Tengo únicamente: … No agregues…",
    criteria: ["Lista los ingredientes", "Prohíbe agregar otros", "Define tiempo o dificultad", "Pide pasos numerados"],
  },
  {
    title: "Resumí sin perder lo importante",
    brief: "Un prompt para resumir un texto largo en 5 puntos, conservando datos y cifras clave.",
    placeholder: "Resumí este texto en… conservando…",
    criteria: ["Define la cantidad de puntos", "Pide conservar datos concretos", "Define el público del resumen", "Especifica el formato"],
  },
  {
    title: "El presupuesto claro",
    brief: "Prompt para que la IA te ayude a armar un presupuesto freelance para un cliente, con desglose.",
    placeholder: "Soy … y tengo que presupuestar…",
    criteria: ["Define tu rol y el trabajo", "Pide desglose por ítem", "Menciona el mercado o moneda", "Pide formato de tabla"],
  },
  {
    title: "Debate conmigo",
    brief: "Pedile a la IA que defienda la postura CONTRARIA a la tuya sobre un tema, con sus 3 mejores argumentos.",
    placeholder: "Yo pienso que… Defendé lo contrario…",
    criteria: ["Declara tu postura", "Pide la postura contraria", "Especifica cantidad de argumentos", "Pide fuentes o ejemplos"],
  },
  {
    title: "La descripción que vende",
    brief: "Prompt para describir un producto usado que querés vender online, honesto pero atractivo.",
    placeholder: "Vendo un… en estado… para publicar en…",
    criteria: ["Describe el producto y estado", "Define la plataforma", "Pide tono honesto", "Limita la extensión"],
  },
  {
    title: "Aprendé de tus errores",
    brief: "Pegá (mentalmente) un prompt tuyo que haya salido mal esta semana y reescribilo aplicando el método completo.",
    placeholder: "Mi prompt original era… La versión mejorada:",
    criteria: ["Identifica qué le faltaba", "Agrega contexto", "Agrega formato de salida", "Es notablemente más específico"],
  },
];

// Devuelve el desafío correspondiente a la fecha actual.
export function getTodaysChallenge(date = new Date()): DailyChallenge {
  const start = new Date(date.getFullYear(), 0, 0);
  const dayOfYear = Math.floor((date.getTime() - start.getTime()) / 86400000);
  return DAILY_CHALLENGES[dayOfYear % DAILY_CHALLENGES.length];
}
