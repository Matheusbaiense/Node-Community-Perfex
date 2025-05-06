"use strict";
// /home/ubuntu/n8n-nodes-perfex/nodes/Perfex/LeadDescription.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.leadFields = exports.leadOperations = void 0;
exports.leadOperations = [
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
                description: 'Create a lead',
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
                description: 'List leads',
                action: 'List leads',
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
exports.leadFields = [
    {
        displayName: 'Lead ID',
        name: 'leadId',
        type: 'number',
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
        default: '',
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
        default: '',
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
                description: 'The company of the lead',
            },
            {
                displayName: 'Email',
                name: 'email',
                type: 'string',
                default: '',
                description: 'The email of the lead',
            },
            {
                displayName: 'Phone',
                name: 'phonenumber',
                type: 'string',
                default: '',
                description: 'The phone number of the lead',
            },
            {
                displayName: 'Website',
                name: 'website',
                type: 'string',
                default: '',
                description: 'The website of the lead',
            },
            {
                displayName: 'Address',
                name: 'address',
                type: 'string',
                default: '',
                description: 'The address of the lead',
            },
            {
                displayName: 'City',
                name: 'city',
                type: 'string',
                default: '',
                description: 'The city of the lead',
            },
            {
                displayName: 'State',
                name: 'state',
                type: 'string',
                default: '',
                description: 'The state of the lead',
            },
            {
                displayName: 'Zip',
                name: 'zip',
                type: 'string',
                default: '',
                description: 'The zip code of the lead',
            },
            {
                displayName: 'Country',
                name: 'country',
                type: 'string',
                default: '',
                description: 'The country of the lead',
            },
            {
                displayName: 'Description',
                name: 'description',
                type: 'string',
                default: '',
                description: 'The description of the lead',
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
                description: 'Filter leads by status',
            },
            {
                displayName: 'Source',
                name: 'source',
                type: 'number',
                default: '',
                description: 'Filter leads by source',
            },
        ],
    },
];
//# sourceMappingURL=LeadDescription.js.map