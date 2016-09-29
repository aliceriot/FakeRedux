const curry = func => {
  const nargs = func.length

  const acc = (...old) => (...cur) => {
    let args = old.concat(cur)
    return args.length >= nargs ? func(...args) : acc(...args)
  }
  return acc
}

const map = curry((fn, xs) => xs.map(fn))

module.exports = { curry, map }
