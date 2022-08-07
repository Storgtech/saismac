import Head from 'next/head'
import { QueryClient, QueryClientProvider } from 'react-query'
import { AuthProvider } from '../context/Auth'
import { ThemeProvider } from '../context/Theme'
import '../global.css'

const client = new QueryClient()

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet" />
      </Head>
      <QueryClientProvider client={client}>
        <ThemeProvider>
          <AuthProvider>
            <Component {...pageProps} />
          </AuthProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  )
}

export default MyApp
