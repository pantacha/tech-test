import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import { ButtonProvider } from './context/ButtonProvider'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ButtonProvider>
      <App />
    </ButtonProvider>
  </React.StrictMode>,
)
