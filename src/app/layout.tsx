import type { Metadata } from "next"
import { Inter, Instrument_Serif, Poppins } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Clement Kingsley - Full Stack Developer",
  description: "Modern, professional portfolio showcasing full stack development skills and projects",
  keywords: "full stack developer, react, next.js, typescript, portfolio",
  authors: [{ name: "Clement Kingsley" }],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" data-scroll-behavior="smooth">
      <body suppressHydrationWarning className={`${inter.variable} ${instrumentSerif.variable} ${poppins.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
      </body>
    </html>
  )
}