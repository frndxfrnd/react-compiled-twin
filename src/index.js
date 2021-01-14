import { hot } from 'react-hot-loader/root'

import ReactDOM from 'react-dom'

import { Global } from '@emotion/react'
import xw from 'xwind'

const App = hot(() => {
  return (
    <>
      <Global styles={xw`XWIND_BASE XWIND_GLOBAL`} />
    </>
  )
})

ReactDOM.render(<App />, document.getElementById('root'))
