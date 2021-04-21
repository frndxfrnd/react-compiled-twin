import { render } from 'react-dom'

import '@compiled/react'

import { useTranslation } from 'react-i18next'
import { Suspense, useEffect } from 'react'

const boot = require.context('@/boot')
for (const key of boot.keys()) {
  boot(key)
}

const Main = () => {
  const { t, i18n } = useTranslation()

  useEffect(() => {
    document.documentElement.setAttribute('lang', i18n.language)
  }, [i18n.language])

  return (
    <main tw='absolute inset-0 flex flex-col justify-center items-center'>
      <h1>{t('construction')}</h1>
      <a tw='underline' href='https://www.github.com/iiwii'>github.com/iiwii</a>
    </main>
  )
}

const Fallback = () => (
  <main tw='absolute inset-0 flex flex-col justify-center items-center'>
    <span>🚧</span>
  </main>
)

render(
  <Suspense fallback={<Fallback />}>
    <Main />
  </Suspense>,
  document.getElementById('root')
)
