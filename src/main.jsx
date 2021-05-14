import '@compiled/react'
import 'twin.macro'

import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export default () => {
  const { t, i18n } = useTranslation()

  useEffect(() => {
    document.documentElement.setAttribute('lang', i18n.language)
  }, [i18n.language])

  return (
    <main tw="absolute inset-0 flex flex-col justify-center items-center">
      <h1>{t('hello world')}</h1>
    </main>
  )
}
