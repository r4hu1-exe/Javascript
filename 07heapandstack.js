let User1=
{
    name: "rahul",
    age: 21,
    location: "India",
    email:"brechtester@gmail.com"

}
console.log(User1.name); //This is a way to call objects from functions

//like you can call User1.email

console.log(User1.email);


const Hackers= {
    Black:"Evil",
    White:"Saviour",
    Grey:"Crazy"
}
console.log(Hackers);
console.log(Hackers.Black)

//========================Heap & Stack==========================//

//In heap we get copied data it is stored like box above boxes

//In stack, its a single container where function fetches a Information and give original data available like above eg of User1

//This is example of heap the data of 2nd variable is copied from 1st

let Car = "honda"

console.log(Car)

let Bike = Car

Bike = "BMW" //Now Bike is changed to BMW

console.log(Bike)// it will give o/p honda


///============Eg of Stack(primitive)=================

let UserOne = {
    name:"Raju",
    upi:"raju@ybl",
    phone: 9981102312,
    email:"raju@raju.com"
}

let UserTwo = UserOne

UserTwo.email = "raju@google.com"
console.log(UserOne);//In this case UserOne email id is also getting changed //raju@google.com //JS  update the data reason behind this is the Non-primitive data
//It can be changed if the other function is shared (whole object can be modified)

//If it was Stack the userone would have same email as previous one and it cant be changed but in heap its get changed!

console.log(UserTwo); //Object is change===> email: raju@google.com