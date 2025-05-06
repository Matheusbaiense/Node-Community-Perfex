// /home/ubuntu/n8n-nodes-perfex/nodes/Perfex/Perfex.node.ts
const {
    IExecuteFunctions,
    INodeType,
    INodeTypeDescription,
    INodeExecutionData,
    IDataObject,
    NodeOperationError,
    NodeConnectionType,
} = require('n8n-workflow');

// Import descriptions for operations and fields
const { leadOperations, leadFields } = require('./LeadDescription');
const { customerOperations, customerFields } = require('./CustomerDescription');
const { contactOperations, contactFields } = require('./ContactDescription');

class Perfex {
    constructor() {
        this.description = {
            displayName: 'Perfex CRM',
            name: 'perfex',
            icon: 'file:perfex.svg',
            group: ['output'],
            version: 1,
            subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
            description: 'Interact with the Perfex CRM API',
            defaults: {
                name: 'Perfex CRM',
            },
            inputs: ['main'],
            outputs: ['main'],
            credentials: [
                {
                    name: 'perfexApi',
                    required: true,
                },
            ],
            requestDefaults: {
                baseURL: '={{$credentials.baseUrl.replace(/\/+$/, "") + "/api"}}',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    authtoken: '={{$credentials.apiToken}}',
                },
            },
            properties: [
                {
                    displayName: 'Resource',
                    name: 'resource',
                    type: 'options',
                    noDataExpression: true,
                    options: [
                        {
                            name: 'Lead',
                            value: 'lead',
                        },
                        {
                            name: 'Customer',
                            value: 'customer',
                        },
                        {
                            name: 'Contact',
                            value: 'contact',
                        },
                    ],
                    default: 'lead',
                    description: 'The resource to operate on',
                },
                ...leadOperations,
                ...leadFields,
                ...customerOperations,
                ...customerFields,
                ...contactOperations,
                ...contactFields,
            ],
        };
    }

    async execute(context) {
        const items = context.getInputData();
        const returnData = [];
        let responseData;

        const resource = context.getNodeParameter('resource', 0);
        const operation = context.getNodeParameter('operation', 0);

        for (let itemIndex = 0; itemIndex < items.length; itemIndex++) {
            try {
                let method = 'GET';
                let endpoint = '';
                const body = {};
                const qs = {};

                if (resource === 'lead') {
                    endpoint = '/leads';

                    if (operation === 'list') {
                        method = 'GET';
                        const filters = context.getNodeParameter('filters', itemIndex, {});
                        if (filters.status) qs.status = filters.status;
                        if (filters.source) qs.source = filters.source;
                    }
                    else if (operation === 'get') {
                        method = 'GET';
                        const leadId = context.getNodeParameter('leadId', itemIndex);
                        endpoint = `/leads/${leadId}`;
                    }
                    else if (operation === 'create') {
                        method = 'POST';
                        body.name = context.getNodeParameter('name', itemIndex);
                        body.source = context.getNodeParameter('source', itemIndex);
                        body.status = context.getNodeParameter('status', itemIndex);

                        const additionalFields = context.getNodeParameter('additionalFields', itemIndex, {});
                        Object.assign(body, additionalFields);
                    }
                    else if (operation === 'update') {
                        method = 'PUT';
                        const leadId = context.getNodeParameter('leadId', itemIndex);
                        endpoint = `/leads/${leadId}`;

                        const source = context.getNodeParameter('source', itemIndex, null);
                        const status = context.getNodeParameter('status', itemIndex, null);
                        if (source !== null) body.source = source;
                        if (status !== null) body.status = status;

                        const additionalFields = context.getNodeParameter('additionalFields', itemIndex, {});
                        Object.assign(body, additionalFields);
                    }
                    else if (operation === 'delete') {
                        method = 'DELETE';
                        const leadId = context.getNodeParameter('leadId', itemIndex);
                        endpoint = `/leads/${leadId}`;
                    }
                }
                else if (resource === 'customer') {
                    endpoint = '/clients';

                    if (operation === 'list') {
                        method = 'GET';
                    }
                    else if (operation === 'get') {
                        method = 'GET';
                        const customerId = context.getNodeParameter('customerId', itemIndex);
                        endpoint = `/clients/${customerId}`;
                    }
                    else if (operation === 'create') {
                        method = 'POST';
                        body.company = context.getNodeParameter('company', itemIndex);
                        const vat = context.getNodeParameter('vat', itemIndex, '');
                        const phonenumber = context.getNodeParameter('phonenumber', itemIndex, '');
                        const website = context.getNodeParameter('website', itemIndex, '');
                        const default_currency = context.getNodeParameter('default_currency', itemIndex, '');
                        const address = context.getNodeParameter('address', itemIndex, '');
                        const city = context.getNodeParameter('city', itemIndex, '');
                        const state = context.getNodeParameter('state', itemIndex, '');
                        const zip = context.getNodeParameter('zip', itemIndex, '');
                        const country = context.getNodeParameter('country', itemIndex, '');
                        const default_language = context.getNodeParameter('default_language', itemIndex, '');

                        if (vat) body.vat = vat;
                        if (phonenumber) body.phonenumber = phonenumber;
                        if (website) body.website = website;
                        if (default_currency) body.default_currency = default_currency;
                        if (address) body.address = address;
                        if (city) body.city = city;
                        if (state) body.state = state;
                        if (zip) body.zip = zip;
                        if (country) body.country = country;
                        if (default_language) body.default_language = default_language;
                    }
                    else if (operation === 'delete') {
                        method = 'DELETE';
                        const customerId = context.getNodeParameter('customerId', itemIndex);
                        endpoint = `/clients/${customerId}`;
                    }
                }
                else if (resource === 'contact') {
                    endpoint = '/contacts';

                    if (operation === 'list') {
                        method = 'GET';
                        const customerId = context.getNodeParameter('customerId', itemIndex);
                        endpoint = `/clients/${customerId}/contacts`;
                    }
                    else if (operation === 'get') {
                        method = 'GET';
                        const contactId = context.getNodeParameter('contactId', itemIndex);
                        endpoint = `/contacts/${contactId}`;
                    }
                    else if (operation === 'create') {
                        method = 'POST';
                        body.customer_id = context.getNodeParameter('customerId', itemIndex);
                        body.firstname = context.getNodeParameter('firstname', itemIndex);
                        body.lastname = context.getNodeParameter('lastname', itemIndex);
                        body.email = context.getNodeParameter('email', itemIndex);
                        body.password = context.getNodeParameter('password', itemIndex);

                        const additionalFields = context.getNodeParameter('additionalFields', itemIndex, {});
                        Object.assign(body, additionalFields);
                    }
                    else if (operation === 'update') {
                        method = 'PUT';
                        const contactId = context.getNodeParameter('contactId', itemIndex);
                        endpoint = `/contacts/${contactId}`;

                        const firstname = context.getNodeParameter('firstname', itemIndex, null);
                        const lastname = context.getNodeParameter('lastname', itemIndex, null);
                        const email = context.getNodeParameter('email', itemIndex, null);
                        const password = context.getNodeParameter('password', itemIndex, null);

                        if (firstname) body.firstname = firstname;
                        if (lastname) body.lastname = lastname;
                        if (email) body.email = email;
                        if (password) body.password = password;

                        const additionalFields = context.getNodeParameter('additionalFields', itemIndex, {});
                        Object.assign(body, additionalFields);
                    }
                    else if (operation === 'delete') {
                        method = 'DELETE';
                        const contactId = context.getNodeParameter('contactId', itemIndex);
                        endpoint = `/contacts/${contactId}`;
                    }
                }

                responseData = await context.helpers.httpRequest({
                    method,
                    url: endpoint,
                    body,
                    qs,
                });

                if (responseData.error || (responseData.success === false)) {
                    throw new NodeOperationError(context.getNode(), responseData.message || 'Perfex API Error', { itemIndex });
                }

                const executionData = context.helpers.constructExecutionMetaData(
                    context.helpers.returnJsonArray(responseData),
                    { itemData: { item: itemIndex } },
                );
                returnData.push(...executionData);
            }
            catch (error) {
                if (context.continueOnFail()) {
                    returnData.push({
                        json: {
                            error: error instanceof Error ? error.message : 'Unknown error occurred',
                        },
                        pairedItem: { item: itemIndex },
                    });
                    continue;
                }
                throw error;
            }
        }

        return [returnData];
    }
}

module.exports = { perfexNode: new Perfex() };
