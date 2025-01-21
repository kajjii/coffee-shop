import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/app/App.jsx'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './api/queryClient.jsx'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>,
)
