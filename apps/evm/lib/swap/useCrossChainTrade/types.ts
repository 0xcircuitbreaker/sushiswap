import { Amount, Price, Type } from '@sushiswap/currency'
import { Percent } from '@sushiswap/math'
import { Address } from '@sushiswap/wagmi'
import { SushiXSwap2ChainId, TransactionType } from '@sushiswap/sushixswap-sdk'

export interface UseCrossChainTradeParams {
  tradeId: string
  network0: SushiXSwap2ChainId
  network1: SushiXSwap2ChainId
  token0: Type | undefined
  token1: Type | undefined
  amount: Amount<Type> | undefined
  slippagePercentage: string
  recipient: Address | undefined
  enabled: boolean
}

export type UseCrossChainSelect = Omit<
  UseCrossChainTradeReturn,
  'priceImpact' | 'amountIn' | 'amountOut' | 'minAmountOut' | 'swapPrice'
> & {
  priceImpact: [string, string] | undefined
  amountIn: string | undefined
  amountOut: string | undefined
  minAmountOut: string | undefined
}

export interface UseCrossChainTradeReturn {
  swapPrice: Price<Type, Type> | undefined
  priceImpact: Percent | undefined
  amountIn: Amount<Type> | undefined
  amountOut: Amount<Type> | undefined
  minAmountOut: Amount<Type> | undefined
  gasSpent: string | undefined
  functionName: string
  writeArgs: [] | undefined
  route: { status: string }
  value: bigint | undefined
  transactionType: TransactionType | undefined
  srcBridgeToken: Type | undefined
  dstBridgeToken: Type | undefined
}

export type UseCrossChainTradeQuerySelect = (data: UseCrossChainSelect) => UseCrossChainTradeReturn
