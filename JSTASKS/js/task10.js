let number = Number(prompt("enter number of lines : "));
for (let i=1;i<= n;i++) {
  
  for (let j= 0;j<n-i;j++) // to print the space
  {
    console.log(' ');
  }
 
  for (let k = 0; k < i; k++) //to print the stars
   {
 console.log('*');
  }
  console.log();
}