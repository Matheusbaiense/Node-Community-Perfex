const { perfexNode } = require('./nodes/Perfex/Perfex.node');
const { PerfexApi } = require('./credentials/PerfexApi.credentials');

module.exports = {
	nodes: [perfexNode],
	credentials: [PerfexApi],
}; 