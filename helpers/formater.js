const formatFokontanyItem = (item) => {
  if (!item) {
    return null
  }
  return {
    id: item[0].value.id,
    name: item[1],
    code: item[5],
    province: item[1],
    region: item[4],
    district: item[3],
    commune: item[2],
  }
}

const formatCommune = (item) => {
  if (!item) {
    return null
  }
  return {
    id: item[0].value.id,
    name: item[1],
    code: item[5],
    province: item[4],
    region: item[3],
    district: item[2],
  }
}

const formatDistrict = (item) => {
  if (!item) {
    return null
  }
  return {
    id: item[0].value.id,
    name: item[1],
    code: item[4],
    province: item[3],
    region: item[2]
  }
}

const formatRegion = (item) => {
  if (!item) {
    return null
  }
  return {
    id: item[0].value.id,
    name: item[1],
    code: item[3],
    province: item[2],
  }
}


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