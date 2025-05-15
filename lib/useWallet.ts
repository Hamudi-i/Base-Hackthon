import { useState } from 'react'

export function useWallet() {
  const [walletAddress, setWalletAddress] = useState<string | null>(null)

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
        setWalletAddress(accounts[0])
      } catch (err) {
        console.error('Wallet connection failed:', err)
      }
    } else {
      alert('MetaMask is not installed.')
    }
  }

  return { walletAddress, connectWallet }
}
