import type { Metadata } from "next";
import { Providers } from "./components/Providers";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Monoverse | Understanding Reality",
    template: "%s | Monoverse",
  },
  description: "Monoverse is an intellectual publication dedicated to understanding reality through interdisciplinary inquiry. We publish essays connecting philosophy, history, science, technology, and culture.",
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
    description: "An intellectual publication dedicated to interdisciplinary inquiry.",
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
    description: "An intellectual publication dedicated to interdisciplinary inquiry.",
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#FAF8F4" />
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
