//Objects and events are important

//declaration of objects: singleton, literatals & constructor
//Object.crete =====>THis is for constructor


//Literal Method
//<===================This is known aS Objects
//   name = Keys  Rahul = Values
/*const JsUser = {
    name: "Rahul",
    email: "breachtester@gmail.com", 
    location: "Maharashtra",
    lastLogin: ("Monday","Saturday") //Note: If using double string you should close it with Round Bracket()
}
//IF KEY HAS SPACE IN IT TO ACCESS THAT OBJECT YOOU HAVE TO USE 2ND METHOD

//There are 2 methods to access the objects
console.log(JsUser.name)  //1

console.log(JsUser["location"]) //2

//==================================><==================================================//
//If you made an array of sysmbol & you have to call it in object

const mySym = Symbol("mykey1")

const data = Symbol("mykey2")

const DBMS = {
    name: "Nishant",
    email: "nishu12@gmail.com", 
    location: "Bihar",
    lastLogin: ["Monday","Saturday"],
    //Want to add that mySym array to the object you have to use 
    [mySym]: "mykey1",
    //mySym: "mykey1" //This is the wrong method
    data: "mykey2"
}


console.log(DBMS)

console.log(DBMS.location)

console.log(typeof [mySym])  //Type of this is known as object and this should be only used

console.log(typeof data)   //Type of this is known as SYmbol


//To overwrite any data/value in an object

DBMS.email = "nishant99@gmail.com"


//If you want to lock any data in object so other wont be able to change
        //   objectname.objectvalue
//Object.freeze(DBMS)

DBMS.lastLogin = "Friday" //This is not overided because of freeze

console.log(DBMS)

//To create a Function in Object

//You cannot add greeting to the object because it above code you have freezed the object
DBMS.greeting = function(){
    console.log("Hello DBMS Students")
}
console.log(DBMS.greeting) //See about that Function ==> anonymous
console.log(DBMS.greeting())
*/
//=================>Using string interpoletion to enhance the greeting
//This below code can be used as Template

const rubyUser = {
    name: "Anurag",
    email: "anurag2275@gmail.com", 
    location: "Bhopal",
    lastLogin: ["Monday","Saturday"] //Note: If using double string you should close it with Round Bracket()
}

rubyUser.greeting = function(){
    console.log(`Hello ${rubyUser.name} Welcome to our company, hope you will enjoy.Your working days are ${rubyUser.lastLogin} `)
}

console.log(rubyUser.greeting())