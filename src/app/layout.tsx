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
      <body>
        <header className="bg-red-500 p-4">
          <Image src="/logo.png" alt="" width={52} height={52} />
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
