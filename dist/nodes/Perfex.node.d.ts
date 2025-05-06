import { IExecuteFunctions } from 'n8n-workflow';
import { INodeType, INodeTypeDescription, INodeExecutionData } from 'n8n-workflow';
export declare class Perfex implements INodeType {
    description: INodeTypeDescription;
    execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]>;
}
