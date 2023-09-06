import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Alphas Movies',
  description: 'Movies',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <Navbar />
        {children}
        <Footer />

      </body>
    </html>
  )
}
