const q = require('faunadb').query;
const { client } = require('../client');
const { formatDistricts, formatDistrict } = require('../helpers/formater');
const lowercasekeys = require('lowercase-keys');

const find = async (id) => {
  const result = await client.query(
    q.Get(q.Ref(q.Collection('districts'), id))
  )
  if (!result.ref) {
    return {}
  }
  return {
    id: result.ref.value.id,
    geometry: {
      type: result.data.Geometry.Type,
      polygon: result.data.Geometry.Type === 'Polygon' ? lowercasekeys(result.data.Geometry) : null,
      multipolygon: result.data.Geometry.Type === 'MultiPolygon' ? lowercasekeys(result.data.Geometry) : null
    },
    name: result.data.Name,
    province: result.data.Province,
    code: result.data.Code,
    region: result.data.Region,
  };
}

const findAll = async (after, size = 100) => {
  const pagination = after && size ? { after: [ q.Ref(q.Collection('districts'), after) ], size } : { size: 100 };
  const result = await client.query(
    q.Paginate(
      q.Match(q.Index('districts_sort_by_ref')),
      pagination
    )
  );
  return { data: formatDistricts(result.data), after: formatDistrict(result.after) };
}

const count = async () => {
  const { data } = await client.query(
    q.Paginate(
      q.Match(q.Index('all_districts')),
      { size: 50000 },
    )
  );
  return data.length;
}

module.exports = {
  find,
  findAll,
  count,
}