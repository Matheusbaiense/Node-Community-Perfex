"use strict";
const LeadDescription = require('./LeadDescription');
const CustomerDescription = require('./CustomerDescription');
const ContactDescription = require('./ContactDescription');
module.exports = {
    ...LeadDescription,
    ...CustomerDescription,
    ...ContactDescription
};
