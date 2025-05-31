// /home/ubuntu/n8n-nodes-perfex/nodes/Perfex/Perfex.node.ts
import { IExecuteFunctions } from 'n8n-workflow';
import {
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
	NodePropertyTypes,
	IDataObject,
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
						const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

						const body: IDataObject = {
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
					} else if (operation === 'delete') {
						const leadId = this.getNodeParameter('leadId', i);

						responseData = await this.helpers.request({
							method: 'DELETE',
							url: `/api/leads/${leadId}`,
						});
					} else if (operation === 'get') {
						const leadId = this.getNodeParameter('leadId', i);

						responseData = await this.helpers.request({
							method: 'GET',
							url: `/api/leads/${leadId}`,
						});
					} else if (operation === 'getAll') {
						const returnAll = this.getNodeParameter('returnAll', i);
						const limit = this.getNodeParameter('limit', i);
						const qs: IDataObject = {};

						if (returnAll === false) {
							Object.assign(qs, { limit });
						}

						responseData = await this.helpers.request({
							method: 'GET',
							url: '/api/leads',
							qs,
						});
					} else if (operation === 'update') {
						const leadId = this.getNodeParameter('leadId', i);
						const updateFields = this.getNodeParameter('updateFields', i) as IDataObject;

						const body: IDataObject = {
							...updateFields,
						};

						responseData = await this.helpers.request({
							method: 'PUT',
							url: `/api/leads/${leadId}`,
							body,
						});
					}
				} else if (resource === 'customer') {
					if (operation === 'create') {
						const company = this.getNodeParameter('company', i);
						const vat = this.getNodeParameter('vat', i);
						const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

						const body: IDataObject = {
							company,
							vat,
							...additionalFields,
						};

						responseData = await this.helpers.request({
							method: 'POST',
							url: '/api/customers',
							body,
						});
					} else if (operation === 'delete') {
						const customerId = this.getNodeParameter('customerId', i);

						responseData = await this.helpers.request({
							method: 'DELETE',
							url: `/api/customers/${customerId}`,
						});
					} else if (operation === 'get') {
						const customerId = this.getNodeParameter('customerId', i);

						responseData = await this.helpers.request({
							method: 'GET',
							url: `/api/customers/${customerId}`,
						});
					} else if (operation === 'getAll') {
						const returnAll = this.getNodeParameter('returnAll', i);
						const limit = this.getNodeParameter('limit', i);
						const qs: IDataObject = {};

						if (returnAll === false) {
							Object.assign(qs, { limit });
						}

						responseData = await this.helpers.request({
							method: 'GET',
							url: '/api/customers',
							qs,
						});
					} else if (operation === 'update') {
						const customerId = this.getNodeParameter('customerId', i);
						const updateFields = this.getNodeParameter('updateFields', i) as IDataObject;

						const body: IDataObject = {
							...updateFields,
						};

						responseData = await this.helpers.request({
							method: 'PUT',
							url: `/api/customers/${customerId}`,
							body,
						});
					}
				} else if (resource === 'contact') {
					if (operation === 'create') {
						const firstname = this.getNodeParameter('firstname', i);
						const lastname = this.getNodeParameter('lastname', i);
						const email = this.getNodeParameter('email', i);
						const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

						const body: IDataObject = {
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
					} else if (operation === 'delete') {
						const contactId = this.getNodeParameter('contactId', i);

						responseData = await this.helpers.request({
							method: 'DELETE',
							url: `/api/contacts/${contactId}`,
						});
					} else if (operation === 'get') {
						const contactId = this.getNodeParameter('contactId', i);

						responseData = await this.helpers.request({
							method: 'GET',
							url: `/api/contacts/${contactId}`,
						});
					} else if (operation === 'getAll') {
						const returnAll = this.getNodeParameter('returnAll', i);
						const limit = this.getNodeParameter('limit', i);
						const qs: IDataObject = {};

						if (returnAll === false) {
							Object.assign(qs, { limit });
						}

						responseData = await this.helpers.request({
							method: 'GET',
							url: '/api/contacts',
							qs,
						});
					} else if (operation === 'update') {
						const contactId = this.getNodeParameter('contactId', i);
						const updateFields = this.getNodeParameter('updateFields', i) as IDataObject;

						const body: IDataObject = {
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
				} else if (responseData) {
					returnData.push({ json: responseData });
				}
			} catch (error) {
				if (this.continueOnFail()) {
					const errorData = { error: '', stack: '' };
					if (error instanceof Error) {
						errorData.error = error.message;
						errorData.stack = error.stack;
					} else {
						errorData.error = JSON.stringify(error);
					}
					returnData.push({ json: errorData, error });
					continue;
				}
				throw error;
			}
		}
		return [returnData];
	}
}
