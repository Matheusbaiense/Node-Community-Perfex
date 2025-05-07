// /home/ubuntu/n8n-nodes-perfex/nodes/Perfex/LeadDescription.ts

const leadOperations = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        displayOptions: {
            show: {
                resource: ['lead'],
            },
        },
        options: [
            {
                displayName: 'Create',
                name: 'create',
                type: 'string',
                description: 'Create a new lead',
            },
            {
                displayName: 'Delete',
                name: 'delete',
                type: 'string',
                description: 'Delete a lead',
            },
            {
                displayName: 'Get',
                name: 'get',
                type: 'string',
                description: 'Get a lead',
            },
            {
                displayName: 'Get All',
                name: 'getAll',
                type: 'string',
                description: 'Get all leads',
            },
            {
                displayName: 'Update',
                name: 'update',
                type: 'string',
                description: 'Update a lead',
            },
        ],
        default: 'create',
    },
];

/**
 * Lead fields for Perfex CRM
 * @description Field definitions for lead operations in Perfex CRM
 */
const leadFields = [
    {
        displayName: 'Lead ID',
        name: 'leadId',
        type: 'string',
        displayOptions: {
            show: {
                resource: ['lead'],
                operation: ['get', 'update', 'delete'],
            },
        },
        default: '',
        required: true,
        description: 'The ID of the lead',
    },
    {
        displayName: 'Name',
        name: 'name',
        type: 'string',
        displayOptions: {
            show: {
                resource: ['lead'],
                operation: ['create', 'update'],
            },
        },
        default: '',
        required: true,
        description: 'The name of the lead',
    },
    {
        displayName: 'Email',
        name: 'email',
        type: 'string',
        displayOptions: {
            show: {
                resource: ['lead'],
                operation: ['create', 'update'],
            },
        },
        default: '',
        required: true,
        description: 'The email of the lead',
    },
    {
        displayName: 'Company',
        name: 'company',
        type: 'string',
        displayOptions: {
            show: {
                resource: ['lead'],
                operation: ['create', 'update'],
            },
        },
        default: '',
        description: 'The company of the lead',
    },
    {
        displayName: 'Phone',
        name: 'phonenumber',
        type: 'string',
        displayOptions: {
            show: {
                resource: ['lead'],
                operation: ['create', 'update'],
            },
        },
        default: '',
        description: 'The phone number of the lead',
    },
    {
        displayName: 'Website',
        name: 'website',
        type: 'string',
        displayOptions: {
            show: {
                resource: ['lead'],
                operation: ['create', 'update'],
            },
        },
        default: '',
        description: 'The website of the lead',
    },
    {
        displayName: 'Address',
        name: 'address',
        type: 'string',
        displayOptions: {
            show: {
                resource: ['lead'],
                operation: ['create', 'update'],
            },
        },
        default: '',
        description: 'The address of the lead',
    },
    {
        displayName: 'City',
        name: 'city',
        type: 'string',
        displayOptions: {
            show: {
                resource: ['lead'],
                operation: ['create', 'update'],
            },
        },
        default: '',
        description: 'The city of the lead',
    },
    {
        displayName: 'State',
        name: 'state',
        type: 'string',
        displayOptions: {
            show: {
                resource: ['lead'],
                operation: ['create', 'update'],
            },
        },
        default: '',
        description: 'The state of the lead',
    },
    {
        displayName: 'Country',
        name: 'country',
        type: 'string',
        displayOptions: {
            show: {
                resource: ['lead'],
                operation: ['create', 'update'],
            },
        },
        default: '',
        description: 'The country of the lead',
    },
    {
        displayName: 'Zip',
        name: 'zip',
        type: 'string',
        displayOptions: {
            show: {
                resource: ['lead'],
                operation: ['create', 'update'],
            },
        },
        default: '',
        description: 'The zip code of the lead',
    },
    {
        displayName: 'Description',
        name: 'description',
        type: 'string',
        displayOptions: {
            show: {
                resource: ['lead'],
                operation: ['create', 'update'],
            },
        },
        default: '',
        description: 'The description of the lead',
    },
    {
        displayName: 'Status',
        name: 'status',
        type: 'string',
        displayOptions: {
            show: {
                resource: ['lead'],
                operation: ['create', 'update'],
            },
        },
        default: '',
        description: 'The status of the lead',
    },
    {
        displayName: 'Source',
        name: 'source',
        type: 'string',
        displayOptions: {
            show: {
                resource: ['lead'],
                operation: ['create', 'update'],
            },
        },
        default: '',
        description: 'The source of the lead',
    },
    {
        displayName: 'Assigned',
        name: 'assigned',
        type: 'string',
        displayOptions: {
            show: {
                resource: ['lead'],
                operation: ['create', 'update'],
            },
        },
        default: '',
        description: 'The assigned user ID of the lead',
    },
];

module.exports = {
    leadOperations,
    leadFields,
};

