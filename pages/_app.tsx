import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit'
import { WagmiProvider } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {
  mainnet,
  polygon,
  arbitrum,
} from 'wagmi/chains'

const config = getDefaultConfig({
  appName: 'Decentralized Notion',
  projectId: 'your_project_id_here', // Use a real or dummy WalletConnect project ID
  chains: [mainnet, polygon, arbitrum],
  ssr: true,
})

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <Component {...pageProps} />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
