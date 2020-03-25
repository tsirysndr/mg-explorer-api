const q = require('faunadb').query;
const { client } = require('../client');
const { formatRegions, formatRegion } = require('../helpers/formater');
const lowercasekeys = require('lowercase-keys');

const find = async (id) => {
  const result = await client.query(
    q.Get(q.Ref(q.Collection('regions'), id))
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
  }
}

const findAll = async (after, size = 100) => {
  const pagination = after && size ? { after: [ q.Ref(q.Collection('regions'), after) ], size } : { size: 100 };
  const result = await client.query(
    q.Paginate(
      q.Match(q.Index('regions_sort_by_ref')),
      pagination
    )
  );
  return { data: formatRegions(result.data), after: formatRegion(result.after) };
}

const count = async () => {
  const { data } = await client.query(
    q.Paginate(
      q.Match(q.Index('all_regions')),
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
