// Argument order

const map = cb => arr => arr.map(cb)

const arr = [1, 2, 3, 4, 5]
const double = n => n * 2

const withDouble = map(double)

console.log(
    '🚀 ~ file: 07-arg-order.js ~ line 11 ~ withDouble(arr)',
    withDouble(arr),
)

// Most specific => least specific (usually the data)

const prop = key => obj => obj[key]
const propName = prop('name')

const people = [{ name: 'Jamon' }, { name: 'Shirley' }, { name: 'Kent' }]

console.log(
    '🚀 ~ file: 07-arg-order.js ~ line 23 ~ map(propName)(people)',
    map(propName)(people),
)
