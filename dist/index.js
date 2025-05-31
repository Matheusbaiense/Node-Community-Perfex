"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PerfexApi = exports.Perfex = void 0;
// Importar os módulos sem desestruturação para evitar conflitos de declaração
const Perfex_node_1 = require("./nodes/Perfex/Perfex.node");
Object.defineProperty(exports, "Perfex", { enumerable: true, get: function () { return Perfex_node_1.Perfex; } });
const PerfexApi_credentials_1 = require("./credentials/PerfexApi.credentials");
Object.defineProperty(exports, "PerfexApi", { enumerable: true, get: function () { return PerfexApi_credentials_1.PerfexApi; } });
// Adicionar exportação padrão para compatibilidade com CommonJS
exports.default = {
    Perfex: Perfex_node_1.Perfex,
    PerfexApi: PerfexApi_credentials_1.PerfexApi
};
//# sourceMappingURL=index.js.map