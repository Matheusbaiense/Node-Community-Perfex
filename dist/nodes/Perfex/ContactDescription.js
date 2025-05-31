"use strict";
// /home/ubuntu/n8n-nodes-perfex/nodes/Perfex/ContactDescription.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactFields = exports.contactOperations = void 0;
/**
 * Contact operations for Perfex CRM
 * @description Available operations for managing contacts in Perfex CRM
 */
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
                description: 'Create a new contact',
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
                name: 'Get Many',
                value: 'getAll',
                description: 'Get many contacts',
                action: 'Get many contacts',
            },
            {
                name: 'Update',
                value: 'update',
                description: 'Update a contact',
                action: 'Update a contact',
            },
        ],
        default: 'create',
    },
];
/**
 * Contact fields for Perfex CRM
 * @description Field definitions for contact operations in Perfex CRM
 */
exports.contactFields = [
    {
        displayName: 'Contact ID',
        name: 'contactId',
        type: 'string',
        displayOptions: {
            show: {
                resource: ['contact'],
                operation: ['get', 'update', 'delete'],
            },
        },
        default: '',
        required: true,
        description: 'The ID of the contact',
    },
    {
        displayName: 'Customer ID',
        name: 'customerId',
        type: 'string',
        displayOptions: {
            show: {
                resource: ['contact'],
                operation: ['create', 'update'],
            },
        },
        default: '',
        required: true,
        description: 'The ID of the customer this contact belongs to',
    },
    {
        displayName: 'First Name',
        name: 'firstname',
        type: 'string',
        displayOptions: {
            show: {
                resource: ['contact'],
                operation: ['create', 'update'],
            },
        },
        default: '',
        required: true,
        description: 'The first name of the contact',
    },
    {
        displayName: 'Last Name',
        name: 'lastname',
        type: 'string',
        displayOptions: {
            show: {
                resource: ['contact'],
                operation: ['create', 'update'],
            },
        },
        default: '',
        required: true,
        description: 'The last name of the contact',
    },
    {
        displayName: 'Email',
        name: 'email',
        type: 'string',
        placeholder: 'name@email.com',
        displayOptions: {
            show: {
                resource: ['contact'],
                operation: ['create', 'update'],
            },
        },
        default: '',
        required: true,
        description: 'The email of the contact',
    },
    {
        displayName: 'Phone',
        name: 'phonenumber',
        type: 'string',
        displayOptions: {
            show: {
                resource: ['contact'],
                operation: ['create', 'update'],
            },
        },
        default: '',
        description: 'The phone number of the contact',
    },
    {
        displayName: 'Title',
        name: 'title',
        type: 'string',
        displayOptions: {
            show: {
                resource: ['contact'],
                operation: ['create', 'update'],
            },
        },
        default: '',
        description: 'The title of the contact',
    },
    {
        displayName: 'Direction',
        name: 'direction',
        type: 'string',
        displayOptions: {
            show: {
                resource: ['contact'],
                operation: ['create', 'update'],
            },
        },
        default: 'ltr',
        description: 'The text direction (ltr or rtl)',
    },
    {
        displayName: 'Password',
        name: 'password',
        type: 'string',
        typeOptions: {
            password: true,
        },
        displayOptions: {
            show: {
                resource: ['contact'],
                operation: ['create', 'update'],
            },
        },
        default: '',
        description: 'The password for the contact',
    },
    {
        displayName: 'Is Primary',
        name: 'is_primary',
        type: 'boolean',
        displayOptions: {
            show: {
                resource: ['contact'],
                operation: ['create', 'update'],
            },
        },
        default: false,
        description: 'Whether this is the primary contact',
    },
    {
        displayName: 'Active',
        name: 'active',
        type: 'boolean',
        displayOptions: {
            show: {
                resource: ['contact'],
                operation: ['create', 'update'],
            },
        },
        default: true,
        description: 'Whether the contact is active',
    },
];
//# sourceMappingURL=ContactDescription.js.map