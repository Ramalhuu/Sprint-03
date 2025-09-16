// app/layout.js - Versão corrigida sem faixa preta

import Providers from './providers';
import Navigation from './components/navigation_component';
import Footer from './components/Footer'; // Importe o Footer

// Seus fonts e metadata
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Donas da Bola",
  description: "Conectando jogadoras de futebol em todo o Brasil",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-white`}>
        <Providers>

          <div className="bg-white">

            <Navigation /> 
            

            <main className="bg-white">
              {children}
            </main>
            
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
