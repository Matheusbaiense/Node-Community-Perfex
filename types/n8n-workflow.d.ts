declare module 'n8n-workflow' {
    export interface IExecuteFunctions {
        getInputData(): INodeExecutionData[];
        getNodeParameter(parameterName: string, itemIndex: number): any;
        helpers: {
            request(options: any): Promise<any>;
            requestAll(options: any): Promise<any[]>;
        };
        continueOnFail(): boolean;
    }

    export interface INodeExecutionData {
        json: any;
    }

    export interface INodeType {
        description: INodeTypeDescription;
        execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]>;
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
        requestDefaults: {
            baseURL: string;
            headers: {
                [key: string]: string;
            };
        };
        properties: INodeProperties[];
    }

    export interface INodeProperties {
        displayName: string;
        name: string;
        type: string;
        required?: boolean;
        default?: any;
        description?: string;
        displayOptions?: {
            show: {
                [key: string]: any[];
            };
        };
        options?: INodeProperties[];
        typeOptions?: {
            [key: string]: any;
        };
    }

    export interface ICredentialType {
        name: string;
        displayName: string;
        documentationUrl: string;
        properties: INodeProperties[];
    }

    export type JsonObject = {
        [key: string]: any;
    };
} 