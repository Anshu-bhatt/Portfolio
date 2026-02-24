import type { Metadata } from "next";
import { Space_Mono, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import SmoothScroll from "@/components/ui/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";
import FloatingParticles from "@/components/ui/FloatingParticles";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-sans",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Anshu Bhatt | AI/ML Engineer & Backend Developer",
  description:
    "Portfolio of Anshu Bhatt — AI/ML Engineer & Backend Developer. Building intelligent systems with Python, Scikit-Learn, and FastAPI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          spaceMono.variable,
          barlowCondensed.variable
        )}
      >
        <SmoothScroll>
          <FloatingParticles />
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
