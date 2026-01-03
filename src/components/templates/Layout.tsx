import { type ReactNode } from 'react'
import TopBar from '../organisms/TopBar'
import Navigation from '../organisms/Navigation'
import Footer from '../organisms/Footer'
import MobileCtaBar from '../organisms/MobileCtaBar'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="sticky top-0 z-50">
        <TopBar />
        <Navigation />
      </div>
      <main className="flex-grow pb-16 lg:pb-0">
        {children}
      </main>
      <Footer />
      <MobileCtaBar />
    </div>
  )
}
