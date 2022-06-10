import React from 'react'
import ReactDOM from 'react-dom/client'

import './styles/index.scss'
import { ThemeProvider } from '@context'

import { App } from './App'

const root = ReactDOM.createRoot(document.getElementById('root')!)

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
