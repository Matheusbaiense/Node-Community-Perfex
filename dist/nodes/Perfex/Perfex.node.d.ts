declare const IExecuteFunctions: any, INodeExecutionData: any, IDataObject: any, IHttpRequestMethods: any, NodeOperationError: any;
declare const leadDesc: any;
declare const customerDesc: any;
declare const contactDesc: any;
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
        properties: any[];
    };
    execute(this: typeof IExecuteFunctions): Promise<Array<Array<typeof INodeExecutionData>>>;
}
