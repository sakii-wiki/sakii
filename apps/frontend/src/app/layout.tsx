import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sakii',
  description: '개발자들의 위키',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
