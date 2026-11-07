let age=18
let isLoggedIn=false
let state=null
//number
//bigint
//string
//boolean
//undefined
//symbol=>unique
//Array
//Object
console.log(typeof age);//number
console.log(typeof null);//object
console.log(typeof undefined);//undefined
//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

isLoggedIn = false
const outsideTemp = null
let userEmail;//undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);//false

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);//symbol
//Stack(Primitive),copy
//Heap(Non Primitive),Reference
let myYoutubeName="hiteshchaudharydotcom"
let anothername=myYoutubeName
anothername="chaiaurcode"
console.log(anothername)//chaiaurcode
console.log(myYoutubeName);//hiteshchaudharydotcom

//non primitive
let userone={
    email:"user@gmail.com",
    name:"Nitin"
}
let usertwo=userone
usertwo.email="n@gmail.com"
console.log(userone.email);//n@gmail.com
console.log(usertwo.email);//n@gmail.com





