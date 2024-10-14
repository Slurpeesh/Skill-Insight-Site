import { DEFAULT_LOCALE, LOCALES } from '@/config'
import { createSharedPathnamesNavigation } from 'next-intl/navigation'
import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: LOCALES,
  defaultLocale: DEFAULT_LOCALE,
})

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation(routing)
