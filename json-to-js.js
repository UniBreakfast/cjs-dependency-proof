module.exports = { jsonToJS }

// accepts a json object and returns a string of javascript literal syntax
// removes all quotes from the keys and replaces double 
// quotes around values with single quotes
const jsonKeysRE = /"(\w+)"\s*:/g
const doubleQuotesWithoutEscapesRE = /(?<!\\)"/g

function jsonToJS(json) {
  return json
    .replace(jsonKeysRE, '$1:')
    .replace(doubleQuotesWithoutEscapesRE, "'")
}
