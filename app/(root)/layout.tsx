import { ClerkProvider } from "@clerk/nextjs"
import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Topbar from "@/components/Topbar"
import Bottombar from "@/components/Bottombar"
import MainWrapper from "@/components/MainWrapper"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Threads",
  description: "A Next.js 13 Image Gallery Application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
         {children}       

          {/* <Bottombar /> */}
        </body>
      </html>
    </ClerkProvider>

  )
}
