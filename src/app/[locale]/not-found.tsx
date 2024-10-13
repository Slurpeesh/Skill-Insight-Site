import { Home } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

export default function NotFound() {
  const t = useTranslations('NotFoundPage')
  return (
    <div className="h-screen w-screen flex flex-col gap-2 justify-center items-center text-xl">
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
    </div>
  )
}
