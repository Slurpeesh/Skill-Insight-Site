import { DEFAULT_LOCALE, HOST, LOCALES } from '@/config'
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [getEntry('/')]
}

function getEntry(pathname: string) {
  return {
    url: getUrl(pathname, DEFAULT_LOCALE),
    lastModified: new Date(),
    alternates: {
      languages: Object.fromEntries(
        LOCALES.map((locale) => [locale, getUrl(pathname, locale)])
      ),
    },
  }
}

function getUrl(pathname: string, locale: string) {
  return `${HOST}/${locale}${pathname === '/' ? '' : pathname}`
}
