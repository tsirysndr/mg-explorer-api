const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
const district = require('../../repository/district');
const faunadb = require('faunadb');
const lowercasekeys = require('lowercase-keys');

/**
* An HTTP endpoint that acts as a webhook for Custom API or Webhook request event
* @param {string} after
* @param {number} size
* @returns {object} result Your return value
*/
module.exports = async (after = null, size = 10) => {
  return district.findAll(after, size);
};
