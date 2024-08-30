//27 Feb 2024
//Chapter: 14 Switch Statement in JS
//Switch statement is used to perform different actions based on different conditions
//==================Syntax for switch==================================================
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

//===================================================Example 1=========================================




const month = 1
switch (month) {
    case 1:
        console.log("January")
      //  break;  //if break is not used then it will print next case as well
        case 2:
            console.log("February")
           break;
            case 3:
        console.log("March")
        break;
        case 4:
        console.log("April")
        break;
    default:
        console.log("default case matched")
        break;
}