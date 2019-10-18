import CONFIG from 'CONFIG';

const { defaultComments } = CONFIG.company.comments || {};

const { columns, link } = CONFIG.table.compnaies;
const { keys } = CONFIG.company.info;

export function transformArrayOfObjectsToRows(companies) {
  const result = [];
  const links = [];
  try {
    companies.forEach(d => {
      const row = [];
      links.push( d[link] );
      columns.forEach(key => row.push( d[key] ));
      result.push(row);
    });
    if (link) return { result, links };
    return result;
  } catch (e) {
    throw new Error( `${ e }\n
      data should be an Array of Objects
      keys should be an Array of keys defined in data array
    `)
  }
}

export function extractRowsFromObject(data) {
  const result = [];
  try {
    Object.keys(keys).forEach( key => result.push([ keys[key], data[key] ]));
    return result;
  } catch (e) {
    throw new Error( `${ e }\n
      data & keys should be an Objects.
      data: { valueOfKeyToExtract: value }.
      kes: { valueOfKeyToExtract: nameOfValue }.
      result: [ [ nameOfValue, value ] ]
    `)
  }
}

export function preloadedState() {
  const comments = defaultComments || {};
  for (let i = 0; i < localStorage.length; i++) {
    let ticker = localStorage.key(i);
    comments[ticker] = JSON.parse(localStorage.getItem(ticker));
  }
  return comments
}