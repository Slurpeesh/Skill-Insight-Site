'use client'

import { useMediaQuery } from '@/_hooks/useMediaQuery'
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
    const initialTheme = isDarkModePrefered ? 'dark' : 'light'
    document.documentElement.setAttribute('class', initialTheme)
  }, [isDarkModePrefered])

  if (!storeRef.current) {
    storeRef.current = makeStore()
  }

  if (!isClient) {
    return null // Рендерим пустой контент, пока клиент не загрузится
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}
