module.exports = { sortObjectKeys }

function sortObjectKeys(obj) {
  const entries = Object.entries(obj)

  entries.sort(([a], [b]) => a.localeCompare(b))

  for (const [key, value] of entries) {
    delete obj[key]
    obj[key] = value
  }

  return obj
}
