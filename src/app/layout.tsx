import type { Metadata } from "next";
import { Lato } from "next/font/google";
import { ThemeProvider as NextThemesProvider } from 'next-themes'

import { Analytics } from "@vercel/analytics/next"
import { GoogleAnalytics } from '@next/third-parties/google'
import PlausibleProvider from 'next-plausible'

import "./globals.css";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import CanvasBackground from "@/components/background";

const lato = Lato({
  weight: '400',
  variable: "--font-lato",
  subsets: ["latin"],
});

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Anderson Tseng",
  description: "You have reached the website of Anderson Tseng.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>

      <body
        className={`antialiased ${lato.className}`}
      >
        {/* <CanvasBackground /> */}


        <NextThemesProvider 
          enableSystem
          enableColorScheme
          // disableTransitionOnChange
          defaultTheme="system"
        >
          <PlausibleProvider domain="andersontseng.ca" customDomain="https://plausible.andersontseng.ca">
            {children}
          </PlausibleProvider>
          <Analytics />
          <GoogleAnalytics gaId="G-PFW116ELQN " />
        </NextThemesProvider>

      </body>

    </html >
  );
}
