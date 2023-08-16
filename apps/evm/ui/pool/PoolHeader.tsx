'use client'

import { ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid'
import { Chain } from '@sushiswap/chain'
import { Pool as PoolV2 } from '@sushiswap/client'
import { Token } from '@sushiswap/currency'
import { formatPercent, shortenAddress } from '@sushiswap/format'
import {
  Button,
  classNames,
  Currency,
  LinkExternal,
  LinkInternal,
  Stat,
  StatLabel,
  StatValue,
  typographyVariants,
} from '@sushiswap/ui'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@sushiswap/ui/components/tooltip'
import { Pool } from '@sushiswap/v3-sdk'
import { unwrapToken } from 'lib/functions'
import React, { FC, useMemo } from 'react'

import { APRHoverCard } from './APRHoverCard'

type PoolHeader = {
  backUrl: string
  address: string
  pool: Pool | null | undefined | PoolV2
  apy?: {
    fees: number | undefined
    rewards: number | undefined
  }
  priceRange?: string
  hasEnabledStrategies?: boolean
}

export const PoolHeader: FC<PoolHeader> = ({ backUrl, address, pool, apy, priceRange }) => {
  const [token0, token1] = useMemo(() => {
    if (!pool) return [undefined, undefined]
    if (pool instanceof Pool) {
      return [unwrapToken(pool.token0), unwrapToken(pool.token1)]
    }

    return [
      unwrapToken(
        new Token({
          chainId: pool.chainId,
          address: pool.token0.address,
          decimals: pool.token0.decimals,
          symbol: pool.token0.symbol,
        })
      ),
      unwrapToken(
        new Token({
          chainId: pool.chainId,
          address: pool.token1.address,
          decimals: pool.token1.decimals,
          symbol: pool.token1.symbol,
        })
      ),
    ]
  }, [pool])

  if (pool && token0 && token1)
    return (
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <LinkInternal href={backUrl} className="text-blue hover:underline text-sm">
            ← Pools
          </LinkInternal>
          <div className="relative flex items-center gap-3">
            <Currency.IconList iconWidth={36} iconHeight={36}>
              <Currency.Icon currency={token0} />
              <Currency.Icon currency={token1} />
            </Currency.IconList>
            <Button
              asChild
              variant="link"
              className={typographyVariants({
                variant: 'h1',
                className: '!text-4xl !font-bold text-gray-900 dark:text-slate-50',
              })}
            >
              <LinkExternal href={Chain.from(pool.chainId).getTokenUrl(address)}>
                {token0.symbol}/{token1.symbol}
              </LinkExternal>
            </Button>
            {pool instanceof Pool ? null : (
              <div
                className={classNames(
                  pool.protocol === 'SUSHISWAP_V3'
                    ? 'bg-blue/20 text-blue'
                    : pool.protocol === 'SUSHISWAP_V2'
                    ? 'bg-pink/20 text-pink'
                    : 'bg-green/20 text-green',
                  'text-sm px-2 py-1 font-semibold rounded-full mt-0.5'
                )}
              >
                {pool.protocol === 'SUSHISWAP_V3'
                  ? 'V3'
                  : pool.protocol === 'SUSHISWAP_V2'
                  ? 'V2'
                  : pool.protocol === 'BENTOBOX_CLASSIC'
                  ? 'Classic'
                  : 'Stable'}
              </div>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-secondary-foreground mb-8 mt-1.5">
          {apy ? (
            <Stat>
              <StatLabel size="sm">APR</StatLabel>
              <StatValue size="sm">
                {pool instanceof Pool ? (
                  <TooltipProvider>
                    <Tooltip delayDuration={0}>
                      <TooltipTrigger asChild>
                        <span className="underline decoration-dotted">
                          {formatPercent((apy.fees || 0) + (apy.rewards || 0))}
                        </span>
                      </TooltipTrigger>
                      <TooltipContent>The APR displayed is algorithmic and subject to change.</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ) : (
                  <APRHoverCard pool={pool}>
                    <span className="underline decoration-dotted">
                      {formatPercent((apy.fees || 0) + (apy.rewards || 0))}
                    </span>
                  </APRHoverCard>
                )}
              </StatValue>
            </Stat>
          ) : null}
          {priceRange ? (
            <Stat>
              <StatLabel size="sm">Price Range</StatLabel>
              <StatValue size="sm">{priceRange}</StatValue>
            </Stat>
          ) : null}
          <Stat>
            <StatLabel size="sm">Swap Fee</StatLabel>
            <StatValue size="sm">
              {(pool instanceof Pool ? pool.fee / 10000 : pool.swapFee * 100).toFixed(2)}%
            </StatValue>
          </Stat>
          <Stat>
            <StatLabel size="sm">Network</StatLabel>
            <StatValue size="sm">{Chain.from(pool.chainId).name}</StatValue>
          </Stat>
          <Stat>
            <StatLabel size="sm">{token0.symbol} Contract Address</StatLabel>
            <StatValue size="sm">
              <LinkExternal href={Chain.from(pool.chainId).getTokenUrl(token0.wrapped.address)}>
                <Button asChild variant="link" size="sm" className="!font-medium !text-secondary-foreground">
                  {shortenAddress(token0.wrapped.address, 4)}
                  <ArrowTopRightOnSquareIcon className="w-3 h-3" />
                </Button>
              </LinkExternal>
            </StatValue>
          </Stat>
          <Stat>
            <StatLabel size="sm">{token1.symbol} Contract Address</StatLabel>
            <StatValue size="sm">
              <LinkExternal target="_blank" href={Chain.from(pool.chainId).getTokenUrl(token1.wrapped.address)}>
                <Button asChild variant="link" size="sm" className="!font-medium !text-secondary-foreground">
                  {shortenAddress(token1.wrapped.address, 4)}
                  <ArrowTopRightOnSquareIcon className="w-3 h-3" />
                </Button>
              </LinkExternal>
            </StatValue>
          </Stat>
        </div>
      </div>
    )

  return <></>
}
