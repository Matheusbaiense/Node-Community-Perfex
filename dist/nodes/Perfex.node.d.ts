import { IExecuteFunctions } from 'n8n-workflow';
import { INodeType, INodeTypeDescription, INodeExecutionData } from 'n8n-workflow';
declare class Perfex implements INodeType {
    description: INodeTypeDescription;
    execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]>;
}
declare const _default: {
    perfexNode: Perfex;
};
export = _default;
