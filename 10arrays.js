//Arrays

//arrays are defined in square brackets []
  // Values in the square brackets are known as Elements

//const Names = ["rahul","aman","nishant","krishna"]

//const myArr = [2,5,7,78,56,21,12,"aman",8.989]
//console.log(Names);

//const myHeros = ["hulk","iromn man","thor", "captian america"]

//const myHeros2 = new Array(1,2,6,7,5)

//Array indexing starts from 0 ==> to the first element
//console.log(myArr[6]);

//Note: The arrays are resizeable it means you can add more elements to that array

//Shallows copies ==> Whatever changes made in array are changed in original array.(copies share the same reference points)

//Deep copies ===> Whatever changes made in array are not changed in original array.(doesnt share the same reference points) 
 // If not understood while refernce watch heap 7 stack

//Whenever you do array copy operation it makes shallow copies and deep copies.

//=======================Array Methods==============================================/

//const myArr = [2,5,7,78,56,21,12,"aman",8.989]

//myArr.push(6) //This will add the element in the array 

//console.log(myArr);

//myArr.pop()

//console.log(myArr);
//pop method helps to remove the last elements of array


//================Shift and Unshift method of array=================//


//Incase of shift the element in added before every element
//this is not good for optimization and it takes lots of time to shift other element
//This can increase the Space & time complexity of code



//const myArr = [2,3,4,5,6,"anurag","nishant" ]

//myArr.unshift("aman")

//console.log(myArr)

//O.p: [ 'aman', 2, 3, 4, 5, 6, 'anurag', 'nishant' ]

//Here you can see in above code the element is added before other element


//const myArr2 = ["pandu","raja bhai","balu","ramu"]

//myArr2.shift()
//Incase of shift method the 1st element pandu is removed 

//console.log(myArr2)

//O.P: [ 'raja bhai', 'balu', 'ramu' ]

//========================Include method============================//

//This method is used to check the element is available in array or not
//Mostly used while comparing something (web -dev)



const marks = [34,44,54,22,66,82]


console.log(marks.includes(33))// 33 isnt available in array it will show boolean==>(False)

console.log(marks.includes(22))//22 is avaliable inarray o.p will be true


console.log(marks.indexOf(82)) // INdex of 82 is 5 <=== Output

console.log(marks)


//===============>Slice & Spice method<=========================
//CLear your concept watch recording
console.log("A" , marks)
// Slice means the element is added out of array 
//it doesn't goes in array
//O.p:- A [ 34, 44, 54, 22, 66, 82 ]

const myn1 = marks.slice()

console.log(myn1)


