import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'DEVGLUT — Creative Technology Studio | Farhan Khan × Harsh Rawat',
  description:
    'DEVGLUT is a premium creative technology studio founded by Farhan Khan and Harsh Rawat. Designing and engineering high-performance digital products, immersive web experiences, and intelligent systems.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${plusJakarta.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-[#050505] text-[#ffffff] font-sans selection:bg-[#0033ff] selection:text-white bg-grid">
        {children}
      </body>
    </html>
  );
}
