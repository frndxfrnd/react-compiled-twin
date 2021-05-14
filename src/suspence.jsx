import { Suspense } from 'react'

import "@compiled/react"
import "twin.macro"

export default ({ children }) => <Suspense
  fallback={
    <main tw='absolute inset-0 flex flex-col justify-center items-center'>
      <span>🚧</span>
    </main>
  }
>
  {children}
</Suspense>
