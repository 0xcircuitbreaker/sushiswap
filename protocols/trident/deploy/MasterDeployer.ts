import { BENTOBOX_ADDRESS, isBentoBoxChainId } from '@sushiswap/bentobox-sdk'
import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { DeployFunction } from 'hardhat-deploy/types'

import type { BentoBoxV1 } from '../typechain'

const deployFunction: DeployFunction = async function ({
  ethers,
  deployments,
  getNamedAccounts,
  getChainId,
  run,
}: HardhatRuntimeEnvironment) {
  //console.debug("Running MasterDeployer deploy script");
  const { deploy } = deployments

  const barFee = 1667 // 1667/10000 ≈ 1/6

  const { deployer, barFeeTo } = await getNamedAccounts()

  const chainId = Number(await getChainId())

  const bentoBox = await ethers.getContractOrNull<BentoBoxV1>('BentoBoxV1')

  // const wnative = await ethers.getContractOrNull<WETH9>("WETH9");

  if (!bentoBox && !isBentoBoxChainId(chainId) && !process.env.BENTOBOX_ADDRESS) {
    throw Error(`No BENTOBOX on chain #${chainId}!`)
  }

  // if (!wnative && !(chainId in WNATIVE_ADDRESS)) {
  //   throw Error(`No WNATIVE on chain #${chainId}!`);
  // }

  const { address, newlyDeployed } = await deploy('MasterDeployer', {
    from: deployer,
    args: [
      barFee,
      barFeeTo,
      bentoBox
        ? bentoBox.address
        : isBentoBoxChainId(chainId)
        ? BENTOBOX_ADDRESS[chainId]
        : process.env.BENTOBOX_ADDRESS,
    ],
    deterministicDeployment: false,
    waitConfirmations: process.env.VERIFY_ON_DEPLOY === 'true' ? 20 : undefined,
  })

  if (newlyDeployed && process.env.VERIFY_ON_DEPLOY === 'true') {
    try {
      await run('verify:verify', {
        address,
        constructorArguments: [barFee, barFeeTo, bentoBox ? bentoBox.address : BENTOBOX_ADDRESS[chainId]],
      })
    } catch (error) {
      console.error(error)
    }
  }
}

export default deployFunction

deployFunction.dependencies = ['BentoBoxV1']

deployFunction.tags = ['MasterDeployer']
