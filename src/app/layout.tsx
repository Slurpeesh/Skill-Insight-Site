import ThemeButton from '@/_features/ThemeButton/ThemeButton'
import GithubSvg from '@/_svgs/GithubSvg'
import type { Metadata } from 'next'
import Image from 'next/image'
import './globals.css'
import StoreProvider from './StoreProvider'

export const metadata: Metadata = {
  title: 'Skill Insight',
  description:
    "Skill Insight is the desktop application, that displays statistics on key skills at the user's request",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground">
        <StoreProvider>
          <header className="flex justify-between items-center p-4">
            <a href="">
              <Image
                src="/logo.svg"
                alt="Logo of the Skill Insight representing decreasing horizontal bar chart with red bars"
                title="Go to Skill Insight home page"
                aria-label="Go to Skill Insight home page"
                width={44}
                height={44}
              />
            </a>
            <div className="flex gap-5">
              <ThemeButton />
              <a
                href="https://github.com/Slurpeesh/Skill-Insight"
                target="_blank"
                className="hover:scale-110 transition-transform"
              >
                <GithubSvg />
              </a>
            </div>
          </header>
          {children}
          <footer className="bg-accent">
            <p className="py-12 text-center font-semibold text-base sm:text-xl">
              &copy; Slurpeesh, 2024
            </p>
          </footer>
        </StoreProvider>
      </body>
    </html>
  )
}
