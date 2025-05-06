import type { ICredentialType, INodeProperties } from 'n8n-workflow';
/**
 * Credentials for Perfex CRM API
 * @description Credentials for authenticating with the Perfex CRM API
 */
export declare class PerfexApi implements ICredentialType {
    name: string;
    displayName: string;
    documentationUrl: string;
    properties: INodeProperties[];
}
