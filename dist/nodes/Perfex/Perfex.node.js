"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Perfex = void 0;
const n8n_workflow_1 = require("n8n-workflow");
const LeadDescription_1 = require("./LeadDescription");
const CustomerDescription_1 = require("./CustomerDescription");
const ContactDescription_1 = require("./ContactDescription");
class Perfex {
    constructor() {
        this.description = {
            displayName: 'Perfex',
            name: 'perfex',
            icon: 'file:perfex.svg',
            group: ['transform'],
            version: 1,
            subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
            description: 'Consume Perfex API',
            defaults: {
                name: 'Perfex',
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
                baseURL: '={{$credentials.domain}}',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
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
        const resource = this.getNodeParameter('resource', 0);
        const operation = this.getNodeParameter('operation', 0);
        let responseData;
        for (let i = 0; i < items.length; i++) {
            try {
                if (resource === 'lead') {
                    if (operation === 'create') {
                        const company = this.getNodeParameter('company', i);
                        const name = this.getNodeParameter('name', i);
                        const email = this.getNodeParameter('email', i);
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        const body = {
                            company,
                            name,
                            email,
                            ...additionalFields,
                        };
                        responseData = await this.helpers.request({
                            method: 'POST',
                            url: '/api/leads',
                            body,
                        });
                    }
                    else if (operation === 'delete') {
                        const leadId = this.getNodeParameter('leadId', i);
                        responseData = await this.helpers.request({
                            method: 'DELETE',
                            url: `/api/leads/${leadId}`,
                        });
                    }
                    else if (operation === 'get') {
                        const leadId = this.getNodeParameter('leadId', i);
                        responseData = await this.helpers.request({
                            method: 'GET',
                            url: `/api/leads/${leadId}`,
                        });
                    }
                    else if (operation === 'getAll') {
                        const returnAll = this.getNodeParameter('returnAll', i);
                        const limit = this.getNodeParameter('limit', i);
                        const qs = {};
                        if (returnAll === false) {
                            Object.assign(qs, { limit });
                        }
                        responseData = await this.helpers.request({
                            method: 'GET',
                            url: '/api/leads',
                            qs,
                        });
                    }
                    else if (operation === 'update') {
                        const leadId = this.getNodeParameter('leadId', i);
                        const updateFields = this.getNodeParameter('updateFields', i);
                        const body = {
                            ...updateFields,
                        };
                        responseData = await this.helpers.request({
                            method: 'PUT',
                            url: `/api/leads/${leadId}`,
                            body,
                        });
                    }
                }
                else if (resource === 'customer') {
                    if (operation === 'create') {
                        const company = this.getNodeParameter('company', i);
                        const vat = this.getNodeParameter('vat', i);
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        const body = {
                            company,
                            vat,
                            ...additionalFields,
                        };
                        responseData = await this.helpers.request({
                            method: 'POST',
                            url: '/api/customers',
                            body,
                        });
                    }
                    else if (operation === 'delete') {
                        const customerId = this.getNodeParameter('customerId', i);
                        responseData = await this.helpers.request({
                            method: 'DELETE',
                            url: `/api/customers/${customerId}`,
                        });
                    }
                    else if (operation === 'get') {
                        const customerId = this.getNodeParameter('customerId', i);
                        responseData = await this.helpers.request({
                            method: 'GET',
                            url: `/api/customers/${customerId}`,
                        });
                    }
                    else if (operation === 'getAll') {
                        const returnAll = this.getNodeParameter('returnAll', i);
                        const limit = this.getNodeParameter('limit', i);
                        const qs = {};
                        if (returnAll === false) {
                            Object.assign(qs, { limit });
                        }
                        responseData = await this.helpers.request({
                            method: 'GET',
                            url: '/api/customers',
                            qs,
                        });
                    }
                    else if (operation === 'update') {
                        const customerId = this.getNodeParameter('customerId', i);
                        const updateFields = this.getNodeParameter('updateFields', i);
                        const body = {
                            ...updateFields,
                        };
                        responseData = await this.helpers.request({
                            method: 'PUT',
                            url: `/api/customers/${customerId}`,
                            body,
                        });
                    }
                }
                else if (resource === 'contact') {
                    if (operation === 'create') {
                        const firstname = this.getNodeParameter('firstname', i);
                        const lastname = this.getNodeParameter('lastname', i);
                        const email = this.getNodeParameter('email', i);
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        const body = {
                            firstname,
                            lastname,
                            email,
                            ...additionalFields,
                        };
                        responseData = await this.helpers.request({
                            method: 'POST',
                            url: '/api/contacts',
                            body,
                        });
                    }
                    else if (operation === 'delete') {
                        const contactId = this.getNodeParameter('contactId', i);
                        responseData = await this.helpers.request({
                            method: 'DELETE',
                            url: `/api/contacts/${contactId}`,
                        });
                    }
                    else if (operation === 'get') {
                        const contactId = this.getNodeParameter('contactId', i);
                        responseData = await this.helpers.request({
                            method: 'GET',
                            url: `/api/contacts/${contactId}`,
                        });
                    }
                    else if (operation === 'getAll') {
                        const returnAll = this.getNodeParameter('returnAll', i);
                        const limit = this.getNodeParameter('limit', i);
                        const qs = {};
                        if (returnAll === false) {
                            Object.assign(qs, { limit });
                        }
                        responseData = await this.helpers.request({
                            method: 'GET',
                            url: '/api/contacts',
                            qs,
                        });
                    }
                    else if (operation === 'update') {
                        const contactId = this.getNodeParameter('contactId', i);
                        const updateFields = this.getNodeParameter('updateFields', i);
                        const body = {
                            ...updateFields,
                        };
                        responseData = await this.helpers.request({
                            method: 'PUT',
                            url: `/api/contacts/${contactId}`,
                            body,
                        });
                    }
                }
                if (Array.isArray(responseData)) {
                    returnData.push(...responseData.map(item => ({ json: item })));
                }
                else if (responseData) {
                    returnData.push({ json: responseData });
                }
            }
            catch (error) {
                if (this.continueOnFail()) {
                    const errorData = { error: '', stack: '' };
                    if (error instanceof Error) {
                        errorData.error = error.message;
                        errorData.stack = error.stack || '';
                    }
                    else {
                        errorData.error = JSON.stringify(error);
                    }
                    const nodeError = error instanceof n8n_workflow_1.NodeApiError || error instanceof n8n_workflow_1.NodeOperationError
                        ? error
                        : new n8n_workflow_1.NodeOperationError(this.getNode(), errorData.error);
                    returnData.push({ json: errorData, error: nodeError });
                    continue;
                }
                throw error;
            }
        }
        return [returnData];
    }
}
exports.Perfex = Perfex;
