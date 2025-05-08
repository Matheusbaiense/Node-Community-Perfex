declare const IExecuteFunctions: any;
declare const INodeExecutionData: any, INodeType: any, INodeTypeDescription: any, NodePropertyTypes: any, IDataObject: any;
declare const leadOperations: any, leadFields: any;
declare const customerOperations: any, customerFields: any;
declare const contactOperations: any, contactFields: any;
declare class Perfex {
    description: {
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
        credentials: {
            name: string;
            required: boolean;
        }[];
        requestDefaults: {
            baseURL: string;
            headers: {
                Accept: string;
                'Content-Type': string;
            };
        };
        properties: any[];
    };
    execute(this: any): Promise<any[][]>;
}
