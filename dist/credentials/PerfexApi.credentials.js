"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PerfexApi {
    constructor() {
        this.name = 'perfexApi';
        this.displayName = 'Perfex API';
        // documentationUrl = 'https://link-to-perfex-api-docs'; // TODO: Add Perfex API documentation link
        this.properties = [
            {
                displayName: 'Perfex Base URL',
                name: 'baseUrl',
                type: 'string',
                default: '',
                placeholder: 'https://your-perfex-domain.com',
                description: 'The base URL of your Perfex CRM installation (without /api)',
                required: true,
            },
            {
                displayName: 'API Token',
                name: 'apiToken',
                type: 'string',
                typeOptions: {
                    password: true,
                },
                default: '',
                description: 'Your Perfex CRM API Token (Generate under Setup > Settings > API)',
                required: true,
            },
        ];
    }
}
module.exports = { credentials: new PerfexApi() };
//# sourceMappingURL=PerfexApi.credentials.js.map