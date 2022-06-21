module.exports = { getDependencyPool }

const { getDependencies } = require('./get-dependencies.js')
const { recur } = require('./recur.js')

// 'path' should be an absolute or a root based path
async function getDependencyPool(path, {recurse = false} = {}) {
  const dependencies = recurse
    ? await recur(getDependencies, path)
    : await getDependencies(path)
  
  return { entryPoint: path, dependencies }
}
