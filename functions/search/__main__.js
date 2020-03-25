const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
const { search } = require('../../repository/search');
const faunadb = require('faunadb');
const alasql = require('alasql/dist/alasql');

/**
* An HTTP endpoint that acts as a webhook for Custom API or Webhook request event
* @param {string} keyword
* @returns {object} result Your return value
*/
module.exports = async (keyword) => {
  return search(keyword);
};