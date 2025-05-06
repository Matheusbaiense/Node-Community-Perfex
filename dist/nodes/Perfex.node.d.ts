declare const IExecuteFunctions: any, INodeType: any, INodeTypeDescription: any, INodeExecutionData: any, IDataObject: any, NodeOperationError: any, NodeConnectionType: any;
declare const leadOperations: any, leadFields: any;
declare const customerOperations: any, customerFields: any;
declare const contactOperations: any, contactFields: any;
declare class Perfex {
    constructor();
    execute(context: any): Promise<never[][]>;
}
