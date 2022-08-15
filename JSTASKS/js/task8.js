let firstnumber = Number (prompt("enter the first number : "))
let secondnumber = Number (prompt("enter the second number : "))
let thirdnumber = Number (prompt ("enter the third number : "))
if (firstnumber>secondnumber&&secondnumber>thirdnumber){
    console.log("the frirst number is the biggest")
}
else if (secondnumber>firstnumber && firstnumber > thirdnumber){ 
    console.log("the second number is the biggest")
} else if (thirdnumber>firstnumber && thirdnumber>secondnumber){
    console.log("the third number is the biggest ")
} else console.log("error")
