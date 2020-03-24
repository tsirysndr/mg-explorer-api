const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
const region = require('../repository/region');
const faunadb = require('faunadb');
const lowercasekeys = require('lowercase-keys');

/**
* An HTTP endpoint that acts as a webhook for Custom API or Webhook request event
* @returns {object} result Your return value
*/
module.exports = async (context) => {
  return region.find(context.params.id);
};