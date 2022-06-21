
require('./folder_1_level_deep/folder_2_level_deep/module.js')

const { resolve } = require('path/posix')
const { jsonToJS } = require('./json-to-js.js')
const { getDependencyPool } = require('./get-dependency-pool.js')
const { saveDependencyPool } = require('./save-dependency-pool.js')
const { sortDependencyPool } = require('./sort-dependency-pool.js')
const { buildDependencyTree } = require('./build-dependency-tree.js')
const { cleanUpDependencyPool } = require('./clean-up-dependency-pool.js')

getDependencyPool(resolve('./index.js'), { recurse: true })
  .then(sortDependencyPool)
  .then(cleanUpDependencyPool)
  .then(pool => {
    const dependencyTree = buildDependencyTree(pool, { bidirectional: true })

    console.log(pool)
    console.log(dependencyTree)
    // console.log(jsonToJS(JSON.stringify(dependencyTree, null, 2)))

    return JSON.stringify(pool, null, 2)
  })
  .then(jsonToJS)
  .then(saveDependencyPool)

setTimeout(() => { }, 8e8)
