import { ReactScan } from "@/components/ReactScan";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import AppBar from "@/components/AppBar";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import Providers from "../providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Analyser",
  description: "Bike journey analyser",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);
  return (
    <html lang={locale}>
      <ReactScan />
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex flex-col items-stretch overflow-hidden antialiased`}
      >
        <NextIntlClientProvider>
          <Providers>
            <AppBar />
            {children}
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
