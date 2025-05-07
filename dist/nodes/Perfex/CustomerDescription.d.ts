export declare const customerOperations: {
    displayName: string;
    name: string;
    type: string;
    noDataExpression: boolean;
    displayOptions: {
        show: {
            resource: string[];
        };
    };
    options: {
        name: string;
        value: string;
        description: string;
        action: string;
    }[];
    default: string;
}[];
/**
 * Customer fields for Perfex CRM
 * @description Field definitions for customer operations in Perfex CRM
 */
export declare const customerFields: ({
    displayName: string;
    name: string;
    type: string;
    displayOptions: {
        show: {
            resource: string[];
            operation: string[];
        };
    };
    default: string;
    required: boolean;
    description: string;
} | {
    displayName: string;
    name: string;
    type: string;
    displayOptions: {
        show: {
            resource: string[];
            operation: string[];
        };
    };
    default: string;
    description: string;
    required?: undefined;
} | {
    displayName: string;
    name: string;
    type: string;
    displayOptions: {
        show: {
            resource: string[];
            operation: string[];
        };
    };
    default: string;
    required?: undefined;
    description?: undefined;
})[];
