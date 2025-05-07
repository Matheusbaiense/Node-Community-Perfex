import type { INodeProperties } from 'n8n-workflow';

declare module 'n8n-nodes-perfex' {
    export const leadOperations: INodeProperties[];
    export const leadFields: INodeProperties[];
    export const customerOperations: INodeProperties[];
    export const customerFields: INodeProperties[];
    export const contactOperations: INodeProperties[];
    export const contactFields: INodeProperties[];
} 