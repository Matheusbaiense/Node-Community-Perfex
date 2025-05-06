// /home/ubuntu/n8n-nodes-perfex/nodes/Perfex/CustomerDescription.ts
import { INodeProperties } from 'n8n-workflow';

// Define os campos para as operações de Customer (Cliente)
export const customerOperations: INodeProperties[] = [
    {
		 displayName: 'Operation',
		 name: 'operation',
		 type: 'options',
		 noDataExpression: true,
		 displayOptions: {
			 show: {
				 resource: ['customer'],
			 },
		 },
		 options: [
			 {
				 name: 'Create',
				 value: 'create',
				 description: 'Create a new customer',
				 action: 'Create a customer',
			 },
			 {
				 name: 'Delete',
				 value: 'delete',
				 description: 'Delete a customer',
				 action: 'Delete a customer',
			 },
			 {
				 name: 'Get',
				 value: 'get',
				 description: 'Get a customer by ID',
				 action: 'Get a customer',
			 },
			 {
				 name: 'List',
				 value: 'list',
				 description: 'List customers',
				 action: 'List customers',
			 },
			 // Update might not be directly available via simple PUT/POST, often handled via GET + specific fields?
			 // Perfex API might handle updates differently for customers.
			 // Let's omit Update for now unless API docs confirm a simple endpoint.
		 ],
		 default: 'list',
	 },
];

// Define os campos específicos para cada operação de Customer
export const customerFields: INodeProperties[] = [
    /* -------------------------------------------------------------------------- */
    /*                                customer:list                               */
    /* -------------------------------------------------------------------------- */
    // Perfex API for listing clients doesn't seem to have specific filters in basic docs
    // Add if specific filters are found

    /* -------------------------------------------------------------------------- */
    /*                                customer:get                                */
    /* -------------------------------------------------------------------------- */
    {
		 displayName: 'Customer ID',
		 name: 'customerId',
		 type: 'number',
		 required: true,
		 displayOptions: {
			 show: {
				 resource: ['customer'],
				 operation: ['get', 'delete'], // Assuming delete uses ID
			 },
		 },
		 default: '',
		 description: 'The ID of the customer (User ID)',
	 },

    /* -------------------------------------------------------------------------- */
    /*                                customer:create                             */
    /* -------------------------------------------------------------------------- */
    {
		 displayName: 'Company Name',
		 name: 'company',
		 type: 'string',
		 required: true,
		 displayOptions: {
			 show: {
				 resource: ['customer'],
				 operation: ['create'],
			 },
		 },
		 default: '',
		 description: 'Name of the company/customer',
	 },
	 {
		 displayName: 'VAT Number',
		 name: 'vat',
		 type: 'string',
		 displayOptions: {
			 show: {
				 resource: ['customer'],
				 operation: ['create'],
			 },
		 },
		 default: '',
	 },
	 {
		 displayName: 'Phone Number',
		 name: 'phonenumber',
		 type: 'string',
		 displayOptions: {
			 show: {
				 resource: ['customer'],
				 operation: ['create'],
			 },
		 },
		 default: '',
	 },
	 {
		 displayName: 'Website',
		 name: 'website',
		 type: 'string',
		 displayOptions: {
			 show: {
				 resource: ['customer'],
				 operation: ['create'],
			 },
		 },
		 default: '',
	 },
	 {
		 displayName: 'Default Currency ID',
		 name: 'default_currency',
		 type: 'number',
		 displayOptions: {
			 show: {
				 resource: ['customer'],
				 operation: ['create'],
			 },
		 },
		 default: '',
		 description: 'Numeric ID of the default currency (get from Perfex)',
	 },
	 {
		 displayName: 'Address',
		 name: 'address',
		 type: 'string',
		 displayOptions: {
			 show: {
				 resource: ['customer'],
				 operation: ['create'],
			 },
		 },
		 default: '',
	 },
	 {
		 displayName: 'City',
		 name: 'city',
		 type: 'string',
		 displayOptions: {
			 show: {
				 resource: ['customer'],
				 operation: ['create'],
			 },
		 },
		 default: '',
	 },
	 {
		 displayName: 'State',
		 name: 'state',
		 type: 'string',
		 displayOptions: {
			 show: {
				 resource: ['customer'],
				 operation: ['create'],
			 },
		 },
		 default: '',
	 },
	 {
		 displayName: 'Zip Code',
		 name: 'zip',
		 type: 'string',
		 displayOptions: {
			 show: {
				 resource: ['customer'],
				 operation: ['create'],
			 },
		 },
		 default: '',
	 },
	 {
		 displayName: 'Country ID',
		 name: 'country',
		 type: 'number',
		 displayOptions: {
			 show: {
				 resource: ['customer'],
				 operation: ['create'],
			 },
		 },
		 default: '',
		 description: 'Numeric ID of the country (get from Perfex)',
	 },
	 {
		 displayName: 'Default Language',
		 name: 'default_language',
		 type: 'string',
		 displayOptions: {
			 show: {
				 resource: ['customer'],
				 operation: ['create'],
			 },
		 },
		 default: '',
		 description: 'Customer default language (e.g., portuguese)',
	 },
	 // Add other optional fields based on Perfex API docs (e.g., billing/shipping address details)

    /* -------------------------------------------------------------------------- */
    /*                                customer:delete                             */
    /* -------------------------------------------------------------------------- */
    // Uses Customer ID (defined above)
];

