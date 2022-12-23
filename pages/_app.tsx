import '../styles/globals.css'
import { QueryClient, QueryClientProvider } from "react-query";
import type { AppProps } from 'next/app'

const REFETCH_DATA_AFTER_ONE_DAY = 86400

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
      refetchOnReconnect: false,
      retry: false,
      staleTime: REFETCH_DATA_AFTER_ONE_DAY,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}
