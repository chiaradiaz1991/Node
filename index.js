console.log('hello from node js')

const person = require('./person')
const Person = require('./class')
const newPerson = new Person("Chiara", "pink")


console.log(person)
console.log(newPerson.greeting())