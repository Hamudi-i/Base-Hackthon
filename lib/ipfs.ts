import { NFTStorage } from 'nft.storage'

const API_KEY = process.env.NEXT_PUBLIC_NFT_STORAGE_KEY || '1990f9b2.80aa37a9f0864eb3a6e9fb1da1ba1acd'

const client = new NFTStorage({ token: API_KEY })

export async function storeFiles(file: File): Promise<string> {
  const cid = await client.storeBlob(file)
  return cid
}
