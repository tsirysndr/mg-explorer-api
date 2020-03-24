const faunadb = require('faunadb');

const client = new faunadb.Client({ secret: process.env.FAUNADB_SECRET });

module.exports = {
  client
};