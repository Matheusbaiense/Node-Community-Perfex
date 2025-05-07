// /home/ubuntu/n8n-nodes-perfex/nodes/Perfex/Perfex.node.ts
import { IExecuteFunctions } from 'n8n-core';
import {
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
	NodePropertyTypes,
	IDataObject,
} from 'n8n-workflow';
const { leadOperations, leadFields } = require('./LeadDescription');
const { customerOperations, customerFields } = require('./CustomerDescription');
const { contactOperations, contactFields } = require('./ContactDescription');

export class Perfex implements INodeType {
	description: INodeTypeDescription;

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
					type: 'options' as NodePropertyTypes,
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
						const company = this.getNodeParameter('company', i) as string;
						const name = this.getNodeParameter('name', i) as string;
						const email = this.getNodeParameter('email', i) as string;
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
						const leadId = this.getNodeParameter('leadId', i) as string;

						responseData = await this.helpers.request({
							method: 'DELETE',
							url: `/api/leads/${leadId}`,
						});
					} else if (operation === 'get') {
						const leadId = this.getNodeParameter('leadId', i) as string;

						responseData = await this.helpers.request({
							method: 'GET',
							url: `/api/leads/${leadId}`,
						});
					} else if (operation === 'getAll') {
						const returnAll = this.getNodeParameter('returnAll', i) as boolean;
						const limit = this.getNodeParameter('limit', i) as number;
						const qs: IDataObject = {};

						if (returnAll === false) {
							qs.limit = limit;
						}

						responseData = await this.helpers.request({
							method: 'GET',
							url: '/api/leads',
							qs,
						});
					} else if (operation === 'update') {
						const leadId = this.getNodeParameter('leadId', i) as string;
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
						const company = this.getNodeParameter('company', i) as string;
						const vat = this.getNodeParameter('vat', i) as string;
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
						const customerId = this.getNodeParameter('customerId', i) as string;

						responseData = await this.helpers.request({
							method: 'DELETE',
							url: `/api/customers/${customerId}`,
						});
					} else if (operation === 'get') {
						const customerId = this.getNodeParameter('customerId', i) as string;

						responseData = await this.helpers.request({
							method: 'GET',
							url: `/api/customers/${customerId}`,
						});
					} else if (operation === 'getAll') {
						const returnAll = this.getNodeParameter('returnAll', i) as boolean;
						const limit = this.getNodeParameter('limit', i) as number;
						const qs: IDataObject = {};

						if (returnAll === false) {
							qs.limit = limit;
						}

						responseData = await this.helpers.request({
							method: 'GET',
							url: '/api/customers',
							qs,
						});
					} else if (operation === 'update') {
						const customerId = this.getNodeParameter('customerId', i) as string;
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
						const firstname = this.getNodeParameter('firstname', i) as string;
						const lastname = this.getNodeParameter('lastname', i) as string;
						const email = this.getNodeParameter('email', i) as string;
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
						const contactId = this.getNodeParameter('contactId', i) as string;

						responseData = await this.helpers.request({
							method: 'DELETE',
							url: `/api/contacts/${contactId}`,
						});
					} else if (operation === 'get') {
						const contactId = this.getNodeParameter('contactId', i) as string;

						responseData = await this.helpers.request({
							method: 'GET',
							url: `/api/contacts/${contactId}`,
						});
					} else if (operation === 'getAll') {
						const returnAll = this.getNodeParameter('returnAll', i) as boolean;
						const limit = this.getNodeParameter('limit', i) as number;
						const qs: IDataObject = {};

						if (returnAll === false) {
							qs.limit = limit;
						}

						responseData = await this.helpers.request({
							method: 'GET',
							url: '/api/contacts',
							qs,
						});
					} else if (operation === 'update') {
						const contactId = this.getNodeParameter('contactId', i) as string;
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

module.exports = { perfexNode: new Perfex() };
