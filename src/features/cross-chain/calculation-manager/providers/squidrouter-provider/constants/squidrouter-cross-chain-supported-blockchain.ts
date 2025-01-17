import { BLOCKCHAIN_NAME } from 'src/core/blockchain/models/blockchain-name';

export const squidrouterCrossChainSupportedBlockchains = [
    BLOCKCHAIN_NAME.ETHEREUM,
    BLOCKCHAIN_NAME.ARBITRUM,
    BLOCKCHAIN_NAME.OPTIMISM,
    BLOCKCHAIN_NAME.AVALANCHE,
    BLOCKCHAIN_NAME.POLYGON,
    BLOCKCHAIN_NAME.MOONBEAM,
    BLOCKCHAIN_NAME.BINANCE_SMART_CHAIN,
    BLOCKCHAIN_NAME.FANTOM,
    BLOCKCHAIN_NAME.CELO,
    BLOCKCHAIN_NAME.KAVA
] as const;

export type SquidrouterCrossChainSupportedBlockchain =
    (typeof squidrouterCrossChainSupportedBlockchains)[number];
