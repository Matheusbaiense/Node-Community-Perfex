"use strict";
// /home/ubuntu/n8n-nodes-perfex/nodes/Perfex/CustomerDescription.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerFields = exports.customerOperations = void 0;
exports.customerOperations = [
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
                name: 'List',
                value: 'list',
                description: 'List all customers',
                action: 'List all customers',
            },
            {
                name: 'Update',
                value: 'update',
                description: 'Update a customer',
                action: 'Update a customer',
            },
        ],
        default: 'list',
    },
];
exports.customerFields = [
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
        required: true,
        displayOptions: {
            show: {
                resource: ['customer'],
                operation: ['get', 'update', 'delete'],
            },
        },
        default: '',
        description: 'The ID of the customer',
    },
    /* -------------------------------------------------------------------------- */
    /*                                customer:create                             */
    /* -------------------------------------------------------------------------- */
    {
        displayName: 'Company',
        name: 'company',
        type: 'string',
        required: true,
        displayOptions: {
            show: {
                resource: ['customer'],
                operation: ['create'],
            },
        },
        default: '',
        description: 'The company name',
    },
    {
        displayName: 'Additional Fields',
        name: 'additionalFields',
        type: 'collection',
        placeholder: 'Add Field',
        default: {},
        displayOptions: {
            show: {
                resource: ['customer'],
                operation: ['create', 'update'],
            },
        },
        options: [
            {
                displayName: 'VAT',
                name: 'vat',
                type: 'string',
                default: '',
                description: 'The VAT number',
            },
            {
                displayName: 'Phone Number',
                name: 'phonenumber',
                type: 'string',
                default: '',
                description: 'The phone number',
            },
            {
                displayName: 'Website',
                name: 'website',
                type: 'string',
                default: '',
                description: 'The website URL',
            },
            {
                displayName: 'Default Currency',
                name: 'default_currency',
                type: 'string',
                default: '',
                description: 'The default currency',
            },
            {
                displayName: 'Address',
                name: 'address',
                type: 'string',
                default: '',
                description: 'The address',
            },
            {
                displayName: 'City',
                name: 'city',
                type: 'string',
                default: '',
                description: 'The city',
            },
            {
                displayName: 'State',
                name: 'state',
                type: 'string',
                default: '',
                description: 'The state',
            },
            {
                displayName: 'Zip',
                name: 'zip',
                type: 'string',
                default: '',
                description: 'The zip code',
            },
            {
                displayName: 'Country',
                name: 'country',
                type: 'string',
                default: '',
                description: 'The country',
            },
            {
                displayName: 'Default Language',
                name: 'default_language',
                type: 'string',
                default: '',
                description: 'The default language',
            },
            {
                displayName: 'Billing Street',
                name: 'billing_street',
                type: 'string',
                default: '',
                description: 'The billing street address',
            },
            {
                displayName: 'Billing City',
                name: 'billing_city',
                type: 'string',
                default: '',
                description: 'The billing city',
            },
            {
                displayName: 'Billing State',
                name: 'billing_state',
                type: 'string',
                default: '',
                description: 'The billing state',
            },
            {
                displayName: 'Billing Zip',
                name: 'billing_zip',
                type: 'string',
                default: '',
                description: 'The billing zip code',
            },
            {
                displayName: 'Billing Country',
                name: 'billing_country',
                type: 'string',
                default: '',
                description: 'The billing country',
            },
        ],
    },
    {
        displayName: 'Filters',
        name: 'filters',
        type: 'collection',
        placeholder: 'Add Filter',
        default: {},
        displayOptions: {
            show: {
                resource: ['customer'],
                operation: ['list'],
            },
        },
        options: [
            {
                displayName: 'Company',
                name: 'company',
                type: 'string',
                default: '',
                description: 'Filter by company name',
            },
            {
                displayName: 'Email',
                name: 'email',
                type: 'string',
                default: '',
                description: 'Filter by email',
            },
            {
                displayName: 'Phone',
                name: 'phonenumber',
                type: 'string',
                default: '',
                description: 'Filter by phone number',
            },
        ],
    },
    // Add other optional fields based on Perfex API docs (e.g., billing/shipping address details)
    /* -------------------------------------------------------------------------- */
    /*                                customer:delete                             */
    /* -------------------------------------------------------------------------- */
    // Uses Customer ID (defined above)
];
//# sourceMappingURL=CustomerDescription.js.map