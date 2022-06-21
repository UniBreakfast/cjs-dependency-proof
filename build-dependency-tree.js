module.exports = { buildDependencyTree }

function buildDependencyTree(pool, { bidirectional = false } = {}) {
  const entries = Object.entries(pool.dependencies)

  const makeBaseObj = bidirectional
    ? () => ({ requires: {}, requiredBy: {} })
    : () => ({})

  const nodes = Object.fromEntries(
    [...new Set(entries.map(([key]) => key))].map(key => [key, makeBaseObj()])
  )

  for (const [key, dependencies] of entries) {
    for (const dep of dependencies) {
      if (bidirectional) {
        nodes[key].requires[dep] = nodes[dep]
        nodes[dep].requiredBy[key] = nodes[key]
      } else {
        nodes[key][dep] = nodes[dep]
      }
    }
  }

  return nodes[pool.entryPoint]
}
