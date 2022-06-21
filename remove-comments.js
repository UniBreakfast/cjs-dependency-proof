module.exports = { removeComments }

const jsCommentsRE = /\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm

function removeComments(js) {
  return js.replace(jsCommentsRE, '')
}
