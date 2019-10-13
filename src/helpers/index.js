export function transformArrayOfObjectsToRows({ data, keys, link }) {
  const result = [];
  const links = [];
  try {
    data.forEach( d => {
      const row = [];
      links.push( d[link] );
      keys.forEach( key => row.push( d[key] ));
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

export function extractRowsFromObject({ data, keys }) {
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