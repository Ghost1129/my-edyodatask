"use client"

import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import {store} from '@/store/store'
import {Provider} from 'react-redux'

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {
  return (
    <>
    <html lang="en">
      <Provider store={store}>
      <body className={inter.className}>{children}</body>
      </Provider>
    </html>
    </>
  )
}
