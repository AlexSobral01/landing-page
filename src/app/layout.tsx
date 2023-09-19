import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ 
  weight: ['400','500','700'],
  subsets: ['latin'] 
},)

export const metadata: Metadata = {
  title: 'Landing Page',
  description: 'this is a landing page for show services and put products, so I made it for simulate a virtual store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
