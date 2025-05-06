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
        properties: ({
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
        } | {
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
            options: ({
                displayName: string;
                name: string;
                type: string;
                default: string;
                description: string;
            } | {
                displayName: string;
                name: string;
                type: string;
                default: boolean;
                description: string;
            })[];
            required?: undefined;
            description?: undefined;
        } | {
            displayName: string;
            name: string;
            type: string;
            noDataExpression: boolean;
            options: {
                name: string;
                value: string;
            }[];
            default: string;
            description: string;
        })[];
    };
    execute(this: any): Promise<any[][]>;
}
export declare const nodeClass: typeof Perfex;
export {};
