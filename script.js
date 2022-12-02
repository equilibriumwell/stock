let highSchoolGrade = 11;
let yourGrade;

function updateGrade(){
switch (highSchoolGrade) {
  case 1:
    yourGrade = 9;
    
    break;
  case 2:
    yourGrade = 10;
    break;
  case 3:
    yourGrade = 11;
    
    break;
  default:
    yourGrade = 12;
    break;


}


}
updateGrade();

function name(){
  let firstName = firstName === "John" ? document.getElementById('demo').innerHTML = "Hello John": document.getElementById('demo').innerHTML = "Hello Human";


}

// in case 9, assign "Freshman" to the yourGrade variable
// in case 10, assign "Sophomore" to the yourGrade variable
// in case 11, assign "Junior" to the yourGrade variable
// in case 12, assign "Senior" to the yourGrade variable
// include a default case that assigns "Invalid" to yourGrade.

// switch (expression) {
//   case value1:
//     statement1;
//     break;
//   case value2:
//     statement2;
//     break;
//   case value3:
//     statement3;
//     break;
//   default:
//     defaultStatement;
// }