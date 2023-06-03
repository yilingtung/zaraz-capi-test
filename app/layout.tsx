import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import TrackerScript from '@/components/TrackerScript/TrackerScript'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Zaraz CAPI Demo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
		<TrackerScript />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
