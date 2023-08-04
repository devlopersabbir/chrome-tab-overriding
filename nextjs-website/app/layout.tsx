import Header from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/Proviers'
import Footer from '@/components/Footer'


export const metadata: Metadata = {
  title: 'Taboverride | A awesome tab override plugin',
  description: "A awesome browser tab overrider plguin"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
        <body>
          <Header />
          <main className="max-w-7xl mx-auto px-5">
            {children}
          </main>
          <Footer />
        </body>
      </ThemeProvider>
    </html>
  )
}
