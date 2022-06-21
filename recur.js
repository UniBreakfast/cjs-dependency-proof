module.exports = { recur }

async function recur(fn, arg, results = {}) {
  const resultArr = await fn(arg)
  
  results[arg] = resultArr
  
  await Promise.all(resultArr.map(async (arg) => {
    if (results[arg]) return
    
    await recur(fn, arg, results)
  }))
  
  return results
}
