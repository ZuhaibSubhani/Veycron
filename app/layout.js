import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

// Headings
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

// Body / UI text
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Veycron | School ERP, Inventory Software & Custom AI Development in India",
  description:
    "Veycron builds SaaS products and custom software for Indian businesses: school ERP software, GST inventory management, AI scheduling, custom AI development, and web and mobile app development.",
  keywords: [
    "school ERP software India",
    "school management software",
    "inventory management software India",
    "GST billing and inventory software",
    "AI scheduling software",
    "AI timetable generator",
    "custom AI development India",
    "LLM integration and RAG",
    "web and mobile app development India",
    "Android app development company",
  ],
  openGraph: {
    title: "Veycron | SaaS products and custom software for Indian businesses",
    description:
      "School ERP, inventory management, AI scheduling, custom AI development, and web and mobile app development.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <body
        className={`${jakarta.variable} ${inter.variable} font-body bg-white text-slate-900 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}