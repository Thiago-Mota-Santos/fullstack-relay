import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Suspense } from 'react'
import { ReactRelayContainer } from '../relay/ReactRelayContainer'
import { AuthProvider } from '../context/AuthContext'
import { ToastTable } from '../components/ToastTable'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Suspense fallback="loading">
        <ReactRelayContainer Component={Component} props={pageProps} />
        <ToastTable />
      </Suspense>
    </AuthProvider>
  )
}
