// /home/ubuntu/n8n-nodes-perfex/nodes/Perfex/Perfex.node.ts
import {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
	JsonObject,
} from 'n8n-workflow';
import { leadOperations, leadFields } from './LeadDescription';
import { customerOperations, customerFields } from './CustomerDescription';
import { contactOperations, contactFields } from './ContactDescription';

export class Perfex implements INodeType {
	description: INodeTypeDescription = {
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
		const resource = this.getNodeParameter('resource', 0) as string;
		const operation = this.getNodeParameter('operation', 0) as string;
		let responseData;

		for (let i = 0; i < items.length; i++) {
			try {
				if (resource === 'lead') {
					if (operation === 'create') {
						const body: JsonObject = {};
						const additionalFields = this.getNodeParameter('additionalFields', i) as JsonObject;
						const customFields = this.getNodeParameter('customFields', i) as JsonObject;

						Object.assign(body, additionalFields, customFields);

						responseData = await this.helpers.request({
							method: 'POST',
							url: '/api/leads',
							body,
						});
					}
					if (operation === 'get') {
						const leadId = this.getNodeParameter('leadId', i) as string;
						responseData = await this.helpers.request({
							method: 'GET',
							url: `/api/leads/${leadId}`,
						});
					}
					if (operation === 'getAll') {
						const returnAll = this.getNodeParameter('returnAll', i) as boolean;
						const options = this.getNodeParameter('options', i) as JsonObject;
						const qs: JsonObject = {};

						Object.assign(qs, options);

						if (returnAll) {
							responseData = await this.helpers.requestAll({
								method: 'GET',
								url: '/api/leads',
								qs,
							});
						} else {
							const limit = this.getNodeParameter('limit', i) as number;
							qs.limit = limit;
							responseData = await this.helpers.request({
								method: 'GET',
								url: '/api/leads',
								qs,
							});
						}
					}
					if (operation === 'update') {
						const leadId = this.getNodeParameter('leadId', i) as string;
						const body: JsonObject = {};
						const updateFields = this.getNodeParameter('updateFields', i) as JsonObject;
						const customFields = this.getNodeParameter('customFields', i) as JsonObject;

						Object.assign(body, updateFields, customFields);

						responseData = await this.helpers.request({
							method: 'PUT',
							url: `/api/leads/${leadId}`,
							body,
						});
					}
					if (operation === 'delete') {
						const leadId = this.getNodeParameter('leadId', i) as string;
						responseData = await this.helpers.request({
							method: 'DELETE',
							url: `/api/leads/${leadId}`,
						});
					}
				}
				if (resource === 'customer') {
					if (operation === 'create') {
						const body: JsonObject = {};
						const additionalFields = this.getNodeParameter('additionalFields', i) as JsonObject;
						const customFields = this.getNodeParameter('customFields', i) as JsonObject;

						Object.assign(body, additionalFields, customFields);

						responseData = await this.helpers.request({
							method: 'POST',
							url: '/api/clients',
							body,
						});
					}
					if (operation === 'get') {
						const customerId = this.getNodeParameter('customerId', i) as string;
						responseData = await this.helpers.request({
							method: 'GET',
							url: `/api/clients/${customerId}`,
						});
					}
					if (operation === 'getAll') {
						const returnAll = this.getNodeParameter('returnAll', i) as boolean;
						const options = this.getNodeParameter('options', i) as JsonObject;
						const qs: JsonObject = {};

						Object.assign(qs, options);

						if (returnAll) {
							responseData = await this.helpers.requestAll({
								method: 'GET',
								url: '/api/clients',
								qs,
							});
						} else {
							const limit = this.getNodeParameter('limit', i) as number;
							qs.limit = limit;
							responseData = await this.helpers.request({
								method: 'GET',
								url: '/api/clients',
								qs,
							});
						}
					}
					if (operation === 'update') {
						const customerId = this.getNodeParameter('customerId', i) as string;
						const body: JsonObject = {};
						const updateFields = this.getNodeParameter('updateFields', i) as JsonObject;
						const customFields = this.getNodeParameter('customFields', i) as JsonObject;

						Object.assign(body, updateFields, customFields);

						responseData = await this.helpers.request({
							method: 'PUT',
							url: `/api/clients/${customerId}`,
							body,
						});
					}
					if (operation === 'delete') {
						const customerId = this.getNodeParameter('customerId', i) as string;
						responseData = await this.helpers.request({
							method: 'DELETE',
							url: `/api/clients/${customerId}`,
						});
					}
				}
				if (resource === 'contact') {
					if (operation === 'create') {
						const body: JsonObject = {};
						const additionalFields = this.getNodeParameter('additionalFields', i) as JsonObject;
						const customFields = this.getNodeParameter('customFields', i) as JsonObject;

						Object.assign(body, additionalFields, customFields);

						responseData = await this.helpers.request({
							method: 'POST',
							url: '/api/contacts',
							body,
						});
					}
					if (operation === 'get') {
						const contactId = this.getNodeParameter('contactId', i) as string;
						responseData = await this.helpers.request({
							method: 'GET',
							url: `/api/contacts/${contactId}`,
						});
					}
					if (operation === 'getAll') {
						const returnAll = this.getNodeParameter('returnAll', i) as boolean;
						const options = this.getNodeParameter('options', i) as JsonObject;
						const qs: JsonObject = {};

						Object.assign(qs, options);

						if (returnAll) {
							responseData = await this.helpers.requestAll({
								method: 'GET',
								url: '/api/contacts',
								qs,
							});
						} else {
							const limit = this.getNodeParameter('limit', i) as number;
							qs.limit = limit;
							responseData = await this.helpers.request({
								method: 'GET',
								url: '/api/contacts',
								qs,
							});
						}
					}
					if (operation === 'update') {
						const contactId = this.getNodeParameter('contactId', i) as string;
						const body: JsonObject = {};
						const updateFields = this.getNodeParameter('updateFields', i) as JsonObject;
						const customFields = this.getNodeParameter('customFields', i) as JsonObject;

						Object.assign(body, updateFields, customFields);

						responseData = await this.helpers.request({
							method: 'PUT',
							url: `/api/contacts/${contactId}`,
							body,
						});
					}
					if (operation === 'delete') {
						const contactId = this.getNodeParameter('contactId', i) as string;
						responseData = await this.helpers.request({
							method: 'DELETE',
							url: `/api/contacts/${contactId}`,
						});
					}
				}

				if (Array.isArray(responseData)) {
					returnData.push(...responseData);
				} else {
					returnData.push(responseData);
				}
			} catch (error) {
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
