export const CROSS_CHAIN_TRADE_TYPE = {
    SYMBIOSIS: 'symbiosis',
    LIFI: 'lifi',
    DEBRIDGE: 'dln',
    BRIDGERS: 'bridgers',
    MULTICHAIN: 'multichain',
    XY: 'xy',
    CELER_BRIDGE: 'celer_bridge',
    CHANGENOW: 'changenow',
    STARGATE: 'stargate',
    ARBITRUM: 'arbitrum',
    SQUIDROUTER: 'squidrouter'
} as const;

export type CrossChainTradeType =
    (typeof CROSS_CHAIN_TRADE_TYPE)[keyof typeof CROSS_CHAIN_TRADE_TYPE];
