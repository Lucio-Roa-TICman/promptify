import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

const VARIANTS: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-kiddo-orange text-white shadow-[4px_4px_0_0_#201A14] hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_#201A14]",
  secondary: "bg-paper text-ink hover:-translate-y-0.5 hover:bg-sand",
};

export function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full border-[3px] border-ink px-8 py-3.5 font-display text-base font-bold uppercase tracking-wide transition-all active:translate-y-0 active:shadow-none ${VARIANTS[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
