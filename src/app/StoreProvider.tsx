'use client'

import { useMediaQuery } from '@/_hooks/useMediaQuery'
import { setDark, setLight } from '@/_store/slices/themeSlice'
import { AppStore, makeStore } from '@/_store/store'
import { useEffect, useRef, useState } from 'react'
import { Provider } from 'react-redux'

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const isDarkModePrefered = useMediaQuery('(prefers-color-scheme: dark)')
  const storeRef = useRef<AppStore>()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    let theme = localStorage.getItem('theme')
    if (theme) {
      document.documentElement.setAttribute('class', theme)
    } else {
      theme = isDarkModePrefered ? 'dark' : 'light'
      document.documentElement.setAttribute('class', theme)
    }
    document.documentElement.setAttribute('class', theme)
    storeRef.current!.dispatch(theme === 'dark' ? setDark() : setLight())
  }, [isDarkModePrefered])

  if (!storeRef.current) {
    storeRef.current = makeStore()
  }

  if (!isClient) {
    return null
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}
