"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Perfex = void 0;
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
                        const body = {};
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        const customFields = this.getNodeParameter('customFields', i);
                        Object.assign(body, additionalFields, customFields);
                        responseData = await this.helpers.request({
                            method: 'POST',
                            url: '/api/leads',
                            body,
                        });
                    }
                    if (operation === 'get') {
                        const leadId = this.getNodeParameter('leadId', i);
                        responseData = await this.helpers.request({
                            method: 'GET',
                            url: `/api/leads/${leadId}`,
                        });
                    }
                    if (operation === 'getAll') {
                        const returnAll = this.getNodeParameter('returnAll', i);
                        const options = this.getNodeParameter('options', i);
                        const qs = {};
                        Object.assign(qs, options);
                        if (returnAll) {
                            responseData = await this.helpers.requestAll({
                                method: 'GET',
                                url: '/api/leads',
                                qs,
                            });
                        }
                        else {
                            const limit = this.getNodeParameter('limit', i);
                            qs.limit = limit;
                            responseData = await this.helpers.request({
                                method: 'GET',
                                url: '/api/leads',
                                qs,
                            });
                        }
                    }
                    if (operation === 'update') {
                        const leadId = this.getNodeParameter('leadId', i);
                        const body = {};
                        const updateFields = this.getNodeParameter('updateFields', i);
                        const customFields = this.getNodeParameter('customFields', i);
                        Object.assign(body, updateFields, customFields);
                        responseData = await this.helpers.request({
                            method: 'PUT',
                            url: `/api/leads/${leadId}`,
                            body,
                        });
                    }
                    if (operation === 'delete') {
                        const leadId = this.getNodeParameter('leadId', i);
                        responseData = await this.helpers.request({
                            method: 'DELETE',
                            url: `/api/leads/${leadId}`,
                        });
                    }
                }
                if (resource === 'customer') {
                    if (operation === 'create') {
                        const body = {};
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        const customFields = this.getNodeParameter('customFields', i);
                        Object.assign(body, additionalFields, customFields);
                        responseData = await this.helpers.request({
                            method: 'POST',
                            url: '/api/clients',
                            body,
                        });
                    }
                    if (operation === 'get') {
                        const customerId = this.getNodeParameter('customerId', i);
                        responseData = await this.helpers.request({
                            method: 'GET',
                            url: `/api/clients/${customerId}`,
                        });
                    }
                    if (operation === 'getAll') {
                        const returnAll = this.getNodeParameter('returnAll', i);
                        const options = this.getNodeParameter('options', i);
                        const qs = {};
                        Object.assign(qs, options);
                        if (returnAll) {
                            responseData = await this.helpers.requestAll({
                                method: 'GET',
                                url: '/api/clients',
                                qs,
                            });
                        }
                        else {
                            const limit = this.getNodeParameter('limit', i);
                            qs.limit = limit;
                            responseData = await this.helpers.request({
                                method: 'GET',
                                url: '/api/clients',
                                qs,
                            });
                        }
                    }
                    if (operation === 'update') {
                        const customerId = this.getNodeParameter('customerId', i);
                        const body = {};
                        const updateFields = this.getNodeParameter('updateFields', i);
                        const customFields = this.getNodeParameter('customFields', i);
                        Object.assign(body, updateFields, customFields);
                        responseData = await this.helpers.request({
                            method: 'PUT',
                            url: `/api/clients/${customerId}`,
                            body,
                        });
                    }
                    if (operation === 'delete') {
                        const customerId = this.getNodeParameter('customerId', i);
                        responseData = await this.helpers.request({
                            method: 'DELETE',
                            url: `/api/clients/${customerId}`,
                        });
                    }
                }
                if (resource === 'contact') {
                    if (operation === 'create') {
                        const body = {};
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        const customFields = this.getNodeParameter('customFields', i);
                        Object.assign(body, additionalFields, customFields);
                        responseData = await this.helpers.request({
                            method: 'POST',
                            url: '/api/contacts',
                            body,
                        });
                    }
                    if (operation === 'get') {
                        const contactId = this.getNodeParameter('contactId', i);
                        responseData = await this.helpers.request({
                            method: 'GET',
                            url: `/api/contacts/${contactId}`,
                        });
                    }
                    if (operation === 'getAll') {
                        const returnAll = this.getNodeParameter('returnAll', i);
                        const options = this.getNodeParameter('options', i);
                        const qs = {};
                        Object.assign(qs, options);
                        if (returnAll) {
                            responseData = await this.helpers.requestAll({
                                method: 'GET',
                                url: '/api/contacts',
                                qs,
                            });
                        }
                        else {
                            const limit = this.getNodeParameter('limit', i);
                            qs.limit = limit;
                            responseData = await this.helpers.request({
                                method: 'GET',
                                url: '/api/contacts',
                                qs,
                            });
                        }
                    }
                    if (operation === 'update') {
                        const contactId = this.getNodeParameter('contactId', i);
                        const body = {};
                        const updateFields = this.getNodeParameter('updateFields', i);
                        const customFields = this.getNodeParameter('customFields', i);
                        Object.assign(body, updateFields, customFields);
                        responseData = await this.helpers.request({
                            method: 'PUT',
                            url: `/api/contacts/${contactId}`,
                            body,
                        });
                    }
                    if (operation === 'delete') {
                        const contactId = this.getNodeParameter('contactId', i);
                        responseData = await this.helpers.request({
                            method: 'DELETE',
                            url: `/api/contacts/${contactId}`,
                        });
                    }
                }
                if (Array.isArray(responseData)) {
                    returnData.push(...responseData);
                }
                else {
                    returnData.push(responseData);
                }
            }
            catch (error) {
                if (this.continueOnFail()) {
                    returnData.push({
                        json: {
                            error: error instanceof Error ? error.message : 'Unknown error occurred',
                        },
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