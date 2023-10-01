import type { Metadata } from 'next'
import { Providers } from "@/redux/providers";
import React, { ReactNode } from 'react'
import { Navbar } from '@/components/navbar/Navbar'
import styles from './layout.module.scss'
import "@/styles/globals.scss";

type Props = {
  children?: ReactNode
  title?: string
}

export const metadata: Metadata = {
  title: 'Rocketfy App',
  description: 'Next App to Rocketfy',
}

function RootLayout(props: Props)  {
  return (
    <html lang="en">
      <meta name="author" content="Jonathan Stiven Soto Pantoja" />
      <body className={styles.background}>
        <Navbar />
        <div className={styles.container}>
        <Providers>
          {props.children}
        </Providers>
        </div>
      </body>
    </html>
  )
}

export default RootLayout