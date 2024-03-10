//Objects with singletons/Constructor

// const TinderUser = new Object()

// const TinderUser = {}

// TinderUser.name = "sachin",
// TinderUser.id  = 3234,
// TinderUser.email = "sachin@gmail.com"


// console.log(TinderUser)
// console.log(typeof TinderUser.id)
/*
const Google ={
    email: "someone@google.com",
    //Declaring objects in objects

    fullname: {
        userFullname:{
            Name:"Rahul",
            Surname: "Mishra",
            fatherName : "Dineshkumar"
        }
    },
   UserId: 8989

}

//console.log(Google)

//console.log(Google.fullname.userFullname.Name) //To access the internal object of object

*/

//===============================How to merge the object in Js<=========================

// const obj1 = {
//     1 : "a",
//     2 : "b"
// }

// const obj2 = {
//     3: "c",
//     4: "d"

// }
//Now to merge both the object 
//There are to methods which was also used in array

//const obj3 = {obj1, obj2}
//O.P: { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

//=======================================<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<====================
//const obj3 = Object.assign({}, obj1, obj2)


//{} <==== you should use this while assigning to get perfect output its also known as empty array


// O.p: { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }




////The best method to merge the object is by using Spreading


// const obj3 = {...obj1, ...obj2} //this is best way to merge obj & array both
// console.log(obj3)



//===============================================================================================,.,,,,,,.==============

// To fetch from DB this will be mostly used\


const BandlabUser = {
    name: "Anurag",
    email:"anurag2275@gmail.com", 
    location: "Bhopal",
    
}

console.log(BandlabUser)

console.log(Object.keys(BandlabUser));  //For Keys

console.log(Object.values(BandlabUser));   //For Values //Hack  //Datatype of this is array
//yOU CAN USE THIS in further operation

console.log(Object.entries(BandlabUser)) //become the pair of keys and values

//To check the user has some properties like true or false

console.log(BandlabUser.hasOwnProperty('password'))//to check if there is key name password is available or not

//Hack
