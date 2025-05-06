// /home/ubuntu/n8n-nodes-perfex/nodes/Perfex/CustomerDescription.ts

export const customerOperations = [
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
                description: 'Create a customer',
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
                description: 'List customers',
                action: 'List customers',
            },
        ],
        default: 'list',
    },
];

export const customerFields = [
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
        type: 'number',
        required: true,
        displayOptions: {
            show: {
                resource: ['customer'],
                operation: ['get', 'delete'],
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
        description: 'The company name of the customer',
    },
    {
        displayName: 'VAT Number',
        name: 'vat',
        type: 'string',
        required: true,
        displayOptions: {
            show: {
                resource: ['customer'],
                operation: ['create'],
            },
        },
        default: '',
        description: 'The VAT number of the customer',
    },
    {
        displayName: 'Phone Number',
        name: 'phonenumber',
        type: 'string',
        required: true,
        displayOptions: {
            show: {
                resource: ['customer'],
                operation: ['create'],
            },
        },
        default: '',
        description: 'The phone number of the customer',
    },
    {
        displayName: 'Website',
        name: 'website',
        type: 'string',
        required: true,
        displayOptions: {
            show: {
                resource: ['customer'],
                operation: ['create'],
            },
        },
        default: '',
        description: 'The website of the customer',
    },
    {
        displayName: 'Default Currency',
        name: 'default_currency',
        type: 'string',
        required: true,
        displayOptions: {
            show: {
                resource: ['customer'],
                operation: ['create'],
            },
        },
        default: '',
        description: 'The default currency of the customer',
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
                operation: ['create'],
            },
        },
        options: [
            {
                displayName: 'Address',
                name: 'address',
                type: 'string',
                default: '',
                description: 'The address of the customer',
            },
            {
                displayName: 'City',
                name: 'city',
                type: 'string',
                default: '',
                description: 'The city of the customer',
            },
            {
                displayName: 'State',
                name: 'state',
                type: 'string',
                default: '',
                description: 'The state of the customer',
            },
            {
                displayName: 'Zip',
                name: 'zip',
                type: 'string',
                default: '',
                description: 'The zip code of the customer',
            },
            {
                displayName: 'Country',
                name: 'country',
                type: 'string',
                default: '',
                description: 'The country of the customer',
            },
            {
                displayName: 'Default Language',
                name: 'default_language',
                type: 'string',
                default: '',
                description: 'The default language of the customer',
            },
            {
                displayName: 'Billing Street',
                name: 'billing_street',
                type: 'string',
                default: '',
                description: 'The billing street of the customer',
            },
            {
                displayName: 'Billing City',
                name: 'billing_city',
                type: 'string',
                default: '',
                description: 'The billing city of the customer',
            },
            {
                displayName: 'Billing State',
                name: 'billing_state',
                type: 'string',
                default: '',
                description: 'The billing state of the customer',
            },
            {
                displayName: 'Billing Zip',
                name: 'billing_zip',
                type: 'string',
                default: '',
                description: 'The billing zip code of the customer',
            },
            {
                displayName: 'Billing Country',
                name: 'billing_country',
                type: 'string',
                default: '',
                description: 'The billing country of the customer',
            },
        ],
    },
    // Add other optional fields based on Perfex API docs (e.g., billing/shipping address details)

    /* -------------------------------------------------------------------------- */
    /*                                customer:delete                             */
    /* -------------------------------------------------------------------------- */
    // Uses Customer ID (defined above)
];

