import ThemeButton from '@/_features/ThemeButton/ThemeButton'
import GithubSvg from '@/_svgs/GithubSvg'
import { routing } from '@/i18n/routing'
import { NextIntlClientProvider } from 'next-intl'
import {
  getMessages,
  getTranslations,
  unstable_setRequestLocale,
} from 'next-intl/server'
import Image from 'next/image'
import StoreProvider from '../StoreProvider'

export async function generateMetadata({
  params: { locale },
}: Readonly<{
  params: { locale: string }
}>) {
  const t = await getTranslations({ locale, namespace: 'Metadata' })

  return {
    title: 'Skill Insight',
    description: t('metaDescription'),
  }
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode
  params: { locale: string }
}>) {
  unstable_setRequestLocale(locale)
  const messages = await getMessages()
  const t = await getTranslations('HomePage')
  return (
    <html lang={locale}>
      <body className="bg-background text-foreground">
        <StoreProvider>
          <NextIntlClientProvider messages={messages}>
            <header className="flex justify-between items-center p-4">
              <a href="">
                <Image
                  src="/logo.svg"
                  alt={t('logoAlt')}
                  title={t('logoAccessibility')}
                  aria-label={t('logoAccessibility')}
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
          </NextIntlClientProvider>
        </StoreProvider>
      </body>
    </html>
  )
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}
