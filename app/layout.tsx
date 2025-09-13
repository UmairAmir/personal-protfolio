import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Umair Amir',
  description: 'Personal Portfolio of Umair Amir',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
