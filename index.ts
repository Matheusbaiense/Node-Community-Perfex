import { perfexNode } from './nodes/Perfex/Perfex.node';
import { PerfexApi } from './credentials/PerfexApi.credentials';

module.exports = {
    nodeTypes: [perfexNode],
    credentialTypes: [new PerfexApi()],
}; 