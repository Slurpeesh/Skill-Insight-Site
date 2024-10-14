'use client'

import { useAppDispatch, useAppSelector } from '@/_hooks/useApp'
import { setDark, setLight } from '@/_store/slices/themeSlice'
import { Moon, Sun } from 'lucide-react'
import { useTranslations } from 'next-intl'

export default function ThemeButton() {
  const theme = useAppSelector((state) => state.theme.value)
  const dispatch = useAppDispatch()
  const t = useTranslations('HomePage')

  function changeThemeHandler() {
    switch (theme) {
      case 'dark':
        dispatch(setLight())
        return
      default:
        dispatch(setDark())
    }
  }
  return (
    <button
      className="w-12 h-12 p-1 rounded-full transition-colors hover:bg-muted"
      onClick={() => changeThemeHandler()}
      aria-label={
        theme === 'dark' ? t('changeToLightTheme') : t('changeToDarkTheme')
      }
    >
      {theme == 'light' && <Sun className="h-full w-full" />}
      {theme == 'dark' && <Moon className="h-full w-full" />}
    </button>
  )
}
