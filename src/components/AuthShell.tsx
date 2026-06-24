import Link from "next/link";
import { Wordmark } from "./MoonLogo";

export function AuthShell({
  title,
  subtitle,
  children,
  footer,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  footer: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen items-center justify-center px-6 py-12">
      {/* glow ambiente */}
      <div
        className="pointer-events-none fixed left-1/2 top-0 -z-0 h-[500px] w-[700px] -translate-x-1/2"
        style={{ background: "radial-gradient(ellipse at center, rgba(37,99,235,.12), transparent 60%)" }}
      />
      <div className="relative z-10 w-full max-w-md">
        <div className="mb-8 flex justify-center">
          <Link href="/">
            <Wordmark size={22} />
          </Link>
        </div>
        <div className="rounded-[18px] border border-line bg-surface/70 p-8 backdrop-blur-sm">
          <h1 className="font-serif text-[26px] font-normal tracking-[-0.01em]">{title}</h1>
          <p className="mt-1.5 text-sm text-muted">{subtitle}</p>
          <div className="mt-6">{children}</div>
        </div>
        <p className="mt-6 text-center text-sm text-muted">{footer}</p>
      </div>
    </div>
  );
}
