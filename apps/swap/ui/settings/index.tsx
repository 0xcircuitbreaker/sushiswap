'use client'

import { Cog6ToothIcon } from '@heroicons/react/24/outline'
import { Dialog } from '@sushiswap/ui/future/components/dialog'
import { List } from '@sushiswap/ui/future/components/list/List'
import React, { FC, useState } from 'react'

import { CarbonOffset } from './CarbonOffset'
import { ExpertMode } from './ExpertMode'
import { SlippageTolerance } from './SlippageTolerance'
import * as module from 'module'

export enum SettingsModule {
  CarbonOffset = 'CarbonOffset',
  CustomTokens = 'CustomTokens',
  SlippageTolerance = 'SlippageTolerance',
  ExpertMode = 'ExpertMode',
}

interface SettingsOverlayProps {
  modules: SettingsModule[]
}

export const SettingsOverlay: FC<SettingsOverlayProps> = ({ modules }) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Cog6ToothIcon
        onClick={() => setOpen(true)}
        width={26}
        height={26}
        className="cursor-pointer hover:animate-spin-slow hover:dark:text-slate-50 dark:text-slate-200 text-gray-700 hover:text-gray-900 mr-3"
      />
      <Dialog open={open} onClose={() => setOpen(false)}>
        <Dialog.Content className="!bg-gray-100 dark:!bg-slate-900 flex flex-col gap-3">
          {modules.includes(SettingsModule.SlippageTolerance) && (
            <List className="!pt-0">
              <List.Control>
                <SlippageTolerance />
              </List.Control>
            </List>
          )}
          {modules.length > 1 && (
            <List className="!pt-0">
              <List.Control>
                {modules.includes(SettingsModule.ExpertMode) && <ExpertMode />}
                {modules.includes(SettingsModule.CarbonOffset) && <CarbonOffset />}
              </List.Control>
            </List>
          )}
        </Dialog.Content>
      </Dialog>
    </>
  )
}
