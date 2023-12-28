import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
// import Loading from '@/app/components/loading'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Halid',
  description: 'Halid is a Frontend Developer based in the Turkey.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" className="bg-black text-white">
      <body className={inter.className}>
        {/* <Loading /> */}
        <div className="jumbo absolute inset-0 opacity-50"></div>
        <div id="pattern"></div>
        <div id="noise"></div>
        {children}
      </body>
    </html>
  )
}
