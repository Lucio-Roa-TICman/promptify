import { Inter } from "next/font/google";
import "./styles/tokens.css";
import "./styles/components.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Promptify",
  description: "Aprende a promptear · Ingeniería de prompts en español",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
