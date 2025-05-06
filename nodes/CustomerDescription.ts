// /home/ubuntu/n8n-nodes-perfex/nodes/Perfex/CustomerDescription.ts

const customerOperations = [
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
                name: 'List',
                value: 'list',
                description: 'Get all customers',
                action: 'Get all customers',
            },
            {
                name: 'Get',
                value: 'get',
                description: 'Get a customer by ID',
                action: 'Get a customer by ID',
            },
            {
                name: 'Create',
                value: 'create',
                description: 'Create a new customer',
                action: 'Create a new customer',
            },
            {
                name: 'Delete',
                value: 'delete',
                description: 'Delete a customer',
                action: 'Delete a customer',
            },
        ],
        default: 'list',
    },
];

const customerFields = [
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
        description: 'The company name',
    },
    {
        displayName: 'VAT',
        name: 'vat',
        type: 'string',
        required: false,
        displayOptions: {
            show: {
                resource: ['customer'],
                operation: ['create'],
            },
        },
        default: '',
        description: 'The VAT number',
    },
    {
        displayName: 'Phone Number',
        name: 'phonenumber',
        type: 'string',
        required: false,
        displayOptions: {
            show: {
                resource: ['customer'],
                operation: ['create'],
            },
        },
        default: '',
        description: 'The phone number',
    },
    {
        displayName: 'Website',
        name: 'website',
        type: 'string',
        required: false,
        displayOptions: {
            show: {
                resource: ['customer'],
                operation: ['create'],
            },
        },
        default: '',
        description: 'The website URL',
    },
    {
        displayName: 'Default Currency',
        name: 'default_currency',
        type: 'number',
        required: false,
        displayOptions: {
            show: {
                resource: ['customer'],
                operation: ['create'],
            },
        },
        default: '',
        description: 'The default currency ID',
    },
    {
        displayName: 'Address',
        name: 'address',
        type: 'string',
        required: false,
        displayOptions: {
            show: {
                resource: ['customer'],
                operation: ['create'],
            },
        },
        default: '',
        description: 'The address',
    },
    {
        displayName: 'City',
        name: 'city',
        type: 'string',
        required: false,
        displayOptions: {
            show: {
                resource: ['customer'],
                operation: ['create'],
            },
        },
        default: '',
        description: 'The city',
    },
    {
        displayName: 'State',
        name: 'state',
        type: 'string',
        required: false,
        displayOptions: {
            show: {
                resource: ['customer'],
                operation: ['create'],
            },
        },
        default: '',
        description: 'The state',
    },
    {
        displayName: 'Zip',
        name: 'zip',
        type: 'string',
        required: false,
        displayOptions: {
            show: {
                resource: ['customer'],
                operation: ['create'],
            },
        },
        default: '',
        description: 'The zip code',
    },
    {
        displayName: 'Country',
        name: 'country',
        type: 'number',
        required: false,
        displayOptions: {
            show: {
                resource: ['customer'],
                operation: ['create'],
            },
        },
        default: '',
        description: 'The country ID',
    },
    {
        displayName: 'Default Language',
        name: 'default_language',
        type: 'string',
        required: false,
        displayOptions: {
            show: {
                resource: ['customer'],
                operation: ['create'],
            },
        },
        default: '',
        description: 'The default language',
    },
    // Add other optional fields based on Perfex API docs (e.g., billing/shipping address details)

    /* -------------------------------------------------------------------------- */
    /*                                customer:delete                             */
    /* -------------------------------------------------------------------------- */
    // Uses Customer ID (defined above)
];

module.exports = { customerOperations, customerFields };

