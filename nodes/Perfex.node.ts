// /home/ubuntu/n8n-nodes-perfex/nodes/Perfex/Perfex.node.ts
import {
    IExecuteFunctions,
    INodeType,
    INodeTypeDescription,
    INodeExecutionData,
    IDataObject,
    NodeOperationError,
    NodeConnectionType,
} from 'n8n-workflow';

// Import descriptions for operations and fields
import { leadOperations, leadFields } from './LeadDescription';
import { customerOperations, customerFields } from './CustomerDescription';
import { contactOperations, contactFields } from './ContactDescription';

class Perfex implements INodeType {
    description: INodeTypeDescription = {
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
        inputs: ['main' as NodeConnectionType],
        outputs: ['main' as NodeConnectionType],
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

    async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
        const items = this.getInputData();
        const returnData: INodeExecutionData[] = [];
        let responseData;

        const resource = this.getNodeParameter('resource', 0) as string;
        const operation = this.getNodeParameter('operation', 0) as string;

        for (let itemIndex = 0; itemIndex < items.length; itemIndex++) {
            try {
                let method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET';
                let endpoint = '';
                const body: IDataObject = {};
                const qs: IDataObject = {};

                if (resource === 'lead') {
                    endpoint = '/leads';

                    if (operation === 'list') {
                        method = 'GET';
                        const filters = this.getNodeParameter('filters', itemIndex, {}) as IDataObject;
                        if (filters.status) qs.status = filters.status;
                        if (filters.source) qs.source = filters.source;
                    }
                    else if (operation === 'get') {
                        method = 'GET';
                        const leadId = this.getNodeParameter('leadId', itemIndex) as number;
                        endpoint = `/leads/${leadId}`;
                    }
                    else if (operation === 'create') {
                        method = 'POST';
                        body.name = this.getNodeParameter('name', itemIndex) as string;
                        body.source = this.getNodeParameter('source', itemIndex) as number;
                        body.status = this.getNodeParameter('status', itemIndex) as number;

                        const additionalFields = this.getNodeParameter('additionalFields', itemIndex, {}) as IDataObject;
                        Object.assign(body, additionalFields);
                    }
                    else if (operation === 'update') {
                        method = 'PUT';
                        const leadId = this.getNodeParameter('leadId', itemIndex) as number;
                        endpoint = `/leads/${leadId}`;

                        const source = this.getNodeParameter('source', itemIndex, null) as number | null;
                        const status = this.getNodeParameter('status', itemIndex, null) as number | null;
                        if (source !== null) body.source = source;
                        if (status !== null) body.status = status;

                        const additionalFields = this.getNodeParameter('additionalFields', itemIndex, {}) as IDataObject;
                        Object.assign(body, additionalFields);
                    }
                    else if (operation === 'delete') {
                        method = 'DELETE';
                        const leadId = this.getNodeParameter('leadId', itemIndex) as number;
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
                        const customerId = this.getNodeParameter('customerId', itemIndex) as number;
                        endpoint = `/clients/${customerId}`;
                    }
                    else if (operation === 'create') {
                        method = 'POST';
                        body.company = this.getNodeParameter('company', itemIndex) as string;
                        const vat = this.getNodeParameter('vat', itemIndex, '') as string;
                        const phonenumber = this.getNodeParameter('phonenumber', itemIndex, '') as string;
                        const website = this.getNodeParameter('website', itemIndex, '') as string;
                        const default_currency = this.getNodeParameter('default_currency', itemIndex, '') as number | '';
                        const address = this.getNodeParameter('address', itemIndex, '') as string;
                        const city = this.getNodeParameter('city', itemIndex, '') as string;
                        const state = this.getNodeParameter('state', itemIndex, '') as string;
                        const zip = this.getNodeParameter('zip', itemIndex, '') as string;
                        const country = this.getNodeParameter('country', itemIndex, '') as number | '';
                        const default_language = this.getNodeParameter('default_language', itemIndex, '') as string;

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
                        const customerId = this.getNodeParameter('customerId', itemIndex) as number;
                        endpoint = `/clients/${customerId}`;
                    }
                }
                else if (resource === 'contact') {
                    endpoint = '/contacts';

                    if (operation === 'list') {
                        method = 'GET';
                        const customerId = this.getNodeParameter('customerId', itemIndex) as number;
                        endpoint = `/clients/${customerId}/contacts`;
                    }
                    else if (operation === 'get') {
                        method = 'GET';
                        const contactId = this.getNodeParameter('contactId', itemIndex) as number;
                        endpoint = `/contacts/${contactId}`;
                    }
                    else if (operation === 'create') {
                        method = 'POST';
                        body.customer_id = this.getNodeParameter('customerId', itemIndex) as number;
                        body.firstname = this.getNodeParameter('firstname', itemIndex) as string;
                        body.lastname = this.getNodeParameter('lastname', itemIndex) as string;
                        body.email = this.getNodeParameter('email', itemIndex) as string;
                        body.password = this.getNodeParameter('password', itemIndex) as string;

                        const additionalFields = this.getNodeParameter('additionalFields', itemIndex, {}) as IDataObject;
                        Object.assign(body, additionalFields);
                    }
                    else if (operation === 'update') {
                        method = 'PUT';
                        const contactId = this.getNodeParameter('contactId', itemIndex) as number;
                        endpoint = `/contacts/${contactId}`;

                        const firstname = this.getNodeParameter('firstname', itemIndex, null) as string | null;
                        const lastname = this.getNodeParameter('lastname', itemIndex, null) as string | null;
                        const email = this.getNodeParameter('email', itemIndex, null) as string | null;
                        const password = this.getNodeParameter('password', itemIndex, null) as string | null;

                        if (firstname) body.firstname = firstname;
                        if (lastname) body.lastname = lastname;
                        if (email) body.email = email;
                        if (password) body.password = password;

                        const additionalFields = this.getNodeParameter('additionalFields', itemIndex, {}) as IDataObject;
                        Object.assign(body, additionalFields);
                    }
                    else if (operation === 'delete') {
                        method = 'DELETE';
                        const contactId = this.getNodeParameter('contactId', itemIndex) as number;
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
                    throw new NodeOperationError(this.getNode(), responseData.message || 'Perfex API Error', { itemIndex });
                }

                const executionData = this.helpers.constructExecutionMetaData(
                    this.helpers.returnJsonArray(responseData),
                    { itemData: { item: itemIndex } },
                );
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

module.exports = { perfexNode: new Perfex() };
