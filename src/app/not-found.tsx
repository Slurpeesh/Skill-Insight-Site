import { Home } from 'lucide-react'
import { getTranslations } from 'next-intl/server'
import Link from 'next/link'
import StoreProvider from './StoreProvider'

export default async function NotFound() {
  const t = await getTranslations('NotFoundPage')
  return (
    <html lang="en">
      <StoreProvider>
        <body className="bg-background text-foreground text-xl flex flex-col gap-2 justify-center items-center h-screen w-screen">
          <h2 className="text-3xl font-semibold">
            <span className="border-r-2 border-r-foreground pr-4">404</span>
            <span className="pl-4">Not Found</span>
          </h2>
          <p className="text-center">{t('couldNotFound')}</p>
          <Link
            href="/"
            className="flex gap-2 items-center font-semibold text-accent hover:underline hover:underline-offset-2"
          >
            <Home />
            <span>{t('returnHome')}</span>
          </Link>
        </body>
      </StoreProvider>
    </html>
  )
}
