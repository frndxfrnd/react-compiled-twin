import { hot } from 'react-hot-loader/root'

import ReactDOM from 'react-dom'

import { Global } from '@emotion/react'
import xw from 'xwind'

const App = hot(() => {
  return (
    <>
      <Global styles={xw`XWIND_BASE XWIND_GLOBAL`} />
      <div css={xw`relative w-screen h-screen`}>
        <span css={xw`absolute bottom-1/2 w-full text-center transform translate-y-1/2`}>work in progress</span>
      </div>
    </>
  )
})

ReactDOM.render(<App />, document.getElementById('root'))
