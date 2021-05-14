import { render } from 'react-dom'

import 'tailwindcss/dist/base.css'

import Suspence from '@/suspence'
import Main from '@/main'

;(async () => {
  // import boot files
  const context = require.context('@/boot')
  for (const key of context.keys()) {
    await context(key).default()
  }

  render(
    <Suspence>
      <Main />
    </Suspence>,
    document.getElementById('root')
  )
})()
