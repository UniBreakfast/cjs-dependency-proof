module.exports = { saveDependencyPool }

const { writeFile } = require('fs/promises')

async function saveDependencyPool(js) {
  await writeFile('dependency-pool.js', `const dependencyPool = ${js}`, 'utf8')
}
