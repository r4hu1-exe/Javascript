//datatype is all about how data is stored and how you or user can access it!

//Primitive Datatype


//there are teh 7 types of datatypes

// String, Number, Boolean, Null(its an empty) ,Undefined(its not defined for now), Symbol(for uniqueness like in buttons in web pages), BigInt(its for scientific value like pie or ro or epsilon)


//Example:

//const id = Symbol('123')     //the id should be always unique for every user

//const anotherId = Symbol('123')

//console.log(id === anotherId)
 //Its showing false even we have give the same id 

 const bigNumber = 3754328974n

//for knowing the the variable datatypes
console.log(typeof bigNumber);


//Non-Primitive datatypes (Reference)

//Array, Object,Functions

//Array
const heros = ["hulk","shaktimaan","naagraj"]
console.log(heros);

//Object
//you are giving any variable null then its datatype will show as object
let myObj=
{
    name: "rahul",
    age: 21,
    location: "India",
    email:"brechtester@gmail.com"

}
console.log(myObj)

//if u are printing the datatype of function which is myObj it will also print function-object
//master the objects and web events in javascript for mastering JS *****Important******
