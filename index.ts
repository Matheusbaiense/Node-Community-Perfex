const { perfexNode } = require('./nodes/Perfex/Perfex.node.js');
const { credentials: perfexApi } = require('./credentials/PerfexApi.credentials.js');

module.exports = {
    nodeTypes: [perfexNode],
    credentialTypes: [perfexApi],
}; 