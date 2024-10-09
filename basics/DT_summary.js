// Two types of datatypes : on how data is stored and access in memory

//  1) Primitive : Call by Value
//  2) Non Primitive : Call by Reference

// Primitive 

// 7 types : String , Number , Boolean, null, undefined , symbol, BigInt

const score = 100  // Number
const scoreValue = 100.3
const a = "ujjwal" // String
const isLoggedTemp = false // Boolean
const outsideTemp = null // null
let userEmail; //undefined

const id = Symbol('123')
const anotherid = Symbol('123')
//console.log(id==anotherid);

const bigNumber = 46263874429245n // bigint

// Reference (Non Primitve)

// Array , Object , Function


//Arrays 
const heroes = ["shaktiman", "naagraj",]

//Objects
let abc = 
{
    name: "Ujjwal",
    age: 22,
}

// Functionn
const myF = function () 
{
    console.log("hello world");
}


// console.log(typeof bigNumber); 
// console.log(typeof null);
// console.log(typeof scoreValue);
// console.log(typeof myF);
// console.log(typeof id);



// ************************************************

// Stack memory(Primitve) : gives a copy of variable declared , noting change in original value

//  Heap memory(Non Primitive) : gives a reference of original value , changes occured in original vlaue



// stack

let namee = "ujjwall"

let anothernamee = namee
anothernamee = "ujjwal"
console.log(anothernamee);
console.log(namee);

let user1 =
{
     email: "user@gmail.com",
     upi : "user@oksbi"
}

let user2 = user1

user2.email = "ujjwal@gmail.com"

console.log(user1.email);
console.log(user2.email);

// JavaScript is a dynamacaly typed language


