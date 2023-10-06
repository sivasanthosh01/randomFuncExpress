let input=prompt("Enter the number (1-10)");
document.write(`The given number is ${input}<br><br>`)
console.log();

let random=(e)=>{
   let ran= Math.floor(Math.random()*10);
   console.log(ran);
   document.write(`Random number ${ran}<br><br>`)
   if(e==ran){
    document.write("Good Work")
   }
   else{
    document.write("Not Matched")
   }
}
random(input)