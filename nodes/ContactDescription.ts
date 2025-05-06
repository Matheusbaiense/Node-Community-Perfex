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
                description: 'Get all contacts',
                action: 'Get all contacts',
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
        displayName: 'First Name',
        name: 'firstname',
        type: 'string',
        required: false,
        displayOptions: {
            show: {
                resource: ['contact'],
                operation: ['update'],
            },
        },
        default: null,
        description: 'The first name of the contact',
    },
    {
        displayName: 'Last Name',
        name: 'lastname',
        type: 'string',
        required: false,
        displayOptions: {
            show: {
                resource: ['contact'],
                operation: ['update'],
            },
        },
        default: null,
        description: 'The last name of the contact',
    },
    {
        displayName: 'Email',
        name: 'email',
        type: 'string',
        required: false,
        displayOptions: {
            show: {
                resource: ['contact'],
                operation: ['update'],
            },
        },
        default: null,
        description: 'The email of the contact',
    },
    {
        displayName: 'Password',
        name: 'password',
        type: 'string',
        required: false,
        displayOptions: {
            show: {
                resource: ['contact'],
                operation: ['update'],
            },
        },
        default: null,
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
                displayName: 'Phone',
                name: 'phonenumber',
                type: 'string',
                default: '',
                description: 'The phone number of the contact',
            },
            {
                displayName: 'Position',
                name: 'title',
                type: 'string',
                default: '',
                description: 'The position of the contact',
            },
            {
                displayName: 'Direction',
                name: 'direction',
                type: 'string',
                default: '',
                description: 'The direction of the contact',
            },
            {
                displayName: 'Profile Image',
                name: 'profile_image',
                type: 'string',
                default: '',
                description: 'The profile image URL of the contact',
            },
        ],
    },
];

module.exports = { contactOperations, contactFields };

