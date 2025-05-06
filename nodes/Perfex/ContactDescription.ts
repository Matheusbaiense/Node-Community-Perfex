// /home/ubuntu/n8n-nodes-perfex/nodes/Perfex/ContactDescription.ts

import type { INodeProperties } from 'n8n-workflow';

/**
 * Contact operations for Perfex CRM
 * @description Available operations for managing contacts in Perfex CRM
 */
export const contactOperations: INodeProperties[] = [
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
                name: 'List',
                value: 'list',
                description: 'List all contacts',
                action: 'List all contacts',
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

/**
 * Contact fields for Perfex CRM
 * @description Field definitions for contact operations in Perfex CRM
 */
export const contactFields: INodeProperties[] = [
    {
        displayName: 'Contact ID',
        name: 'contactId',
        type: 'string',
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
        type: 'string',
        required: true,
        displayOptions: {
            show: {
                resource: ['contact'],
                operation: ['create'],
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
								placeholder: 'name@email.com',
        required: true,
        displayOptions: {
            show: {
                resource: ['contact'],
                operation: ['create'],
            },
        },
        default: '',
        description: 'The email address of the contact',
    },
    {
        displayName: 'Password',
        name: 'password',
        type: 'string',
								typeOptions: { password: true },
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
                displayName: 'Phone Number',
                name: 'phonenumber',
                type: 'string',
                default: '',
            },
            {
                displayName: 'Position',
                name: 'position',
                type: 'string',
                default: '',
                description: 'The position in the company',
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
    {
        displayName: 'Filters',
        name: 'filters',
        type: 'collection',
        placeholder: 'Add Filter',
        default: {},
        displayOptions: {
            show: {
                resource: ['contact'],
                operation: ['list'],
            },
        },
        options: [
            {
                displayName: 'Customer ID',
                name: 'customer_id',
                type: 'string',
                default: '',
                description: 'Filter by customer ID',
            },
            {
                displayName: 'Email',
                name: 'email',
                type: 'string',
																placeholder: 'name@email.com',
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
];

