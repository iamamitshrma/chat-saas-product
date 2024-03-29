import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import { ThemeProvider } from '@/components/ThemeProvider'
import ClientProvider from '@/components/ClientProviders'
import FirebaseAuthProvider from '@/components/FirebaseAuthProvider'
import SubscriptionProvider from '@/components/SubscriptionProvider'
import { Toaster } from "@/components/ui/toaster";


export const metadata: Metadata = {
  title: 'Chat All',
  description: 'Chat All: Designed By Amit Sharma',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClientProvider>
      <html lang="en">
        <body className='flex flex-col min-h-screen'>
          <FirebaseAuthProvider>
            <SubscriptionProvider>
              <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
              >
                <Header />
                {children}
                <Toaster />
              </ThemeProvider>
            </SubscriptionProvider>
          </FirebaseAuthProvider>
        </body>
      </html>
    </ClientProvider>
  )
}
