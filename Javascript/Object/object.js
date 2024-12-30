// Object in javascript
const user = {
    name: 'shobia',
    age: 28
}
user["like this video"] = true
delete user["like this video"]
// console.log(user)

const func = (function(a) {
    delete a; // reason it didn't get deleted because its a local variable and not an object
    return a
})(4)

// console.log("func", func) // func 4

const funct = (function(a) {
    delete a.b; // it gets deleted as its an object
    return a
})({b: 33, c: 34})

// console.log("func", funct) // func { c: 34 }