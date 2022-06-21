module.exports = { resolveDependencyPath }

const { builtinModules } = require('module')
const { resolve } = require('path/posix')

const afterOptionalColonBeforeOptionalSlashRE = /(?:[^:\/]+:)?([^:\/]+)(?:\/.*)?$/
const endsWithJSextRE = /\.c?js$/

function resolveDependencyPath(path0) {
  return path => {
    if (builtinModules.includes(path)) {
      return path.match(afterOptionalColonBeforeOptionalSlashRE)[1]
    } else {
      let rootBasedPath = resolve(path0, path)

      if (!endsWithJSextRE.test(rootBasedPath)) rootBasedPath += '.js'

      return rootBasedPath
    }
  }
}
