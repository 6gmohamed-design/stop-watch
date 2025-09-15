import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css'
import UsecontextProvider from './component3/usecontext';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <UsecontextProvider >
    <App />
   </UsecontextProvider>
)
