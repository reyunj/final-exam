import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Section from './components/Section'
import Footer from './components/Footer'
import MainSection from './components/MainSection'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Exam',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <Hero/>
        <Section/>
        <MainSection/>
        <Footer/>
        {children}
        </body>
    </html>
  )
}
