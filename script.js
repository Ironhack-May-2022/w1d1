// javascript intro

// const text = 'hello world 🦄'
console.log('hello world 🦄')

// there are other methods available
// console.error('this is an error')

/*
this is a multiline comment
*/

// variables - named storage

// declare a variable
let user;
// console.log(user) // -> undefined

// assign a value to user
user = 'marco'
console.log(user)

// initializing a variable
let cat = 'tom'

// let mouse;
// let dog;

// in one line
let mouse, dog

// const  
const character = 'rick sanchez'
// character = 'morty' -> this does not work

// we want to use const whenever possible and in other cases let

console.clear()

// Data types
// there are two types: primitives and objects
// primitives are: string, nunber, boolean, null, undefined, symbol

// js is dynamically typed

let num = 23
console.log(typeof num)
num = '42'
console.log(typeof num)
console.clear()

// number
let distance = 9000
let price = 19.99

console.log('hello world' * 2) // -> NaN - Not a number

// mathematical operators
// + - / *
console.log(4 / 2)

const sum = 3 + 6
console.log(sum)

// modulo - %
const res = 7 % 2
console.log(res)
console.clear()

// shorthand writing

let x = 0
// increment x by 1
x = x + 1
x = x + 1
// shorter:
x += 1
// even shorter if you want to increment by 1 
x++
// x--
console.log(x)
console.clear()


// strings - sequence of characters

const greeting = 'hello'
const chars = '!!!'

// using + we concatenate strings (put them together)
const str = greeting + 'world' + chars

console.log(str)

// using backticks we can easily add variables 
const backticks = `${greeting} world ${chars} `
console.log(backticks)

console.clear()

// accessing characters in the string
// this gets the first character
console.log(greeting[0])

console.log(greeting.charAt(0))

// string properties
console.log(greeting.length)

// access the last char of a string
console.log(greeting[greeting.length - 1])

// indexOf returns the index of a char
console.log(greeting.indexOf('x'))

// lastIndexOf
console.log(greeting.lastIndexOf('l'))

// use includes to check if sth is contained in a string
const s = 'hello'
console.log(s.includes('ho'))

// slice() -> returns a substring of a string
const sliced = greeting.slice(0, 2)

console.clear()


// strings are immutable
// they cannot change - you need to reassign them
let name = 'marco'
console.log(name.toUpperCase())
name = name.toUpperCase()
console.log(name)

let hacker = 'yourname'
// get the first char of hacker
// uppercase the first char
// get the rest of hacker (after the first char)
// put them together
const firstCharacter = hacker[0].toUpperCase()
const rest = hacker.slice(1)
console.log(firstCharacter)
console.log(rest)
// hacker = firstCharacter + rest
hacker = hacker[0].toUpperCase() + hacker.slice(1)
console.log(hacker)
// 'Yourname'

console.clear()

// undefined and null
// undefined is the unintentional abscence of a value
// null is the intentional abscence of a value

// booleans -> either true or false

// booleans statements
// boolean operators < > <= >= and equality
console.log(2 > 3)

// check for equality
// === strictly equal also checks the type

// && logical and || logical or

console.log(4 > 3 || 5 > 4)


// conditionals
if (5 > 3) {
	console.log('this is true')
}

// truthy and falsy values -> 0, '', false, null, undefined, NaN
let password = ''
// check if password is set
if (password === '') {
	console.log('not set')
} else {
	console.log('it is set')
}

console.clear()

// const age = Number(prompt('what is your age?'))
// console.log(typeof age)
// if (age >= 18) {
// 	console.log('you can drive')
// } else if (age === 17) {
// 	console.log('you can drive with an adult')
// } else {
// 	console.log('you are too young to drive')
// }

// switch case

// const language = prompt('what is your language?')
// switch (language) {
// 	case 'french':
// 		console.log('bonjour')
// 		break;
// 	case 'english':
// 		console.log('hello')
// 		break;
// 	case 'german':
// 		console.log('guten tag')
// 		break;
// 	default:
// 		console.log('language not recognized')
// }

console.clear()

// loops

// for (let i = 1; i < 5; i++) {
// 	console.log('hello')
// }

// log the numbers from one to ten

// for (let i = 1; i < 11; i++) {
// 	console.log(i)
// }

// while loop
// let i = 1
// while (i < 11) {
// 	console.log(i)
// 	i++
// }

let userPassword

// show the prompt asking for the password
// if the password is correct
// -> alert ('granted granted')
// not correct -> show the prompt again
while (userPassword !== '123') {
	userPassword = prompt('what is the password?')
}
// if we reach this line the password is correct
alert('access granted')
