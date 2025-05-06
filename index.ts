const { perfexNode } = require('./nodes/Perfex/Perfex.node');
const { credentials: perfexApi } = require('./credentials/PerfexApi.credentials');

module.exports = {
    nodeTypes: [perfexNode],
    credentialTypes: [perfexApi],
}; 