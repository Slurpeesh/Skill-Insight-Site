import WebVitals from '@/_features/WebVitals/WebVitals'
import { routing } from '@/i18n/routing'
import { Analytics } from '@vercel/analytics/react'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, unstable_setRequestLocale } from 'next-intl/server'
import { Inter } from 'next/font/google'
import StoreProvider from '../StoreProvider'
import { cn } from '../_lib/utils'

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-inter',
})

export default async function LocaleLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode
  params: { locale: string }
}>) {
  unstable_setRequestLocale(locale)
  const messages = await getMessages()
  return (
    <html lang={locale}>
      <body
        className={cn(
          `${inter.variable}`,
          'bg-background text-foreground font-inter'
        )}
      >
        {process.env.NODE_ENV === 'development' && <WebVitals />}
        {process.env.NODE_ENV === 'production' && <Analytics />}
        <StoreProvider>
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </StoreProvider>
      </body>
    </html>
  )
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}
