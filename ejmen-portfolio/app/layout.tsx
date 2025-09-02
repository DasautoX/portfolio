import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import PageTransition from '@/components/PageTransition'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ejmen Al-Ubejdij | Computer Engineering Student',
  description: 'Portfolio of Ejmen Al-Ubejdij - Computer Engineering Student, Researcher, and Developer at Hamad Bin Khalifa University',
  keywords: 'Ejmen Al-Ubejdij, Computer Engineering, HBKU, Software Development, Machine Learning, Research',
  authors: [{ name: 'Ejmen Al-Ubejdij' }],
  openGraph: {
    title: 'Ejmen Al-Ubejdij | Computer Engineering Student',
    description: 'Portfolio of Ejmen Al-Ubejdij - Computer Engineering Student, Researcher, and Developer',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  )
}