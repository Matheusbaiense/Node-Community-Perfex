import type { IExecuteFunctions, INodeType, INodeTypeDescription, INodeExecutionData } from 'n8n-workflow';
declare class Perfex implements INodeType {
    description: INodeTypeDescription;
    constructor();
    execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]>;
}
export { Perfex };
