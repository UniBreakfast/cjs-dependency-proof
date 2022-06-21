module.exports = { getDependencies }

const { builtinModules } = require('module')
const { parse } = require('path')
const { getRequiredPaths } = require('./get-required-paths.js')
const { getModuleCode } = require('./get-module-code.js')
const { resolveDependencyPath } = require('./resolve-dependency-path.js')
const { removeComments } = require('./remove-comments.js')

const dependencyCache = {}

async function getDependencies(path) {
  if (dependencyCache[path]) return dependencyCache[path]

  if (builtinModules.includes(path)) return dependencyCache[path] = []

  const js = await getModuleCode(path)
  const requiredPaths = getRequiredPaths(removeComments(js))
  const { dir } = parse(path)

  return dependencyCache[path] = requiredPaths.map(resolveDependencyPath(dir))
}
