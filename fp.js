const curry = (fn, ...init) => {
  const nargs = fn.length

  const acc = (...old) => (...cur) => {
    let args = old.concat(cur)
    return args.length >= nargs ? fn(...args) : acc(...args)
  }
  return acc(...init)
}

const compose = (...fs) => (...a) => (
  len(fs) === 1 ? head(fs)(...a) : head(fs)(compose(...tail(fs))(...a))
)

const map = curry((fn, xs) => xs.map(fn))

const filter = curry((fn, xs) => xs.filter(fn))

const head = xs => xs[0]

const tail = xs => xs.slice(1)

const reverse = xs => xs.reverse()

const len = xs => xs.length

const isSingleton = xs => len(xs) === 1

// strings
const strCpy = s => s.concat()

const toLower = s => s.toLowerCase()

const toUpper = s => s.toUpperCase()

const firstCap = s => s.replace(/^./, toUpper(head(s)))

const capitalize = compose(firstCap, toLower, strCpy)

module.exports = {
  curry,
  map,
  filter,
  head,
  tail,
  reverse,
  len,
  compose,
  capitalize,
  toLower,
  toUpper,
  firstCap,
}
