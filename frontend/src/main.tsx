import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.tsx'
import { ToastContainer } from 'react-toastify'
import { ErrorBoundary } from './components/ErrorBoundary.tsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext.tsx'
import { LoaderProvider } from './context/LoaderContext.tsx'
import LoaderBridge from './components/LoaderBridge.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <LoaderProvider>
          <AuthProvider>
            <LoaderBridge />
            <App />
            <ToastContainer theme='dark' position='top-right' />
          </AuthProvider>
        </LoaderProvider>
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>,
)
