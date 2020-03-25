const q = require('faunadb').query;
const { client } = require('../client');
const alasql = require('alasql/dist/alasql');
const { formatCommunes, formatFokontany, formatDistricts, formatRegions } = require('../helpers/formater');

const search = async (keyword) => {
  const size = 100;
    const _fokontany = await client.query(
      q.Paginate(
        q.Match(q.Index('fokontany_sort_by_ref')),
        { size }
      )
    );
    const _communes = await client.query(
      q.Paginate(
        q.Match(q.Index('communes_sort_by_ref')),
        { size }
      )
    );
    const _districts = await client.query(
      q.Paginate(
        q.Match(q.Index('districts_sort_by_ref')),
        { size }
      )
    );
    const _regions = await client.query(
      q.Paginate(
        q.Match(q.Index('regions_sort_by_ref')),
      )
    );
  
    const regions = alasql(`SELECT * FROM ? WHERE LOWER(name) LIKE '%${keyword}%' ORDER BY name ASC`, [formatRegions(_regions.data)]);
    const districts = alasql(`SELECT * FROM ? WHERE LOWER(name) LIKE '%${keyword}%' ORDER BY name ASC`, [formatDistricts(_districts.data)]);
    const communes = alasql(`SELECT * FROM ? WHERE LOWER(name) LIKE '%${keyword}%' ORDER BY name ASC`, [formatCommunes(_communes.data)]);
    const fokontany = alasql(`SELECT * FROM ? WHERE LOWER(name) LIKE '%${keyword}%' ORDER BY name ASC`, [formatFokontany(_fokontany.data)]);
  
    return { regions, districts, communes, fokontany };
}

module.exports = {
  search,
};