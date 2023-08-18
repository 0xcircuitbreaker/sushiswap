'use client'

import { Native } from '@sushiswap/currency'
import { ZERO } from '@sushiswap/math'
import {
  isRouteProcessor3ChainId,
  isRouteProcessorChainId,
  routeProcessor3Address,
  routeProcessorAddress,
} from '@sushiswap/route-processor'
import { DialogTrigger } from '@sushiswap/ui'
import { Button } from '@sushiswap/ui/components/button'
import { Checker } from '@sushiswap/wagmi/future/systems'
import { APPROVE_TAG_SWAP } from 'lib/constants'
import { warningSeverity } from 'lib/swap/warningSeverity'
import React, { FC, useEffect, useState } from 'react'

import { useDerivedStateSimpleSwap, useSimpleSwapTrade } from './derivedstate-simple-swap-provider'
import { SimpleSwapTradeReviewDialog } from './simple-swap-trade-review-dialog'

export const SimpleSwapTradeButton: FC = () => {
  const { data: trade } = useSimpleSwapTrade()
  const {
    state: { swapAmount, swapAmountString, chainId, token0, token1 },
  } = useDerivedStateSimpleSwap()
  const [checked, setChecked] = useState(false)

  const isWrap = token0?.isNative && token1?.wrapped.address === Native.onChain(chainId).wrapped.address
  const isUnwrap = token1?.isNative && token0?.wrapped.address === Native.onChain(chainId).wrapped.address

  // Reset
  useEffect(() => {
    if (warningSeverity(trade?.priceImpact) <= 3) {
      setChecked(false)
    }
  }, [trade])

  return (
    <>
      <SimpleSwapTradeReviewDialog>
        <div>
          <Checker.Connect>
            <Checker.Network chainId={chainId}>
              <Checker.Amounts chainId={chainId} amounts={[swapAmount]}>
                <Checker.ApproveERC20
                  id="approve-erc20"
                  amount={swapAmount}
                  contract={
                    isRouteProcessor3ChainId(chainId)
                      ? routeProcessor3Address[chainId]
                      : isRouteProcessorChainId(chainId)
                      ? routeProcessorAddress[chainId]
                      : undefined
                  }
                >
                  <Checker.Success tag={APPROVE_TAG_SWAP}>
                    <DialogTrigger asChild>
                      <Button
                        size="xl"
                        disabled={Boolean(
                          true ||
                            !trade?.amountOut?.greaterThan(ZERO) ||
                            trade?.route?.status === 'NoWay' ||
                            +swapAmountString === 0 ||
                            (!checked && warningSeverity(trade?.priceImpact) > 3)
                        )}
                        color={warningSeverity(trade?.priceImpact) >= 3 ? 'red' : 'blue'}
                        fullWidth
                        testId="swap"
                      >
                        {!checked && warningSeverity(trade?.priceImpact) >= 3
                          ? 'Price impact too high'
                          : trade?.route?.status === 'NoWay'
                          ? 'No trade found'
                          : isWrap
                          ? 'Wrap'
                          : isUnwrap
                          ? 'Unwrap'
                          : 'Swap'}
                      </Button>
                    </DialogTrigger>
                  </Checker.Success>
                </Checker.ApproveERC20>
              </Checker.Amounts>
            </Checker.Network>
          </Checker.Connect>
        </div>
      </SimpleSwapTradeReviewDialog>
      {warningSeverity(trade?.priceImpact) > 3 && (
        <div className="flex items-start px-4 py-3 mt-4 rounded-xl bg-red/20">
          <input
            id="expert-checkbox"
            type="checkbox"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
            className="cursor-pointer mr-1 w-5 h-5 mt-0.5 text-red-600 !ring-red-600 bg-white border-red rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2"
          />
          <label htmlFor="expert-checkbox" className="ml-2 font-medium text-red-600">
            Price impact is too high. You will lose a big portion of your funds in this trade. Please tick the box if
            you would like to continue.
          </label>
        </div>
      )}
    </>
  )
}
