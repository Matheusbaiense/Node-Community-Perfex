declare module 'n8n-workflow' {
    export interface IExecuteFunctions {
        getInputData(): any[];
        getNodeParameter(parameterName: string, itemIndex: number, fallbackValue?: any): any;
        continueOnFail(): boolean;
        getNode(): any;
        helpers: {
            httpRequest(options: any): Promise<any>;
            constructExecutionMetaData(items: any[], options: any): any[];
            returnJsonArray(items: any): any[];
        };
    }

    export interface INodeType {
        description: INodeTypeDescription;
        execute(this: IExecuteFunctions): Promise<any[][]>;
    }

    export interface INodeTypeDescription {
        displayName: string;
        name: string;
        icon: string;
        group: string[];
        version: number;
        subtitle: string;
        description: string;
        defaults: {
            name: string;
        };
        inputs: string[];
        outputs: string[];
        credentials: Array<{
            name: string;
            required: boolean;
        }>;
        properties: any[];
    }

    export interface INodeExecutionData {
        json: any;
        pairedItem?: {
            item: number;
        };
    }

    export interface IDataObject {
        [key: string]: any;
    }

    export class NodeOperationError extends Error {
        constructor(node: any, message: string, options?: { itemIndex?: number });
    }
} 