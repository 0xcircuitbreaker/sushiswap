import type { ChainId } from '@sushiswap/chain'
import type { Address } from 'viem'

export const getIdFromChainIdAddress = (chainId: string | number, address: Address) =>
  `${chainId}:${address.toLowerCase()}`

export const getChainIdAddressFromId = (id: string) => {
  const [chainId, address] = id.split(':') as [ChainId, Address]

  if (!chainId || !address) throw new Error(`Invalid id: ${id}`)

  return { chainId, address }
}
