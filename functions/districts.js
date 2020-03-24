const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
const district = require('../repository/district');
const faunadb = require('faunadb');
const lowercasekeys = require('lowercase-keys');

/**
* An HTTP endpoint that acts as a webhook for Custom API or Webhook request event
* @returns {array} result Your return value
*/
module.exports = async () => {
  return district.findAll();
};