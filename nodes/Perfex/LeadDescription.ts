// /home/ubuntu/n8n-nodes-perfex/nodes/Perfex/LeadDescription.ts

import { INodeProperties, NodePropertyTypes } from 'n8n-workflow';

const leadOperations: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options' as NodePropertyTypes,
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
                name: 'Get Many',
                value: 'getAll',
                description: 'Get all leads',
                action: 'Get all leads',
            },
            {
                name: 'Update',
                value: 'update',
                description: 'Update a lead',
                action: 'Update a lead',
            },
        ],
        default: 'create',
    },
];

/**
 * Lead fields for Perfex CRM
 * @description Field definitions for lead operations in Perfex CRM
 */
const leadFields: INodeProperties[] = [
    {
        displayName: 'Lead ID',
        name: 'leadId',
        type: 'string' as NodePropertyTypes,
        displayOptions: {
            show: {
                resource: ['lead'],
                operation: ['delete', 'get', 'update'],
            },
        },
        default: '',
        required: true,
        description: 'The ID of the lead',
    },
    {
        displayName: 'Company',
        name: 'company',
        type: 'string' as NodePropertyTypes,
        displayOptions: {
            show: {
                resource: ['lead'],
                operation: ['create'],
            },
        },
        default: '',
        required: true,
        description: 'The company name',
    },
    {
        displayName: 'Name',
        name: 'name',
        type: 'string' as NodePropertyTypes,
        displayOptions: {
            show: {
                resource: ['lead'],
                operation: ['create'],
            },
        },
        default: '',
        required: true,
        description: 'The name of the lead',
    },
    {
        displayName: 'Email',
        name: 'email',
        type: 'string' as NodePropertyTypes,
        displayOptions: {
            show: {
                resource: ['lead'],
                operation: ['create'],
            },
        },
        default: '',
        required: true,
        description: 'The email of the lead',
    },
    {
        displayName: 'Additional Fields',
        name: 'additionalFields',
        type: 'collection' as NodePropertyTypes,
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
                displayName: 'Phone',
                name: 'phone',
                type: 'string' as NodePropertyTypes,
                default: '',
                description: 'The phone number of the lead',
            },
            {
                displayName: 'Position',
                name: 'position',
                type: 'string' as NodePropertyTypes,
                default: '',
                description: 'The position of the lead',
            },
            {
                displayName: 'Website',
                name: 'website',
                type: 'string' as NodePropertyTypes,
                default: '',
                description: 'The website of the lead',
            },
        ],
    },
    {
        displayName: 'Return All',
        name: 'returnAll',
        type: 'boolean' as NodePropertyTypes,
        displayOptions: {
            show: {
                resource: ['lead'],
                operation: ['getAll'],
            },
        },
        default: false,
        description: 'Whether to return all results or only up to a given limit',
    },
    {
        displayName: 'Limit',
        name: 'limit',
        type: 'number' as NodePropertyTypes,
        displayOptions: {
            show: {
                resource: ['lead'],
                operation: ['getAll'],
                returnAll: [false],
            },
        },
        typeOptions: {
            minValue: 1,
            maxValue: 100,
        },
        default: 50,
        description: 'Max number of results to return',
    },
];

module.exports = { leadOperations, leadFields };


