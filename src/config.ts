export const PORT = process.env.PORT || 3000
export const HOST = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : `http://localhost:${PORT}`
export const DEFAULT_LOCALE = 'en'
export const LOCALES = ['en', 'ru'] as const
