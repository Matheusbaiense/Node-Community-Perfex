"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.leadFields = exports.leadOperations = void 0;
// Define os campos para as operações de Lead
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
                description: 'Get a lead by ID',
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
// Define os campos específicos para cada operação de Lead
exports.leadFields = [
    /* -------------------------------------------------------------------------- */
    /*                                lead:list                                   */
    /* -------------------------------------------------------------------------- */
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
                displayName: 'Status ID',
                name: 'status',
                type: 'number',
                default: '',
                description: 'Filter leads by status ID',
            },
            {
                displayName: 'Source ID',
                name: 'source',
                type: 'number',
                default: '',
                description: 'Filter leads by source ID',
            },
        ],
    },
    /* -------------------------------------------------------------------------- */
    /*                                lead:get                                    */
    /* -------------------------------------------------------------------------- */
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
    /* -------------------------------------------------------------------------- */
    /*                                lead:create                                 */
    /* -------------------------------------------------------------------------- */
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
        description: 'Name of the lead',
    },
    {
        displayName: 'Source ID',
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
        description: 'ID of the lead source (get from Perfex)',
    },
    {
        displayName: 'Status ID',
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
        description: 'ID of the lead status (get from Perfex)',
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
            // Common optional fields for create/update
            {
                displayName: 'Title',
                name: 'title',
                type: 'string',
                default: '',
            },
            {
                displayName: 'Company',
                name: 'company',
                type: 'string',
                default: '',
            },
            {
                displayName: 'Description',
                name: 'description',
                type: 'string',
                typeOptions: { multiline: true },
                default: '',
            },
            {
                displayName: 'Country ID',
                name: 'country',
                type: 'number',
                default: '',
                description: 'Numeric ID of the country (get from Perfex)',
            },
            {
                displayName: 'Zip Code',
                name: 'zip',
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
                displayName: 'Address',
                name: 'address',
                type: 'string',
                default: '',
            },
            {
                displayName: 'Assigned Staff ID',
                name: 'assigned',
                type: 'number',
                default: '',
                description: 'ID of the staff member assigned to the lead',
            },
            {
                displayName: 'Email',
                name: 'email',
                type: 'string',
                default: '',
                description: 'Lead email address',
            },
            {
                displayName: 'Website',
                name: 'website',
                type: 'string',
                default: '',
            },
            {
                displayName: 'Phone Number',
                name: 'phonenumber',
                type: 'string',
                default: '',
            },
            {
                displayName: 'Default Language',
                name: 'default_language',
                type: 'string',
                default: '',
                description: 'e.g., portuguese, english',
            },
            {
                displayName: 'Tags',
                name: 'tags',
                type: 'string',
                default: '',
                description: 'Comma-separated list of tags',
            },
            {
                displayName: 'Is Public',
                name: 'is_public',
                type: 'boolean',
                default: false,
            },
            // Add other optional fields as needed based on Perfex API docs
        ],
    },
    /* -------------------------------------------------------------------------- */
    /*                                lead:update                                 */
    /* -------------------------------------------------------------------------- */
    // Uses Lead ID (defined above)
    // Uses Additional Fields (defined above)
    {
        displayName: 'Source ID',
        name: 'source',
        type: 'number',
        displayOptions: {
            show: {
                resource: ['lead'],
                operation: ['update'],
            },
        },
        default: '',
        description: 'Update the lead source ID',
    },
    {
        displayName: 'Status ID',
        name: 'status',
        type: 'number',
        displayOptions: {
            show: {
                resource: ['lead'],
                operation: ['update'],
            },
        },
        default: '',
        description: 'Update the lead status ID',
    },
    /* -------------------------------------------------------------------------- */
    /*                                lead:delete                                 */
    /* -------------------------------------------------------------------------- */
    // Uses Lead ID (defined above)
];
