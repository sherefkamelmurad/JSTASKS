let number =Number(prompt("enter the number to factoralize ")) 
let factor = 1 ; 
if(number == 0 || number == 1){ 
console.log("cannot be factoralize")

}else { 
for (let i = 1;i<=number;i++){ 
   factor *=i ;
}
console.log("the factor for the number is : "+factor)
}