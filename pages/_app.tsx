import '../styles/globals.css'
import { QueryClient, QueryClientProvider } from "react-query";
import type { AppProps } from 'next/app'
import { ContextProvider } from '../context/ContextProvider';
import Container from './_container';

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

export default function App({ Component , pageProps }: AppProps) {

  return (
    <QueryClientProvider client={queryClient}>
      <ContextProvider>
        <Container  {...pageProps} Component={Component} />
      </ContextProvider>
    </QueryClientProvider>
  )
}
