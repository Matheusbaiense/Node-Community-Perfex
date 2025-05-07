// /home/ubuntu/n8n-nodes-perfex/credentials/PerfexApi.credentials.ts
import type { ICredentialType, INodeProperties } from 'n8n-workflow';

/**
 * Credentials for Perfex CRM API
 * @description Credentials for authenticating with the Perfex CRM API
 */
class PerfexApi implements ICredentialType {
    name = 'perfexApi';
    displayName = 'Perfex API';
    documentationUrl = 'https://docs.perfexcrm.com/api/';
    properties: INodeProperties[] = [
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

module.exports = { PerfexApi };

