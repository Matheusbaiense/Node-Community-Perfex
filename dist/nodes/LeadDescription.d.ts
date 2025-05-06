declare const leadOperations: {
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
declare const leadFields: ({
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
    placeholder?: undefined;
    options?: undefined;
} | {
    displayName: string;
    name: string;
    type: string;
    placeholder: string;
    default: {};
    displayOptions: {
        show: {
            resource: string[];
            operation: string[];
        };
    };
    options: {
        displayName: string;
        name: string;
        type: string;
        default: string;
        description: string;
    }[];
    required?: undefined;
    description?: undefined;
})[];
