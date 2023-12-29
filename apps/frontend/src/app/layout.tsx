import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layouts/Header'

export const metadata: Metadata = {
  title: 'Sakii',
  description: '개발자들을 위한 위키',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-pretendard">
        <div className="flex min-h-screen w-full flex-col">
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}
