declare const customerOperations: {
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
declare const customerFields: ({
    displayName: string;
    name: string;
    type: string;
    required: boolean;
    displayOptions: {
        show: {
            resource: string[];
            operation: string[];
        };
    };
    default: string;
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
})[];
