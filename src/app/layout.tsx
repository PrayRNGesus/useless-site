import './globals.css'
import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'

const font = Raleway({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'UselessWeb V2',
  description: 'Re-creation of The Useless Web to showcase talent.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>

        {children}

      </body>
    </html>
  )
}
