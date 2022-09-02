export type DataStringObj = { [key: string]: string | Object }

export const flatten = (object: DataStringObj): DataStringObj => {
  if (!object) return {};
  return Object.keys(object).reduce((acc, curr) => {
    if (typeof object[curr] === 'string') {
      return { ...acc, [curr]: object[curr] }
    } else {
      const flatObject = flatten(object[curr] as DataStringObj)
      const concatKeyObject = Object.keys(flatObject)
        .reduce((dataObj, key) => ({ ...dataObj, [curr + '_' + key]: flatObject[key] }), {})
      return { ...acc, ...concatKeyObject }
    }
  }, {})
}