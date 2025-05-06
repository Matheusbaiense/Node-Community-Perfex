"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.credentialTypes = exports.nodeTypes = void 0;
const Perfex_node_js_1 = require("./nodes/Perfex/Perfex.node.js");
const PerfexApi_credentials_js_1 = require("./credentials/PerfexApi.credentials.js");
exports.nodeTypes = [
    new Perfex_node_js_1.Perfex(),
];
exports.credentialTypes = [
    new PerfexApi_credentials_js_1.PerfexApi(),
];
//# sourceMappingURL=index.js.map