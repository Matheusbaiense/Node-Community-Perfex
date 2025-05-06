"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const n8n_workflow_1 = require("n8n-workflow");
// Import descriptions for operations and fields
const LeadDescription_1 = require("./LeadDescription");
const CustomerDescription_1 = require("./CustomerDescription");
const ContactDescription_1 = require("./ContactDescription");
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
                ...LeadDescription_1.leadOperations,
                ...LeadDescription_1.leadFields,
                ...CustomerDescription_1.customerOperations,
                ...CustomerDescription_1.customerFields,
                ...ContactDescription_1.contactOperations,
                ...ContactDescription_1.contactFields,
            ],
        };
    }
    async execute() {
        const items = this.getInputData();
        const returnData = [];
        let responseData;
        const resource = this.getNodeParameter('resource', 0);
        const operation = this.getNodeParameter('operation', 0);
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
                        const filters = this.getNodeParameter('filters', itemIndex, {});
                        if (filters.status)
                            qs.status = filters.status;
                        if (filters.source)
                            qs.source = filters.source;
                    }
                    else if (operation === 'get') {
                        method = 'GET';
                        const leadId = this.getNodeParameter('leadId', itemIndex);
                        endpoint = `/leads/${leadId}`;
                    }
                    else if (operation === 'create') {
                        method = 'POST';
                        body.name = this.getNodeParameter('name', itemIndex);
                        body.source = this.getNodeParameter('source', itemIndex);
                        body.status = this.getNodeParameter('status', itemIndex);
                        const additionalFields = this.getNodeParameter('additionalFields', itemIndex, {});
                        Object.assign(body, additionalFields);
                    }
                    else if (operation === 'update') {
                        method = 'PUT';
                        const leadId = this.getNodeParameter('leadId', itemIndex);
                        endpoint = `/leads/${leadId}`;
                        const source = this.getNodeParameter('source', itemIndex, null);
                        const status = this.getNodeParameter('status', itemIndex, null);
                        if (source !== null)
                            body.source = source;
                        if (status !== null)
                            body.status = status;
                        const additionalFields = this.getNodeParameter('additionalFields', itemIndex, {});
                        Object.assign(body, additionalFields);
                    }
                    else if (operation === 'delete') {
                        method = 'DELETE';
                        const leadId = this.getNodeParameter('leadId', itemIndex);
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
                        const customerId = this.getNodeParameter('customerId', itemIndex);
                        endpoint = `/clients/${customerId}`;
                    }
                    else if (operation === 'create') {
                        method = 'POST';
                        body.company = this.getNodeParameter('company', itemIndex);
                        const vat = this.getNodeParameter('vat', itemIndex, '');
                        const phonenumber = this.getNodeParameter('phonenumber', itemIndex, '');
                        const website = this.getNodeParameter('website', itemIndex, '');
                        const default_currency = this.getNodeParameter('default_currency', itemIndex, '');
                        const address = this.getNodeParameter('address', itemIndex, '');
                        const city = this.getNodeParameter('city', itemIndex, '');
                        const state = this.getNodeParameter('state', itemIndex, '');
                        const zip = this.getNodeParameter('zip', itemIndex, '');
                        const country = this.getNodeParameter('country', itemIndex, '');
                        const default_language = this.getNodeParameter('default_language', itemIndex, '');
                        if (vat)
                            body.vat = vat;
                        if (phonenumber)
                            body.phonenumber = phonenumber;
                        if (website)
                            body.website = website;
                        if (default_currency)
                            body.default_currency = default_currency;
                        if (address)
                            body.address = address;
                        if (city)
                            body.city = city;
                        if (state)
                            body.state = state;
                        if (zip)
                            body.zip = zip;
                        if (country)
                            body.country = country;
                        if (default_language)
                            body.default_language = default_language;
                    }
                    else if (operation === 'delete') {
                        method = 'DELETE';
                        const customerId = this.getNodeParameter('customerId', itemIndex);
                        endpoint = `/clients/${customerId}`;
                    }
                }
                else if (resource === 'contact') {
                    endpoint = '/contacts';
                    if (operation === 'list') {
                        method = 'GET';
                        const customerId = this.getNodeParameter('customerId', itemIndex);
                        endpoint = `/clients/${customerId}/contacts`;
                    }
                    else if (operation === 'get') {
                        method = 'GET';
                        const contactId = this.getNodeParameter('contactId', itemIndex);
                        endpoint = `/contacts/${contactId}`;
                    }
                    else if (operation === 'create') {
                        method = 'POST';
                        body.customer_id = this.getNodeParameter('customerId', itemIndex);
                        body.firstname = this.getNodeParameter('firstname', itemIndex);
                        body.lastname = this.getNodeParameter('lastname', itemIndex);
                        body.email = this.getNodeParameter('email', itemIndex);
                        body.password = this.getNodeParameter('password', itemIndex);
                        const additionalFields = this.getNodeParameter('additionalFields', itemIndex, {});
                        Object.assign(body, additionalFields);
                    }
                    else if (operation === 'update') {
                        method = 'PUT';
                        const contactId = this.getNodeParameter('contactId', itemIndex);
                        endpoint = `/contacts/${contactId}`;
                        const firstname = this.getNodeParameter('firstname', itemIndex, null);
                        const lastname = this.getNodeParameter('lastname', itemIndex, null);
                        const email = this.getNodeParameter('email', itemIndex, null);
                        const password = this.getNodeParameter('password', itemIndex, null);
                        if (firstname)
                            body.firstname = firstname;
                        if (lastname)
                            body.lastname = lastname;
                        if (email)
                            body.email = email;
                        if (password)
                            body.password = password;
                        const additionalFields = this.getNodeParameter('additionalFields', itemIndex, {});
                        Object.assign(body, additionalFields);
                    }
                    else if (operation === 'delete') {
                        method = 'DELETE';
                        const contactId = this.getNodeParameter('contactId', itemIndex);
                        endpoint = `/contacts/${contactId}`;
                    }
                }
                responseData = await this.helpers.httpRequest({
                    method,
                    url: endpoint,
                    body,
                    qs,
                });
                if (responseData.error || (responseData.success === false)) {
                    throw new n8n_workflow_1.NodeOperationError(this.getNode(), responseData.message || 'Perfex API Error', { itemIndex });
                }
                const executionData = this.helpers.constructExecutionMetaData(this.helpers.returnJsonArray(responseData), { itemData: { item: itemIndex } });
                returnData.push(...executionData);
            }
            catch (error) {
                if (this.continueOnFail()) {
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
exports.Perfex = Perfex;
//# sourceMappingURL=Perfex.node.js.map