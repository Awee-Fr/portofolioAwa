import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shalwa Febri Rahmatullah | Portfolio & Personal CV",
  description: "Official Portfolio and CV of Shalwa Febri Rahmatullah - Informatics Management student at Politeknik Negeri Padang. Specializing in Web Development, Relational Databases, Desktop Applications, and Graphic Design.",
  keywords: [
    "Shalwa Febri Rahmatullah",
    "Portfolio",
    "CV",
    "Informatics Management",
    "Politeknik Negeri Padang",
    "Web Development",
    "Database Management",
    "C#",
    ".NET",
    "Java",
    "MySQL",
    "PHP",
    "Laravel",
    "Next.js",
    "Graphic Design",
    "UI/UX Design"
  ],
  authors: [{ name: "Shalwa Febri Rahmatullah" }],
  creator: "Shalwa Febri Rahmatullah",
  openGraph: {
    title: "Shalwa Febri Rahmatullah | Portfolio & CV",
    description: "Official Portfolio and CV of Shalwa Febri Rahmatullah - Informatics Management student at Politeknik Negeri Padang.",
    type: "website",
    locale: "en_US",
    siteName: "Shalwa Febri Rahmatullah Portfolio",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#8b5cf6",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#FAF7FD] text-[#1E1638] font-sans antialiased selection:bg-[#E9D5FF] selection:text-[#3B0764]">
        {children}
      </body>
    </html>
  );
}
