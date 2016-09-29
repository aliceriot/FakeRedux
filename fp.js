// function methods
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

// array methods
const cons = curry((x, xs) => [x].concat(xs))

const map = curry((fn, xs) => xs.map(fn))

const arrcpy = xs => xs.concat()

const filter = curry((fn, xs) => xs.filter(fn))

const head = xs => xs[0]

const tail = xs => xs.slice(1)

const _rev = xs => xs.reverse()

const reverse = compose(_rev, arrcpy)

const len = xs => xs.length

const editHead = curry((fn, xs) => cons(fn(head(xs)), tail(xs)))

// strings
const strcpy = s => s.concat()

const toLower = s => s.toLowerCase()

const toUpper = s => s.toUpperCase()

const _firstCap = s => s.replace(/^./, toUpper(head(s)))

const capitalize = compose(_firstCap, toLower, strcpy)

const split = curry((sep, s) => s.split(sep))

const join = curry((char, s) => s.join(char))

const words = split(' ')

const sentence = join(' ')

const capitalizeSentence = compose(sentence, editHead(capitalize), words)

module.exports = {
  curry,
  compose,
  cons,
  map,
  arrcpy,
  filter,
  head,
  tail,
  _rev,
  reverse,
  len,
  editHead,
  strcpy,
  toLower,
  toUpper,
  _firstCap,
  capitalize,
  split,
  join,
  words,
  sentence,
  capitalizeSentence,
}
