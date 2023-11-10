import { Days_One } from 'next/font/google'
import './globals.css'

const days_one = Days_One({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-days-one',
  weight: "400"
})

export const metadata = {
  title: 'Morphology',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={days_one.className}>{children}</body>
    </html>
  )
}
