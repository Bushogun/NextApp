import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rocketfy App',
  description: 'Next App to Rocketfy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <meta name="author" content="Jonathan Stiven Soto Pantoja" />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
