// Composition
const f = x => x + 2
const g = y => y * 2

console.log('🚀 ~ file: 06-composition.js ~ line 5 ~ f(g(5))', f(g(5)))

const scream = str => str.toUpperCase()
const exclaim = str => `${str}!`
const repeat = str => `${str} ${str}`

console.log(
    "🚀 ~ file: 06-composition.js ~ line 11 ~ repeat(exclaim(scream('i love egghead')))",
    repeat(exclaim(scream('i love egghead'))),
)

const compose =
    (...fns) =>
    x =>
        fns.reduce((acc, fn) => fn(acc), x)

const screamExclaimRepeat = compose(scream, exclaim, repeat)
console.log(
    '🚀 ~ file: 06-composition.js ~ line 21 ~ screamExclaimRepeat',
    screamExclaimRepeat('i love egghead'),
)
