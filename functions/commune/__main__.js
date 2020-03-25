const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
const commune = require('../../repository/commune');
const faunadb = require('faunadb');
const lowercasekeys = require('lowercase-keys');

/**
* An HTTP endpoint that acts as a webhook for Custom API or Webhook request event
* @param {string} id
* @returns {object} result Your return value
*/
module.exports = async (id) => {
  return commune.find(id);
};