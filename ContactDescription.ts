// /home/ubuntu/n8n-nodes-perfex/nodes/Perfex/ContactDescription.ts
import { INodeProperties } from 'n8n-workflow';

// Define os campos para as operações de Contact
export const contactOperations: INodeProperties[] = [
	{
		 displayName: 'Operation',
		 name: 'operation',
		 type: 'options',
		 noDataExpression: true,
		 displayOptions: {
			 show: {
				 resource: ['contact'],
			 },
		 },
		 options: [
			 {
				 name: 'Create',
				 value: 'create',
				 description: 'Create a new contact',
				 action: 'Create a contact',
			 },
			 {
				 name: 'Delete',
				 value: 'delete',
				 description: 'Delete a contact',
				 action: 'Delete a contact',
			 },
			 {
				 name: 'Get',
				 value: 'get',
				 description: 'Get a contact by ID',
				 action: 'Get a contact',
			 },
			 {
				 name: 'List',
				 value: 'list',
				 description: 'List contacts for a customer',
				 action: 'List contacts',
			 },
			 {
				 name: 'Update',
				 value: 'update',
				 description: 'Update a contact',
				 action: 'Update a contact',
			 },
		 ],
		 default: 'list',
	 },
];

// Define os campos específicos para cada operação de Contact
export const contactFields: INodeProperties[] = [
	/* -------------------------------------------------------------------------- */
	/*                                contact:list                                */
	/* -------------------------------------------------------------------------- */
	{
		 displayName: 'Customer ID',
		 name: 'customerId',
		 type: 'number',
		 required: true,
		 displayOptions: {
			 show: {
				 resource: ['contact'],
				 operation: ['list', 'create'], // List and Create require customer ID
			 },
		 },
		 default: '',
		 description: 'The ID of the customer to list/add contacts for',
	 },

	/* -------------------------------------------------------------------------- */
	/*                                contact:get                                 */
	/* -------------------------------------------------------------------------- */
	{
		 displayName: 'Contact ID',
		 name: 'contactId',
		 type: 'number',
		 required: true,
		 displayOptions: {
			 show: {
				 resource: ['contact'],
				 operation: ['get', 'update', 'delete'],
			 },
		 },
		 default: '',
		 description: 'The ID of the contact',
	 },

	/* -------------------------------------------------------------------------- */
	/*                                contact:create                              */
	/* -------------------------------------------------------------------------- */
	// Uses Customer ID (defined above)
	{
		 displayName: 'First Name',
		 name: 'firstname',
		 type: 'string',
		 required: true,
		 displayOptions: {
			 show: {
				 resource: ['contact'],
				 operation: ['create'],
			 },
		 },
		 default: '',
	 },
	 {
		 displayName: 'Last Name',
		 name: 'lastname',
		 type: 'string',
		 required: true,
		 displayOptions: {
			 show: {
				 resource: ['contact'],
				 operation: ['create'],
			 },
		 },
		 default: '',
	 },
	 {
		 displayName: 'Email',
		 name: 'email',
		 type: 'string',
		 required: true,
		 displayOptions: {
			 show: {
				 resource: ['contact'],
				 operation: ['create'],
			 },
		 },
		 default: '',
		 description: 'Contact email address (must be unique)',
	 },
	 {
		 displayName: 'Password',
		 name: 'password',
		 type: 'string',
		 typeOptions: { password: true },
		 displayOptions: {
			 show: {
				 resource: ['contact'],
				 operation: ['create', 'update'], // Needed for create, optional for update
			 },
		 },
		 default: '',
		 description: 'Contact password (required for create, optional to change on update)',
	 },
	 {
		 displayName: 'Additional Fields',
		 name: 'additionalFields',
		 type: 'collection',
		 placeholder: 'Add Field',
		 default: {},
		 displayOptions: {
			 show: {
				 resource: ['contact'],
				 operation: ['create', 'update'],
			 },
		 },
		 options: [
			 // Common optional fields for create/update
			 {
				 displayName: 'Title',
				 name: 'title',
				 type: 'string',
				 default: '',
			 },
			 {
				 displayName: 'Phone Number',
				 name: 'phonenumber',
				 type: 'string',
				 default: '',
			 },
			 {
				 displayName: 'Send Welcome Email',
				 name: 'send_set_password_email',
				 type: 'boolean',
				 default: false,
				 description: 'Whether to send the set new password email after creation',
			 },
			 {
				 displayName: 'Do Not Send Welcome Email',
				 name: 'donotsendwelcomeemail',
				 type: 'boolean',
				 default: false,
				 description: 'Set to true to not send welcome email to contact',
			 },
			 {
				 displayName: 'Permissions',
				 name: 'permissions',
				 type: 'multiOptions',
				 description: 'Select permissions for the contact',
				 options: [
					 // Perfex permissions IDs (1-6 usually)
					 { name: 'Invoices', value: 1 },
					 { name: 'Contracts', value: 2 },
					 { name: 'Estimates', value: 3 },
					 { name: 'Projects', value: 4 },
					 { name: 'Proposals', value: 5 },
					 { name: 'Support', value: 6 },
				 ],
				 default: [],
			 },
			 {
				 displayName: 'Direction (LTR/RTL)',
				 name: 'direction',
				 type: 'options',
				 options: [
					 { name: 'LTR', value: 'ltr' },
					 { name: 'RTL', value: 'rtl' },
				 ],
				 default: '',
			 },
			 {
				 displayName: 'Invoice Emails',
				 name: 'invoice_emails',
				 type: 'boolean',
				 default: false,
			 },
			 {
				 displayName: 'Estimate Emails',
				 name: 'estimate_emails',
				 type: 'boolean',
				 default: false,
			 },
			 {
				 displayName: 'Credit Note Emails',
				 name: 'credit_note_emails',
				 type: 'boolean',
				 default: false,
			 },
			 {
				 displayName: 'Contract Emails',
				 name: 'contract_emails',
				 type: 'boolean',
				 default: false,
			 },
			 {
				 displayName: 'Task Emails',
				 name: 'task_emails',
				 type: 'boolean',
				 default: false,
			 },
			 {
				 displayName: 'Project Emails',
				 name: 'project_emails',
				 type: 'boolean',
				 default: false,
			 },
			 {
				 displayName: 'Ticket Emails',
				 name: 'ticket_emails',
				 type: 'boolean',
				 default: false,
			 },
		 ],
	 },

	/* -------------------------------------------------------------------------- */
	/*                                contact:update                              */
	/* -------------------------------------------------------------------------- */
	// Uses Contact ID (defined above)
	// Uses Password (defined above, optional for update)
	// Uses Additional Fields (defined above)
	{
		 displayName: 'First Name',
		 name: 'firstname',
		 type: 'string',
		 displayOptions: {
			 show: {
				 resource: ['contact'],
				 operation: ['update'],
			 },
		 },
		 default: '',
		 description: 'Update the contact first name',
	 },
	 {
		 displayName: 'Last Name',
		 name: 'lastname',
		 type: 'string',
		 displayOptions: {
			 show: {
				 resource: ['contact'],
				 operation: ['update'],
			 },
		 },
		 default: '',
		 description: 'Update the contact last name',
	 },
	 {
		 displayName: 'Email',
		 name: 'email',
		 type: 'string',
		 displayOptions: {
			 show: {
				 resource: ['contact'],
				 operation: ['update'],
			 },
		 },
		 default: '',
		 description: 'Update the contact email address (must be unique)',
	 },

	/* -------------------------------------------------------------------------- */
	/*                                contact:delete                              */
	/* -------------------------------------------------------------------------- */
	// Uses Contact ID (defined above)
];

