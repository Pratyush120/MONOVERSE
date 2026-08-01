import type { Metadata } from "next";
import { 
  Prata, 
  Lora, 
  Cormorant_Garamond, 
  Libre_Baskerville, 
  Montserrat, 
  EB_Garamond, 
  Parisienne 
} from "next/font/google";
import { Providers } from "./components/Providers";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";

const prata = Prata({ subsets: ["latin"], weight: "400", variable: "--font-prata" });
const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--font-cormorant" });
const libre = Libre_Baskerville({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-libre" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });
const ebGaramond = EB_Garamond({ subsets: ["latin"], variable: "--font-eb-garamond" });
const parisienne = Parisienne({ subsets: ["latin"], weight: "400", variable: "--font-parisienne" });

export const metadata: Metadata = {
  title: {
    default: "Monoverse | Understanding Reality",
    template: "%s | Monoverse",
  },
  description: "Monoverse is an independent research publication exploring philosophy, history, technology, artificial intelligence, science, literature, economics, and civilization through long-form essays, interdisciplinary research, and first-principles thinking.",
  keywords: ["philosophy", "science", "history", "technology", "AI", "literature", "economics", "culture", "intellectual magazine"],
  authors: [{ name: "Monoverse Editorial" }],
  creator: "Monoverse",
  publisher: "Monoverse",
  metadataBase: new URL("https://monoverse.pub"),
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": "/rss.xml",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://monoverse.pub",
    siteName: "Monoverse",
    title: "Monoverse | Understanding Reality",
    description: "Monoverse is an independent research publication exploring philosophy, history, technology, artificial intelligence, science, literature, economics, and civilization through long-form essays, interdisciplinary research, and first-principles thinking.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Monoverse — Understanding Reality",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Monoverse | Understanding Reality",
    description: "Monoverse is an independent research publication exploring philosophy, history, technology, artificial intelligence, science, literature, economics, and civilization through long-form essays, interdisciplinary research, and first-principles thinking.",
    images: ["/og-image.jpg"],
    creator: "@monoversemag",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-verification-code",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${prata.variable} ${lora.variable} ${cormorant.variable} ${libre.variable} ${montserrat.variable} ${ebGaramond.variable} ${parisienne.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0D0D0D" />
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
