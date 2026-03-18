import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Centelha Frontend",
  description: "Frontend com Next.js, React e shadcn/ui",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}
