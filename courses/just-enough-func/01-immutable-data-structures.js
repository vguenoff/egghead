// Immutable Data
// Mutable = can be changed after creation

const a = [1, 2, 3]
const b = a // it's the same reference

b.push(4)
console.log(a === b, a, b)

// it's the same with objects
const c = { foo: 'bar' }
const d = c

d.asd = 'asd'
console.log(c === d, c, d)

// Immutable = can't be changed after creation

// immutable push
const push = value => array => {
    const clone = [...array]
    clone.push(value)

    return clone
}

const e = [1, 2, 3]
const f = push(4)(e)
console.log('🚀 ~ file: 01-immutable-data-structures.js ~ line 28 ~ e', e)
console.log('🚀 ~ file: 01-immutable-data-structures.js ~ line 29 ~ f', f)

class MutableGlass {
    constructor(content, amount) {
        this.content = content
        this.amount = amount
    }

    takeDrink(value) {
        this.amount = Math.max(this.amount - value, 0)
        return this
    }
}

const mg1 = new MutableGlass('water', 100)
const mg2 = mg1.takeDrink(20)
console.log(
    '🚀 ~ file: 01-immutable-data-structures.js ~ line 45 ~ mg1 === mg2',
    mg1 === mg2,
)
console.log(
    '🚀 ~ file: 01-immutable-data-structures.js ~ line 47 ~ mg2',
    mg1.amount,
    mg2.amount,
)

class ImmutableGlass {
    constructor(content, amount) {
        this.content = content
        this.amount = amount
    }

    takeDrink(value) {
        return new ImmutableGlass(
            this.content,
            Math.max(this.amount - value, 0),
        )
    }
}

const mg3 = new ImmutableGlass('water', 100)
const mg4 = mg3.takeDrink(20)
console.log(
    '🚀 ~ file: 01-immutable-data-structures.js ~ line 45 ~ mg3 === mg4',
    mg3 === mg4,
)
console.log(
    '🚀 ~ file: 01-immutable-data-structures.js ~ line 47 ~ mg4',
    mg3.amount,
    mg4.amount,
)
