// /home/ubuntu/n8n-nodes-perfex/nodes/Perfex/LeadDescription.ts

import type { INodeProperties } from 'n8n-workflow';

/**
 * Lead operations for Perfex CRM
 * @description Available operations for managing leads in Perfex CRM
 */
export const leadOperations: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['lead'],
            },
        },
        options: [
            {
                name: 'Create',
                value: 'create',
                description: 'Create a new lead',
                action: 'Create a lead',
            },
            {
                name: 'Delete',
                value: 'delete',
                description: 'Delete a lead',
                action: 'Delete a lead',
            },
            {
                name: 'Get',
                value: 'get',
                description: 'Get a lead',
                action: 'Get a lead',
            },
            {
                name: 'List',
                value: 'list',
                description: 'List all leads',
                action: 'List all leads',
            },
            {
                name: 'Update',
                value: 'update',
                description: 'Update a lead',
                action: 'Update a lead',
            },
        ],
        default: 'list',
    },
];

/**
 * Lead fields for Perfex CRM
 * @description Field definitions for lead operations in Perfex CRM
 */
export const leadFields: INodeProperties[] = [
    {
        displayName: 'Lead ID',
        name: 'leadId',
        type: 'string',
        required: true,
        displayOptions: {
            show: {
                resource: ['lead'],
                operation: ['get', 'update', 'delete'],
            },
        },
        default: '',
        description: 'The ID of the lead',
    },
    {
        displayName: 'Name',
        name: 'name',
        type: 'string',
        required: true,
        displayOptions: {
            show: {
                resource: ['lead'],
                operation: ['create'],
            },
        },
        default: '',
        description: 'The name of the lead',
    },
    {
        displayName: 'Source',
        name: 'source',
        type: 'number',
        required: true,
        displayOptions: {
            show: {
                resource: ['lead'],
                operation: ['create'],
            },
        },
        default: 0,
        description: 'The source of the lead',
    },
    {
        displayName: 'Status',
        name: 'status',
        type: 'number',
        required: true,
        displayOptions: {
            show: {
                resource: ['lead'],
                operation: ['create'],
            },
        },
        default: 0,
        description: 'The status of the lead',
    },
    {
        displayName: 'Additional Fields',
        name: 'additionalFields',
        type: 'collection',
        placeholder: 'Add Field',
        default: {},
        displayOptions: {
            show: {
                resource: ['lead'],
                operation: ['create', 'update'],
            },
        },
        options: [
            {
                displayName: 'Company',
                name: 'company',
                type: 'string',
                default: '',
                description: 'The company name',
            },
            {
                displayName: 'Email',
                name: 'email',
                type: 'string',
																placeholder: 'name@email.com',
                default: '',
                description: 'The email address',
            },
            {
                displayName: 'Phone',
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
                displayName: 'Address',
                name: 'address',
                type: 'string',
                default: '',
            },
            {
                displayName: 'City',
                name: 'city',
                type: 'string',
                default: '',
            },
            {
                displayName: 'State',
                name: 'state',
                type: 'string',
                default: '',
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
            },
            {
                displayName: 'Description',
                name: 'description',
                type: 'string',
                default: '',
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
                resource: ['lead'],
                operation: ['list'],
            },
        },
        options: [
            {
                displayName: 'Status',
                name: 'status',
                type: 'number',
                default: '',
                description: 'Filter by status',
            },
            {
                displayName: 'Source',
                name: 'source',
                type: 'number',
                default: '',
                description: 'Filter by source',
            },
        ],
    },
];

