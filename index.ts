import { Perfex } from './nodes/Perfex/Perfex.node.js';
import { PerfexApi } from './credentials/PerfexApi.credentials.js';
import type { INodeType, ICredentialType } from 'n8n-workflow';

export const nodeTypes: INodeType[] = [
    new Perfex(),
];

export const credentialTypes: ICredentialType[] = [
    new PerfexApi(),
]; 