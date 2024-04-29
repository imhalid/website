import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ViewTransitions } from 'next-view-transitions'
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
    <ViewTransitions>
      <html lang="en" className="bg-black text-white">
        <body className={inter.className}>
          {/* <Loading /> */}
          <div className="jumbo fixed inset-0 opacity-50 z-50 touch-none pointer-events-none" />
          <div id="pattern" className='pointer-events-none' />
          <div id="noise" className='pointer-events-none' />
          {children}
        </body>
      </html>
    </ViewTransitions>
  )
}
