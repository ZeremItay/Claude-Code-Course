import type { Metadata } from "next";
import { heebo, firaCode } from "@/lib/fonts";
import { LenisProvider } from "@/components/providers/lenis-provider";
import { Toaster } from "@/components/ui/sonner";
import { SITE_CONFIG } from "@/lib/constants";
import "./globals.css";

export const metadata: Metadata = {
  title: SITE_CONFIG.title,
  description: SITE_CONFIG.description,
  openGraph: {
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    locale: "he_IL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body
        className={`${heebo.variable} ${firaCode.variable} font-sans antialiased`}
      >
        <LenisProvider>
          {children}
        </LenisProvider>
        <Toaster position="top-center" dir="rtl" />
      </body>
    </html>
  );
}
