// /home/ubuntu/n8n-nodes-perfex/nodes/Perfex/ContactDescription.ts
const contactOperations = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['contact'],
            },
        },
        options: [
            {
                name: 'List',
                value: 'list',
                description: 'List all contacts',
                action: 'List all contacts',
            },
            {
                name: 'Get',
                value: 'get',
                description: 'Get a contact by ID',
                action: 'Get a contact by ID',
            },
            {
                name: 'Create',
                value: 'create',
                description: 'Create a new contact',
                action: 'Create a new contact',
            },
            {
                name: 'Update',
                value: 'update',
                description: 'Update a contact',
                action: 'Update a contact',
            },
            {
                name: 'Delete',
                value: 'delete',
                description: 'Delete a contact',
                action: 'Delete a contact',
            },
        ],
        default: 'list',
    },
];

const contactFields = [
    {
        displayName: 'Customer ID',
        name: 'customerId',
        type: 'number',
        required: true,
        displayOptions: {
            show: {
                resource: ['contact'],
                operation: ['list', 'create'],
            },
        },
        default: '',
        description: 'The ID of the customer',
    },
    {
        displayName: 'Contact ID',
        name: 'contactId',
        type: 'number',
        required: true,
        displayOptions: {
            show: {
                resource: ['contact'],
                operation: ['get', 'update', 'delete'],
            },
        },
        default: '',
        description: 'The ID of the contact',
    },
    {
        displayName: 'First Name',
        name: 'firstname',
        type: 'string',
        required: true,
        displayOptions: {
            show: {
                resource: ['contact'],
                operation: ['create'],
            },
        },
        default: '',
        description: 'The first name of the contact',
    },
    {
        displayName: 'Last Name',
        name: 'lastname',
        type: 'string',
        required: true,
        displayOptions: {
            show: {
                resource: ['contact'],
                operation: ['create'],
            },
        },
        default: '',
        description: 'The last name of the contact',
    },
    {
        displayName: 'Email',
        name: 'email',
        type: 'string',
        required: true,
        displayOptions: {
            show: {
                resource: ['contact'],
                operation: ['create'],
            },
        },
        default: '',
        description: 'The email of the contact',
    },
    {
        displayName: 'Password',
        name: 'password',
        type: 'string',
        required: true,
        displayOptions: {
            show: {
                resource: ['contact'],
                operation: ['create'],
            },
        },
        default: '',
        description: 'The password for the contact',
    },
    {
        displayName: 'Additional Fields',
        name: 'additionalFields',
        type: 'collection',
        placeholder: 'Add Field',
        default: {},
        displayOptions: {
            show: {
                resource: ['contact'],
                operation: ['create', 'update'],
            },
        },
        options: [
            {
                displayName: 'Title',
                name: 'title',
                type: 'string',
                default: '',
                description: 'The title of the contact',
            },
            {
                displayName: 'Phone',
                name: 'phonenumber',
                type: 'string',
                default: '',
                description: 'The phone number of the contact',
            },
            {
                displayName: 'Position',
                name: 'position',
                type: 'string',
                default: '',
                description: 'The position of the contact',
            },
            {
                displayName: 'Is Primary',
                name: 'is_primary',
                type: 'boolean',
                default: false,
                description: 'Whether this is the primary contact',
            },
            {
                displayName: 'Active',
                name: 'active',
                type: 'boolean',
                default: true,
                description: 'Whether the contact is active',
            },
        ],
    },
];

module.exports = { contactOperations, contactFields };

