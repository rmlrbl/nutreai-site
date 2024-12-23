// src/app/layout.js
import localFont from "next/font/local";
import "./globals.css";
import { Montserrat } from "next/font/google";
import { Providers } from "./providers";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "nutre.ai",
  description:
    "Personalize seu plano alimentar com o nutre.ai! Controle suas refeições, calorias e macronutrientes de forma prática e integrada ao WhatsApp.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} font-montserrat antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
