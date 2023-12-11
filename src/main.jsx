import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import ProtectedRoutes from './routes/index.jsx'
import { Provider } from 'react-redux'
import store from './store/index.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <ProtectedRoutes />
    </Provider>
  </React.StrictMode>,
)
