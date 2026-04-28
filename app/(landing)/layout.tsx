import type { Metadata } from "next";
import {Poppins } from "next/font/google";
import "../globals.css";
import Header from "../components/layouts/header";
import Footer from "../components/layouts/footer";
import { LanguageProvider } from "../context/LanguageContext";

const poppins = Poppins({
 variable: "--font-poppins",
   subsets: ["latin"], 
  display: "swap",
  weight: ["400", "500", "600", "700", "800" ]
});



export const metadata: Metadata = {
  title: "PT.Entio Academic & Technologhy",
  icons: {
    icon: "/logo.png",
  },
  description:
    "PT.Entio Academic & Technologhy adalah perusahaan teknologi yang berfokus pada pengembangan perangkat lunak dan solusi digital untuk mendukung pertumbuhan berkelanjutan bisnis dan dunia pendidikan. Kami hadir untuk menjawab tantangan modern dengan pendekatan inovatif dan terintegrasi.",
  keywords: [
    "software development",
    "web development",
    "mobile app development",
    "custom software",
    "perusahaan teknologi",
    "jasa pembuatan aplikasi",
    "solusi digital",
    "transformasi digital",
    "teknologi untuk bisnis",
    "teknologi untuk pendidikan",
    "teknologi inovatif",
    "teknologi terintegrasi",
    'teknologi berkelanjutan',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <html lang="en" >
      <body
        className={`${poppins.variable} antialiased`}
      >
        <LanguageProvider>
          <Header/>
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
} 

