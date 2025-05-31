// Importar os módulos sem desestruturação para evitar conflitos de declaração
const PerfexModule = require('./nodes/Perfex/Perfex.node');
const PerfexApiModule = require('./credentials/PerfexApi.credentials');
module.exports = {
    nodes: [
        {
            type: PerfexModule.Perfex,
            sourcePath: './nodes/Perfex/Perfex.node.js',
        },
    ],
    credentials: [
        {
            type: PerfexApiModule.PerfexApi,
            sourcePath: './credentials/PerfexApi.credentials.js',
        },
    ],
};
//# sourceMappingURL=index.js.map