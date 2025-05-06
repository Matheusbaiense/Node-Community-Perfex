"use strict";
// /home/ubuntu/n8n-nodes-perfex/nodes/Perfex/ContactDescription.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactFields = exports.contactOperations = void 0;
exports.contactOperations = [
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
                name: 'Create',
                value: 'create',
                description: 'Create a contact',
                action: 'Create a contact',
            },
            {
                name: 'Delete',
                value: 'delete',
                description: 'Delete a contact',
                action: 'Delete a contact',
            },
            {
                name: 'Get',
                value: 'get',
                description: 'Get a contact',
                action: 'Get a contact',
            },
            {
                name: 'List',
                value: 'list',
                description: 'List contacts',
                action: 'List contacts',
            },
            {
                name: 'Update',
                value: 'update',
                description: 'Update a contact',
                action: 'Update a contact',
            },
        ],
        default: 'list',
    },
];
exports.contactFields = [
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
        displayName: 'Customer ID',
        name: 'customerId',
        type: 'number',
        required: true,
        displayOptions: {
            show: {
                resource: ['contact'],
                operation: ['create', 'list'],
            },
        },
        default: '',
        description: 'The ID of the customer',
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
        description: 'The password of the contact',
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
                displayName: 'Phone Number',
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
                description: 'Whether the contact is primary',
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
//# sourceMappingURL=ContactDescription.js.map