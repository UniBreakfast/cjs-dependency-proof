module.exports = { cleanUpDependencyPool }

const startsWithLetterRE = /^[a-z]/

function cleanUpDependencyPool(pool) {
  const { entryPoint, dependencies } = pool
  const paths = Object.keys(dependencies)
    .filter(path => !startsWithLetterRE.test(path))

  const prefix = findCommonPrefix(paths, '/')
  const { length } = prefix

  pool.entryPoint = entryPoint.replace(new RegExp('^' + prefix), '.')

  const entries = Object.entries(dependencies)

  entries.forEach(([path, deps]) => {
    if (!startsWithLetterRE.test(path)) {
      delete dependencies[path]
      dependencies['.' + path.slice(length)] = deps.map(
        dep => !startsWithLetterRE.test(dep) ? '.' + dep.slice(length) : dep
      )
    }
  })

  return pool
}

function findCommonPrefix(strings, separator) {
  const [first, ...rest] = strings
  const parts = first.split(separator)

  let prefix = ''
  let possiblePrefix = parts.shift()

  while (rest.every(str => str.startsWith(possiblePrefix))) {
    prefix = possiblePrefix
    possiblePrefix += separator + parts.shift()
  }

  return prefix
}
