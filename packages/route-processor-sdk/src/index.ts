import { ChainId } from '@sushiswap/chain'

// v1
export const ROUTE_PROCESSOR_SUPPORTED_CHAIN_IDS = [
  ChainId.ARBITRUM,
  ChainId.ARBITRUM_NOVA,
  ChainId.AVALANCHE,
  ChainId.BOBA,
  ChainId.BOBA_AVAX,
  ChainId.BOBA_BNB,
  ChainId.BSC,
  ChainId.BTTC,
  ChainId.CELO,
  ChainId.ETHEREUM,
  ChainId.FANTOM,
  ChainId.FUSE,
  ChainId.GNOSIS,
  ChainId.HARMONY,
  ChainId.KAVA,
  ChainId.METIS,
  ChainId.MOONBEAM,
  ChainId.MOONRIVER,
  ChainId.OPTIMISM,
  ChainId.POLYGON,
] as const
export type RouteProcessorChainId = (typeof ROUTE_PROCESSOR_SUPPORTED_CHAIN_IDS)[number]
export const ROUTE_PROCESSOR_ADDRESS: Record<RouteProcessorChainId, `0x${string}`> = {
  [ChainId.ARBITRUM]: '0x9c6522117e2ed1fE5bdb72bb0eD5E3f2bdE7DBe0',
  [ChainId.ARBITRUM_NOVA]: '0xaB235da7f52d35fb4551AfBa11BFB56e18774A65',
  [ChainId.AVALANCHE]: '0x400d75dAb26bBc18D163AEA3e83D9Ea68F6c1804',
  [ChainId.BOBA]: '0x80C7DD17B01855a6D2347444a0FCC36136a314de',
  [ChainId.BOBA_AVAX]: '0x80C7DD17B01855a6D2347444a0FCC36136a314de',
  [ChainId.BOBA_BNB]: '0x80C7DD17B01855a6D2347444a0FCC36136a314de',
  [ChainId.BSC]: '0x7cf167390E2526Bc03F3CF6852A7AF1CEC3e243d',
  [ChainId.BTTC]: '0x2F255d3f3C0A3726c6c99E74566c4b18E36E3ce6',
  [ChainId.CELO]: '0xf78031CBCA409F2FB6876BDFDBc1b2df24cF9bEf',
  [ChainId.ETHEREUM]: '0x19dBa5df5383168f760617aaDD23322BC5F9Ff7b',
  [ChainId.FANTOM]: '0x3D2f8ae0344d38525d2AE96Ab750B83480c0844F',
  [ChainId.FUSE]: '0x1be211D8DA40BC0ae8719c6663307Bfc987b1d6c',
  [ChainId.GNOSIS]: '0x1e9B24073183d5c6B7aE5FB4b8f0b1dd83FDC77a',
  [ChainId.HARMONY]: '0x2F255d3f3C0A3726c6c99E74566c4b18E36E3ce6',
  [ChainId.KAVA]: '0xaa26771d497814E81D305c511Efbb3ceD90BF5bd',
  [ChainId.METIS]: '0x1e9B24073183d5c6B7aE5FB4b8f0b1dd83FDC77a',
  [ChainId.MOONBEAM]: '0x6c5A9e667297b409B5dD9850b38889ab84110c2A',
  [ChainId.MOONRIVER]: '0x9e4791ad13f14783C7B2A6A7bD8D6DDD1DC95847',
  [ChainId.OPTIMISM]: '0x96E04591579f298681361C6122Dc4Ef405c19385',
  [ChainId.POLYGON]: '0x0dc8E47a1196bcB590485eE8bF832c5c68A52f4B',
} as const
export const isRouteProcessorChainId = (chainId: ChainId): chainId is RouteProcessorChainId =>
  ROUTE_PROCESSOR_SUPPORTED_CHAIN_IDS.includes(chainId as RouteProcessorChainId)

// v2
export const ROUTE_PROCESSOR_2_SUPPORTED_CHAIN_IDS = [
  ChainId.ARBITRUM,
  ChainId.ARBITRUM_NOVA,
  ChainId.AVALANCHE,
  ChainId.BOBA,
  ChainId.BSC,
  ChainId.ETHEREUM,
  ChainId.FANTOM,
  ChainId.FUSE,
  ChainId.GNOSIS,
  ChainId.MOONBEAM,
  ChainId.MOONRIVER,
  ChainId.OPTIMISM,
  ChainId.POLYGON,
  ChainId.POLYGON_ZKEVM,
] as const
export type RouteProcessor2ChainId = (typeof ROUTE_PROCESSOR_2_SUPPORTED_CHAIN_IDS)[number]
export const ROUTE_PROCESSOR_2_ADDRESS: Record<RouteProcessor2ChainId, `0x${string}`> = {
  [ChainId.ARBITRUM]: '0xA7caC4207579A179c1069435d032ee0F9F150e5c',
  [ChainId.ARBITRUM_NOVA]: '0x1c5771e96C9d5524fb6e606f5B356d08C40Eb194',
  [ChainId.AVALANCHE]: '0xbACEB8eC6b9355Dfc0269C18bac9d6E2Bdc29C4F',
  [ChainId.BOBA]: '0x2f686751b19a9d91cc3d57d90150bc767f050066',
  [ChainId.BSC]: '0xD75F5369724b513b497101fb15211160c1d96550',
  [ChainId.ETHEREUM]: '0x044b75f554b886A065b9567891e45c79542d7357',
  [ChainId.FANTOM]: '0x3e603C14aF37EBdaD31709C4f848Fc6aD5BEc715',
  [ChainId.FUSE]: '0x2f686751b19a9d91cc3d57d90150Bc767f050066',
  [ChainId.GNOSIS]: '0x145d82bCa93cCa2AE057D1c6f26245d1b9522E6F',
  [ChainId.MOONBEAM]: '0x1838b053E0223F05FB768fa79aA07Df3f0f27480',
  [ChainId.MOONRIVER]: '0x3d2f8ae0344d38525d2ae96ab750b83480c0844f',
  [ChainId.OPTIMISM]: '0xF0cBce1942A68BEB3d1b73F0dd86C8DCc363eF49',
  [ChainId.POLYGON]: '0x5097CBB61D3C75907656DC4e3bbA892Ff136649a',
  [ChainId.POLYGON_ZKEVM]: '0x93395129bd3fcf49d95730D3C2737c17990fF328',
} as const
export const isRouteProcessor2ChainId = (chainId: ChainId): chainId is RouteProcessor2ChainId =>
  ROUTE_PROCESSOR_2_SUPPORTED_CHAIN_IDS.includes(chainId as RouteProcessor2ChainId)

// v3
export const ROUTE_PROCESSOR_3_SUPPORTED_CHAIN_IDS = [
  ChainId.ARBITRUM,
  ChainId.ARBITRUM_NOVA,
  ChainId.AVALANCHE,
  ChainId.BASE,
  ChainId.BOBA,
  ChainId.BOBA_AVAX,
  ChainId.BOBA_BNB,
  ChainId.BSC,
  ChainId.BTTC,
  ChainId.CELO,
  ChainId.CORE,
  ChainId.ETHEREUM,
  ChainId.FANTOM,
  ChainId.FUSE,
  ChainId.GNOSIS,
  ChainId.HAQQ,
  ChainId.HARMONY,
  ChainId.HECO,
  ChainId.KAVA,
  ChainId.METIS,
  ChainId.MOONBEAM,
  ChainId.MOONRIVER,
  ChainId.OKEX,
  ChainId.OPTIMISM,
  ChainId.PALM,
  ChainId.POLYGON,
  ChainId.POLYGON_ZKEVM,
  ChainId.TELOS,
  ChainId.THUNDERCORE,
  ChainId.LINEA,
] as const
export type RouteProcessor3ChainId = (typeof ROUTE_PROCESSOR_3_SUPPORTED_CHAIN_IDS)[number]
export const ROUTE_PROCESSOR_3_ADDRESS: Record<RouteProcessor3ChainId, `0x${string}`> = {
  [ChainId.ARBITRUM]: '0xfc506AaA1340b4dedFfd88bE278bEe058952D674',
  [ChainId.ARBITRUM_NOVA]: '0x05689fCfeE31FCe4a67FbC7Cab13E74F80A4E288',
  [ChainId.AVALANCHE]: '0x717b7948AA264DeCf4D780aa6914482e5F46Da3e',
  [ChainId.BASE]: '0x0BE808376Ecb75a5CF9bB6D237d16cd37893d904',
  [ChainId.BOBA]: '0xbe811a0d44e2553d25d11cb8dc0d3f0d0e6430e6',
  [ChainId.BOBA_AVAX]: '0xF4d73326C13a4Fc5FD7A064217e12780e9Bd62c3',
  [ChainId.BOBA_BNB]: '0xF4d73326C13a4Fc5FD7A064217e12780e9Bd62c3',
  [ChainId.BSC]: '0x400d75dAb26bBc18D163AEA3e83D9Ea68F6c1804',
  [ChainId.BTTC]: '0x7A4af156379f512DE147ed3b96393047226d923F',
  [ChainId.CELO]: '0x2f686751b19a9d91cc3d57d90150Bc767f050066',
  [ChainId.CORE]: '0x0BE808376Ecb75a5CF9bB6D237d16cd37893d904',
  [ChainId.ETHEREUM]: '0x827179dD56d07A7eeA32e3873493835da2866976',
  [ChainId.FANTOM]: '0x2214A42d8e2A1d20635c2cb0664422c528B6A432',
  [ChainId.FUSE]: '0xaa26771d497814E81D305c511Efbb3ceD90BF5bd',
  [ChainId.GNOSIS]: '0xBBDe1d67297329148Fe1ED5e6B00114842728e65',
  [ChainId.HAQQ]: '0x0BE808376Ecb75a5CF9bB6D237d16cd37893d904',
  [ChainId.HARMONY]: '0xBBDe1d67297329148Fe1ED5e6B00114842728e65',
  [ChainId.HECO]: '0x0769fd68dFb93167989C6f7254cd0D766Fb2841F',
  [ChainId.KAVA]: '0x145d82bCa93cCa2AE057D1c6f26245d1b9522E6F',
  [ChainId.METIS]: '0x258f7E97149afd7D7F84fa63b10e4A3f0C38B788',
  [ChainId.MOONBEAM]: '0x843D0AAD40295f2198ef528ad747CDF6AB9000e4',
  [ChainId.MOONRIVER]: '0x7af71799C40F952237eAA4D81A77C1af49125113',
  [ChainId.OKEX]: '0x0BE808376Ecb75a5CF9bB6D237d16cd37893d904',
  [ChainId.OPTIMISM]: '0x4C5D5234f232BD2D76B96aA33F5AE4FCF0E4BFAb',
  [ChainId.PALM]: '0xF4d73326C13a4Fc5FD7A064217e12780e9Bd62c3',
  [ChainId.POLYGON]: '0x0a6e511Fe663827b9cA7e2D2542b20B37fC217A6',
  [ChainId.POLYGON_ZKEVM]: '0x2f686751b19a9d91cc3d57d90150Bc767f050066',
  [ChainId.TELOS]: '0x80C7DD17B01855a6D2347444a0FCC36136a314de',
  [ChainId.THUNDERCORE]: '0x1b9d177CcdeA3c79B6c8F40761fc8Dc9d0500EAa',
  [ChainId.LINEA]: '0x0b17dF2CDEf8f0fCb7847e287726C6a8c1415A1f',
} as const
export const isRouteProcessor3ChainId = (chainId: ChainId): chainId is RouteProcessor3ChainId =>
  ROUTE_PROCESSOR_3_SUPPORTED_CHAIN_IDS.includes(chainId as RouteProcessor3ChainId)

// v3.1
export const ROUTE_PROCESSOR_3_1_SUPPORTED_CHAIN_IDS = [
  // ChainId.ARBITRUM,
  // ChainId.BASE,
  // ChainId.BSC,
  // ChainId.ETHEREUM,
  // ChainId.POLYGON,
] as const
export type RouteProcessor3_1ChainId = (typeof ROUTE_PROCESSOR_3_1_SUPPORTED_CHAIN_IDS)[number]
export const ROUTE_PROCESSOR_3_1_ADDRESS: Record<RouteProcessor3_1ChainId, `0x${string}`> = {
  [ChainId.ARBITRUM]: '0x3c1fBA3bCEE7CE410B155a8C71F9fF1312852C82',
  [ChainId.BASE]: '0x9B77032075806975B3bd3bcFc69E5DE36ee6D176',
  [ChainId.BSC]: '0xbACEB8eC6b9355Dfc0269C18bac9d6E2Bdc29C4F',
  [ChainId.ETHEREUM]: '0x8516944E89f296eb6473d79aED1Ba12088016c9e',
  [ChainId.POLYGON]: '0x9cfEAdcC38377283aDB944205c5238d04d4dD8A1',
} as const
export const isRouteProcessor3_1ChainId = (chainId: ChainId): chainId is RouteProcessor3_1ChainId =>
  ROUTE_PROCESSOR_3_1_SUPPORTED_CHAIN_IDS.includes(chainId as RouteProcessor3_1ChainId)

// v4
export const ROUTE_PROCESSOR_4_SUPPORTED_CHAIN_IDS = [] as const
export type RouteProcessor4ChainId = (typeof ROUTE_PROCESSOR_4_SUPPORTED_CHAIN_IDS)[number]
export const ROUTE_PROCESSOR_4_ADDRESS: Record<RouteProcessor4ChainId, `0x${string}`> = {} as const
export const isRouteProcessor4ChainId = (chainId: ChainId): chainId is RouteProcessor4ChainId =>
  ROUTE_PROCESSOR_4_SUPPORTED_CHAIN_IDS.includes(chainId as RouteProcessor4ChainId)
