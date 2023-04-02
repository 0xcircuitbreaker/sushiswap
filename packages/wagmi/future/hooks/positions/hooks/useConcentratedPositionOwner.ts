import { useContractRead } from 'wagmi'
import { BigNumber } from 'ethers'
import { ChainId } from '@sushiswap/chain'

// TODO Factory address
export const useConcentratedPositionOwner = ({
  chainId,
  tokenId,
}: {
  chainId: ChainId | undefined
  tokenId: number | string | undefined
}) => {
  return useContractRead({
    chainId,
    // TODO: Dynamic position manager address
    address: '0xF0cBce1942A68BEB3d1b73F0dd86C8DCc363eF49',
    abi: [
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
        ],
        name: 'ownerOf',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
    ],
    functionName: 'ownerOf',
    args: [BigNumber.from(tokenId ? tokenId : 0)],
    enabled: Boolean(chainId) && Boolean(tokenId),
  })
}
