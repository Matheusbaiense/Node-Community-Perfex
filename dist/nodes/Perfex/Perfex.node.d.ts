import { IExecuteFunctions } from 'n8n-core';
import { INodeExecutionData, INodeType, INodeTypeDescription } from 'n8n-workflow';
export declare class Perfex implements INodeType {
    description: INodeTypeDescription;
    constructor();
    execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]>;
}
