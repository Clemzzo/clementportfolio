import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
    <html lang="en" className="dark">
      <body suppressHydrationWarning className={`${inter.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
      </body>
    </html>
  )
}