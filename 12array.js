//Concat and Spreading method is mostly same//


//Concat method:
//const marvels = ["thor","spiderman","ironman","widows"]
//const dc = ["batman","superman", "black adam", "shazam"]

//const both = marvels.concat(dc)

//console.log(both)

/*
//O.p: [
  'thor',
  'spiderman',
  'ironman',
  'widows',
  'batman',
  'superman',
  'black adam',
  'shazam'
]*/

//===========================>Spreading method============================//
//It is an widely used method

//const marvels = ["thor","spiderman","ironman","widows"]
//const dc = ["batman","superman", "black adam", "shazam"]

//const both = [...dc,...marvels] //this ... is known as spreading to spread the array elements

//console.log(both)

/*
O.p:
[
  'batman',
  'superman',
  'black adam',
  'shazam',
  'thor',
  'spiderman',
  'ironman',
  'widows'
]*/

const crazyArray = [1,2,3,[4,5,6,[11,22,33,[44,55,66,77]]]]

//const normalArray = [...crazyArray]//Instead of using spreading you can also use flat method 


/////////===============Flat Method//////////////////////////////////////

const normalArray = crazyArray.flat(Infinity)

//infinity is hack you can also do as per depth
console.log(normalArray)


/*Output: [
   1,  2,  3,  4,  5,  6,
  11, 22, 33, 44, 55, 66,
  77
] */


