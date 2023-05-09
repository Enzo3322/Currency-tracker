import { CurrencyProvider } from '@/service/getCurrency'
import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query';

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient} contextSharing={true}>
      <CurrencyProvider>
        <Component {...pageProps} />
      </CurrencyProvider>
    </QueryClientProvider>
  )
}
