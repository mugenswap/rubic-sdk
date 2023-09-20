import { DEFAULT_BRIDGE_TYPE } from 'src/features/cross-chain/calculation-manager/providers/common/models/default-bridge-type';
import { LIFI_BRIDGE_TYPES } from 'src/features/cross-chain/calculation-manager/providers/lifi-provider/models/lifi-bridge-types';

// @TODO add type
export const UNIQ_LIFI_BRIDGE_TYPES = {
    ACROSS: DEFAULT_BRIDGE_TYPE.ACROSS,
    AMAROK: DEFAULT_BRIDGE_TYPE.AMAROK,
    ARBITRUM: DEFAULT_BRIDGE_TYPE.ARBITRUM_BRIDGE,
    AVALANCHE: DEFAULT_BRIDGE_TYPE.AVALANCHE_BRIDGE,
    CBRIDGE: LIFI_BRIDGE_TYPES.CBRIDGE,
    CONNEXT: DEFAULT_BRIDGE_TYPE.CONNEXT,
    CELERIM: DEFAULT_BRIDGE_TYPE.CELERIM,
    HOP: DEFAULT_BRIDGE_TYPE.HOP,
    HYPHEN: DEFAULT_BRIDGE_TYPE.HYPHEN,
    MULTICHAIN: DEFAULT_BRIDGE_TYPE.MULTICHAIN,
    STARGATE: DEFAULT_BRIDGE_TYPE.STARGATE,
    ALLBRIDGE: LIFI_BRIDGE_TYPES.ALLBRIDGE,
    POLYGON_BRIDGE: DEFAULT_BRIDGE_TYPE.POLYGON,
    OMNI_BRIDGE: LIFI_BRIDGE_TYPES.OMNI_BRIDGE,
    GNOSIS_BRIDGE: LIFI_BRIDGE_TYPES.GNOSIS_BRIDGE,
    CONNEXT_AMAROK: LIFI_BRIDGE_TYPES.CONNEXT_AMAROK,
    CIRCLE_CELER_BRIDGE: LIFI_BRIDGE_TYPES.CIRCLE_CELER_BRIDGE,
    LI_FUEL: LIFI_BRIDGE_TYPES.LI_FUEL,
    WORMHOLE: DEFAULT_BRIDGE_TYPE.WORMHOLE
} as const;
