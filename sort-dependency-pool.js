module.exports = { sortDependencyPool }

const { sortObjectKeys } = require('./sort-object-keys.js')

function sortDependencyPool(pool) {
  sortObjectKeys(pool.dependencies)
  Object.values(pool.dependencies).forEach(items => items.sort())

  return pool
}
