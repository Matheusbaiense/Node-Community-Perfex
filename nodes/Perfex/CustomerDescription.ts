// /home/ubuntu/n8n-nodes-perfex/nodes/Perfex/CustomerDescription.ts

import { INodeProperties } from 'n8n-workflow';

export const customerOperations: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['customer'],
            },
        },
        options: [
            {
                name: 'Create',
                value: 'create',
                description: 'Create a new customer',
                action: 'Create a customer',
            },
            {
                name: 'Delete',
                value: 'delete',
                description: 'Delete a customer',
                action: 'Delete a customer',
            },
            {
                name: 'Get',
                value: 'get',
                description: 'Get a customer',
                action: 'Get a customer',
            },
            {
                name: 'Get Many',
                value: 'getAll',
                description: 'Get many customers',
                action: 'Get many customers',
            },
            {
                name: 'Update',
                value: 'update',
                description: 'Update a customer',
                action: 'Update a customer',
            },
        ],
        default: 'create',
    },
];

/**
 * Customer fields for Perfex CRM
 * @description Field definitions for customer operations in Perfex CRM
 */
export const customerFields: INodeProperties[] = [
    /* -------------------------------------------------------------------------- */
    /*                                customer:list                               */
    /* -------------------------------------------------------------------------- */
    // Perfex API for listing clients doesn't seem to have specific filters in basic docs
    // Add if specific filters are found

    /* -------------------------------------------------------------------------- */
    /*                                customer:get                                */
    /* -------------------------------------------------------------------------- */
    {
        displayName: 'Customer ID',
        name: 'customerId',
        type: 'string',
        displayOptions: {
            show: {
                resource: ['customer'],
                operation: ['get', 'update', 'delete'],
            },
        },
        default: '',
        required: true,
        description: 'The ID of the customer',
    },

    /* -------------------------------------------------------------------------- */
    /*                                customer:create                             */
    /* -------------------------------------------------------------------------- */
    {
        displayName: 'Company',
        name: 'company',
        type: 'string',
        displayOptions: {
            show: {
                resource: ['customer'],
                operation: ['create', 'update'],
            },
        },
        default: '',
        required: true,
        description: 'The company name',
    },
    {
        displayName: 'VAT',
        name: 'vat',
        type: 'string',
        displayOptions: {
            show: {
                resource: ['customer'],
                operation: ['create', 'update'],
            },
        },
        default: '',
        description: 'The VAT number',
    },
    {
        displayName: 'Phone',
        name: 'phonenumber',
        type: 'string',
        displayOptions: {
            show: {
                resource: ['customer'],
                operation: ['create', 'update'],
            },
        },
        default: '',
        description: 'The phone number',
    },
    {
        displayName: 'Country',
        name: 'country',
        type: 'string',
        displayOptions: {
            show: {
                resource: ['customer'],
                operation: ['create', 'update'],
            },
        },
        default: '',
    },
    {
        displayName: 'City',
        name: 'city',
        type: 'string',
        displayOptions: {
            show: {
                resource: ['customer'],
                operation: ['create', 'update'],
            },
        },
        default: '',
    },
    {
        displayName: 'Zip',
        name: 'zip',
        type: 'string',
        displayOptions: {
            show: {
                resource: ['customer'],
                operation: ['create', 'update'],
            },
        },
        default: '',
        description: 'The zip code',
    },
    {
        displayName: 'State',
        name: 'state',
        type: 'string',
        displayOptions: {
            show: {
                resource: ['customer'],
                operation: ['create', 'update'],
            },
        },
        default: '',
    },
    {
        displayName: 'Address',
        name: 'address',
        type: 'string',
        displayOptions: {
            show: {
                resource: ['customer'],
                operation: ['create', 'update'],
            },
        },
        default: '',
    },
    {
        displayName: 'Website',
        name: 'website',
        type: 'string',
        displayOptions: {
            show: {
                resource: ['customer'],
                operation: ['create', 'update'],
            },
        },
        default: '',
        description: 'The website URL',
    },
    {
        displayName: 'Description',
        name: 'description',
        type: 'string',
        displayOptions: {
            show: {
                resource: ['customer'],
                operation: ['create', 'update'],
            },
        },
        default: '',
    },
    {
        displayName: 'Assigned',
        name: 'assigned',
        type: 'string',
        displayOptions: {
            show: {
                resource: ['customer'],
                operation: ['create', 'update'],
            },
        },
        default: '',
        description: 'The ID of the staff member assigned to the customer',
    },
    {
        displayName: 'Tags',
        name: 'tags',
        type: 'string',
        displayOptions: {
            show: {
                resource: ['customer'],
                operation: ['create', 'update'],
            },
        },
        default: '',
        description: 'Comma-separated list of tags',
    },
    {
        displayName: 'Custom Field Name',
        name: 'customFieldName',
        type: 'string',
        displayOptions: {
            show: {
                resource: ['customer'],
                operation: ['create', 'update'],
            },
        },
        default: '',
        description: 'The name of the custom field',
    },
    {
        displayName: 'Custom Field Value',
        name: 'customFieldValue',
        type: 'string',
        displayOptions: {
            show: {
                resource: ['customer'],
                operation: ['create', 'update'],
            },
        },
        default: '',
        description: 'The value of the custom field',
    },
    {
        displayName: 'Company Filter',
        name: 'companyFilter',
        type: 'string',
        displayOptions: {
            show: {
                resource: ['customer'],
                operation: ['getAll'],
            },
        },
        default: '',
        description: 'Filter by company name',
    },
    {
        displayName: 'Email Filter',
        name: 'emailFilter',
        type: 'string',
        displayOptions: {
            show: {
                resource: ['customer'],
                operation: ['getAll'],
            },
        },
        default: '',
        description: 'Filter by email',
    },
    {
        displayName: 'Phone Filter',
        name: 'phoneFilter',
        type: 'string',
        displayOptions: {
            show: {
                resource: ['customer'],
                operation: ['getAll'],
            },
        },
        default: '',
        description: 'Filter by phone number',
    },
    // Add other optional fields based on Perfex API docs (e.g., billing/shipping address details)

    /* -------------------------------------------------------------------------- */
    /*                                customer:delete                             */
    /* -------------------------------------------------------------------------- */
    // Uses Customer ID (defined above)
];


