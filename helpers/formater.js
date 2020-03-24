const formatFokontanyItem = (item) => ({
  id: item[2].value.id,
  name: item[0],
  code: item[3],
  province: item[1],
  region: item[6],
  district: item[5],
  commune: item[4],
})
const formatCommune = (item) => ({
  id: item[2].value.id,
  name: item[0],
  code: item[3],
  province: item[1],
  region: item[5],
  district: item[4],
})

const formatDistrict = (item) => ({
  id: item[2].value.id,
  name: item[0],
  code: item[3],
  province: item[1],
  region: item[4]
})

const formatRegion = (item) => ({
  id: item[2].value.id,
  name: item[0],
  code: item[3],
  province: item[1],
})

const formatRegions = (result) => (
  result.map(item => formatRegion(item))
);

const formatDistricts = (result) => (
  result.map(item => formatDistrict(item))
);

const formatCommunes = (result) => (
  result.map(item => formatCommune(item))
);

const formatFokontany = (result) => (
  result.map(item => formatFokontanyItem(item))
);

module.exports = {
  formatFokontanyItem,
  formatCommune,
  formatDistrict,
  formatRegion,
  formatFokontany,
  formatCommunes,
  formatDistricts,
  formatRegions,
}