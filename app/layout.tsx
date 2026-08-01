import { Prata, Hina_Mincho, Newsreader, Marcellus, Luxurious_Roman, Ovo, Pinyon_Script } from 'next/font/google';
import './globals.css';
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Providers } from "./components/Providers";

// Luxury Typography Overhaul
// Mapping user requests to closest/exact Google Fonts

// Primary Display (Ramillas fallback)
const prata = Prata({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
});

// Editorial Headlines
const hinaMincho = Hina_Mincho({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-headline',
});

// Long-form Reading (Pure Serif Pro / Marixiana Elzevir fallback)
const newsreader = Newsreader({
  subsets: ['latin'],
  display: 'swap',
  style: ['normal', 'italic'],
  variable: '--font-body',
});

// Navigation / Buttons (Barrels fallback)
const marcellus = Marcellus({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nav',
});

// Small Editorial Labels
const luxurious = Luxurious_Roman({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-label',
});

// Metadata / Captions
const ovo = Ovo({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-meta',
});

// Signature
const pinyon = Pinyon_Script({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-signature',
});

export const metadata = {
  title: 'Monoverse',
  description: 'An independent research publication dedicated to understanding reality.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html 
      lang="en" 
      suppressHydrationWarning 
      className={`${prata.variable} ${hinaMincho.variable} ${newsreader.variable} ${marcellus.variable} ${luxurious.variable} ${ovo.variable} ${pinyon.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#FCF9F3" />
        <meta name="color-scheme" content="light dark" />
      </head>
      <body>
        <Providers>
          <TooltipProvider>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </TooltipProvider>
        </Providers>
      </body>
    </html>
  );
}
