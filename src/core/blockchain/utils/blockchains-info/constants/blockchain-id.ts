import { BLOCKCHAIN_NAME, BlockchainName } from 'src/core/blockchain/models/blockchain-name';

const otherChains = Object.values(BLOCKCHAIN_NAME).reduce(
    (acc, blockchain) => ({ ...acc, [blockchain]: NaN }),
    {} as Record<BlockchainName, number>
);

export const blockchainId: Record<BlockchainName, number> = {
    ...otherChains,
    // EVN blockchains
    [BLOCKCHAIN_NAME.ETHEREUM]: 1,
    [BLOCKCHAIN_NAME.BINANCE_SMART_CHAIN]: 56,
    [BLOCKCHAIN_NAME.POLYGON]: 137,
    [BLOCKCHAIN_NAME.POLYGON_ZKEVM]: 1101,
    [BLOCKCHAIN_NAME.AVALANCHE]: 43114,
    [BLOCKCHAIN_NAME.MOONRIVER]: 1285,
    [BLOCKCHAIN_NAME.FANTOM]: 250,
    [BLOCKCHAIN_NAME.HARMONY]: 1666600000,
    [BLOCKCHAIN_NAME.ARBITRUM]: 42161,
    [BLOCKCHAIN_NAME.AURORA]: 1313161554,
    [BLOCKCHAIN_NAME.TELOS]: 40,
    [BLOCKCHAIN_NAME.OPTIMISM]: 10,
    [BLOCKCHAIN_NAME.CRONOS]: 25,
    [BLOCKCHAIN_NAME.OKE_X_CHAIN]: 66,
    [BLOCKCHAIN_NAME.GNOSIS]: 100,
    [BLOCKCHAIN_NAME.FUSE]: 122,
    [BLOCKCHAIN_NAME.MOONBEAM]: 1284,
    [BLOCKCHAIN_NAME.CELO]: 42220,
    [BLOCKCHAIN_NAME.BOBA]: 288,
    [BLOCKCHAIN_NAME.BOBA_BSC]: 56288,
    [BLOCKCHAIN_NAME.BOBA_AVALANCHE]: 43288,
    [BLOCKCHAIN_NAME.ASTAR_EVM]: 592,
    [BLOCKCHAIN_NAME.ETHEREUM_POW]: 10001,
    [BLOCKCHAIN_NAME.KAVA]: 2222,
    [BLOCKCHAIN_NAME.TRON]: 195,
    [BLOCKCHAIN_NAME.BITGERT]: 32520,
    [BLOCKCHAIN_NAME.OASIS]: 42262,
    [BLOCKCHAIN_NAME.METIS]: 1088,
    [BLOCKCHAIN_NAME.DFK]: 53935,
    [BLOCKCHAIN_NAME.KLAYTN]: 8217,
    [BLOCKCHAIN_NAME.VELAS]: 106,
    [BLOCKCHAIN_NAME.SYSCOIN]: 57,
    [BLOCKCHAIN_NAME.EOS]: 59,
    [BLOCKCHAIN_NAME.ETHEREUM_CLASSIC]: 61,
    [BLOCKCHAIN_NAME.FLARE]: 14,
    [BLOCKCHAIN_NAME.IOTEX]: 4689,
    [BLOCKCHAIN_NAME.ONTOLOGY]: 58,
    [BLOCKCHAIN_NAME.THETA]: 361,
    [BLOCKCHAIN_NAME.XDC]: 50,
    [BLOCKCHAIN_NAME.BITCOIN_CASH]: 10000,
    [BLOCKCHAIN_NAME.ZK_SYNC]: 324,
    [BLOCKCHAIN_NAME.PULSECHAIN]: 369,
    [BLOCKCHAIN_NAME.LINEA]: 59144,
    [BLOCKCHAIN_NAME.BASE]: 8453,
    [BLOCKCHAIN_NAME.MANTLE]: 5000,
    // Tesnents
    [BLOCKCHAIN_NAME.GOERLI]: 5,
    [BLOCKCHAIN_NAME.BINANCE_SMART_CHAIN_TESTNET]: 87,
    [BLOCKCHAIN_NAME.MUMBAI]: 80001,
    [BLOCKCHAIN_NAME.FUJI]: 43113,
    [BLOCKCHAIN_NAME.SCROLL_SEPOLIA]: 534351,
    // Non EVN blockchains
    [BLOCKCHAIN_NAME.BITCOIN]: 5555,
    [BLOCKCHAIN_NAME.FILECOIN]: 314
};
