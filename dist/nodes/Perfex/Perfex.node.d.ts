declare const IExecuteFunctions: any, INodeType: any, INodeTypeDescription: any, INodeExecutionData: any, IDataObject: any, NodeOperationError: any, NodeConnectionType: any;
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
        inputs: any[];
        outputs: any[];
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
    execute(this: typeof IExecuteFunctions): Promise<any[]>;
}
