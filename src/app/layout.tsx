import type { Metadata } from 'next'
import Image from 'next/image'
import './globals.css'

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
        <header className="bg-red-500 flex justify-between items-center p-4">
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
          <a
            href="https://github.com/Slurpeesh/Skill-Insight"
            target="_blank"
            className="hover:scale-110 transition-transform"
          >
            <Image
              src="/githubIcon.svg"
              alt="GitHub link to Skill Insight public repository"
              width={44}
              height={44}
            />
          </a>
        </header>
        {children}
        <footer className="bg-red-500">
          <p className="py-12 text-center font-semibold text-base sm:text-xl">
            &copy; Slurpeesh, 2024
          </p>
        </footer>
      </body>
    </html>
  )
}
