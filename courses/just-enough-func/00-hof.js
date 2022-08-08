// Higher order functions
// 1. Accepts a function as an argument
// 2. Returns a new function

const withCount = fn => {
    let count = 0

    return (...args) => {
        console.log(`Call count: ${++count}`)

        return fn(...args)
    }
}

const add = (a, b) => a + b

const countedAdd = withCount(add)

console.log(countedAdd(1, 2))
console.log(countedAdd(2, 2))
console.log(countedAdd(3, 2))
