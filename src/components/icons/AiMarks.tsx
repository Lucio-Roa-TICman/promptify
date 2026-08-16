/**
 * Íconos ilustrados propios para representar los tres ecosistemas de IA
 * con los que se practica en el curso. Son formas originales en el mismo
 * estilo line-art que los mascots (trazo ink + un acento de color) —
 * deliberadamente NO son los isotipos oficiales de OpenAI/Anthropic/Google,
 * para no usar marcas registradas de terceros sin autorización.
 */

type MarkProps = { size?: number; className?: string };

export function ChatGPTMark({ size = 40, className }: MarkProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
      <path
        d="M12 20c0-6.1 5-11 11-11h18c6.1 0 11 4.9 11 11v13c0 6.1-5 11-11 11H27l-9.5 8v-8H23c-6.1 0-11-4.9-11-11z"
        fill="#FF7A0D"
        stroke="#201A14"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <circle cx="23.5" cy="26.5" r="2.3" fill="#201A14" />
      <circle cx="32" cy="26.5" r="2.3" fill="#201A14" />
      <circle cx="40.5" cy="26.5" r="2.3" fill="#201A14" />
    </svg>
  );
}

export function ClaudeMark({ size = 40, className }: MarkProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
      <path
        d="M32 5l5.2 19.8L57 30l-19.8 5.2L32 55l-5.2-19.8L7 30l19.8-5.2z"
        fill="#B5622E"
        stroke="#201A14"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function GeminiMark({ size = 40, className }: MarkProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
      <path
        d="M21 7l3.1 11.9L36 22l-11.9 3.1L21 37l-3.1-11.9L6 22l11.9-3.1z"
        fill="#045699"
        stroke="#201A14"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path
        d="M45 26l2.6 9.4L57 38l-9.4 2.6L45 50l-2.6-9.4L33 38l9.4-2.6z"
        fill="#045699"
        opacity="0.72"
        stroke="#201A14"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
