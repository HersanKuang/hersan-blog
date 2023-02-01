import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

import 'normalize.css'
import '@/assets/css/index.less'
import theme from '@/assets/theme'
import { ThemeProvider } from 'styled-components'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback="">
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
)
