//This are some basic comparison
//console.log(2 > 1);
//console.log( 2 >= 1);
//console.log( 2 != 1);
//console.log( 2 == 2); //this will result in boolean 
 

//===========What if we do comparison between different datatypes=============//like

console.log("2" >= 1);  //it will return true it means it works

console.log(2 >= "5") //this is also working (false)


console.log("2" <= "5") //this is also working  (true)

//Javascript converts the string into no. but sometimes it may not convert the string perfectly and it may give u error.
//So always make sure that you have same datatypes while comparing

console.log(null > 0)
console.log( null == 0)
console.log(null >= 0) //This might show you error some time (its fault of javascript) 
//null doesnt have any value or its an empty one 
//some times null gets converted to zero thats why null >= 0 is printing true

//Now lets check undefined

console.log(undefined == 0) //false
console.log(undefined != 0) //true
console.log(undefined >= 0) //false
//we can see here while comparing if its less then or greater then its showing false  just because its undefined 
console.log(undefined <= 0) //false


// === this is known as strict check (====)

console.log("2" === 2) //this is showing false just because of strict check
