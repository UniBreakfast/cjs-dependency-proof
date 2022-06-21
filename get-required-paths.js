module.exports = { getRequiredPaths }

const requiredPathRE = /require\(['"]([^'"]+)['"]\)/g

function getRequiredPaths(js) {
  const requiredPaths = new Set

  let match

  while (match = requiredPathRE.exec(js)) {
    requiredPaths.add(match[1])
  }

  return Array.from(requiredPaths)
}
