module.exports = { getModuleCode }

const { readFile } = require('fs/promises')

function getModuleCode(path) {
  return readFile(path, 'utf8')
}
