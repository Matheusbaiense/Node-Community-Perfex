"use strict";
// /home/ubuntu/n8n-nodes-perfex/nodes/Perfex/Perfex.node.ts
const { IExecuteFunctions, INodeType, INodeTypeDescription, INodeExecutionData, IDataObject, NodeOperationError, NodeConnectionType, } = require('n8n-workflow');
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
            group: ['transform'],
            version: 1,
            subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
            description: 'Interact with Perfex CRM API',
            defaults: {
                name: 'Perfex CRM',
            },
            inputs: [NodeConnectionType.Main],
            outputs: [NodeConnectionType.Main],
            credentials: [
                {
                    name: 'perfexApi',
                    required: true,
                },
            ],
            requestDefaults: {
                baseURL: '={{$credentials.domain}}',
                headers: {
                    'Accept': 'application/json',
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
                ...leadOperations,
                ...leadFields,
                ...customerOperations,
                ...customerFields,
                ...contactOperations,
                ...contactFields,
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
                    if (operation === 'list') {
                        const filters = this.getNodeParameter('filters', i);
                        responseData = await this.helpers.request({
                            method: 'GET',
                            url: '/api/leads',
                            qs: filters,
                        });
                    }
                    else if (operation === 'get') {
                        const leadId = this.getNodeParameter('leadId', i);
                        responseData = await this.helpers.request({
                            method: 'GET',
                            url: `/api/leads/${leadId}`,
                        });
                    }
                    else if (operation === 'create') {
                        const body = this.getNodeParameter('additionalFields', i);
                        responseData = await this.helpers.request({
                            method: 'POST',
                            url: '/api/leads',
                            body,
                        });
                    }
                    else if (operation === 'update') {
                        const leadId = this.getNodeParameter('leadId', i);
                        const body = this.getNodeParameter('additionalFields', i);
                        responseData = await this.helpers.request({
                            method: 'PUT',
                            url: `/api/leads/${leadId}`,
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
                }
                else if (resource === 'customer') {
                    if (operation === 'list') {
                        const filters = this.getNodeParameter('filters', i);
                        responseData = await this.helpers.request({
                            method: 'GET',
                            url: '/api/clients',
                            qs: filters,
                        });
                    }
                    else if (operation === 'get') {
                        const customerId = this.getNodeParameter('customerId', i);
                        responseData = await this.helpers.request({
                            method: 'GET',
                            url: `/api/clients/${customerId}`,
                        });
                    }
                    else if (operation === 'create') {
                        const body = this.getNodeParameter('additionalFields', i);
                        responseData = await this.helpers.request({
                            method: 'POST',
                            url: '/api/clients',
                            body,
                        });
                    }
                    else if (operation === 'update') {
                        const customerId = this.getNodeParameter('customerId', i);
                        const body = this.getNodeParameter('additionalFields', i);
                        responseData = await this.helpers.request({
                            method: 'PUT',
                            url: `/api/clients/${customerId}`,
                            body,
                        });
                    }
                    else if (operation === 'delete') {
                        const customerId = this.getNodeParameter('customerId', i);
                        responseData = await this.helpers.request({
                            method: 'DELETE',
                            url: `/api/clients/${customerId}`,
                        });
                    }
                }
                else if (resource === 'contact') {
                    if (operation === 'list') {
                        const filters = this.getNodeParameter('filters', i);
                        responseData = await this.helpers.request({
                            method: 'GET',
                            url: '/api/contacts',
                            qs: filters,
                        });
                    }
                    else if (operation === 'get') {
                        const contactId = this.getNodeParameter('contactId', i);
                        responseData = await this.helpers.request({
                            method: 'GET',
                            url: `/api/contacts/${contactId}`,
                        });
                    }
                    else if (operation === 'create') {
                        const body = this.getNodeParameter('additionalFields', i);
                        responseData = await this.helpers.request({
                            method: 'POST',
                            url: '/api/contacts',
                            body,
                        });
                    }
                    else if (operation === 'update') {
                        const contactId = this.getNodeParameter('contactId', i);
                        const body = this.getNodeParameter('additionalFields', i);
                        responseData = await this.helpers.request({
                            method: 'PUT',
                            url: `/api/contacts/${contactId}`,
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
                }
                if (responseData && responseData.data) {
                    returnData.push(responseData.data);
                }
                else {
                    returnData.push(responseData);
                }
            }
            catch (error) {
                if (this.continueOnFail()) {
                    returnData.push({ error: error instanceof Error ? error.message : 'Unknown error occurred' });
                    continue;
                }
                throw new NodeOperationError(this.getNode(), error);
            }
        }
        return [this.helpers.returnJsonArray(returnData)];
    }
}
module.exports = { nodeClass: Perfex };
//# sourceMappingURL=Perfex.node.js.map