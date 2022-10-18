// if the buttons are all "button"

// const display = document.getElementById('display');
// const buttons = document.getElementsByClassName('button')
// for (let i=0; i<buttons.length; i++){
//     buttons[i].addEventListener('click',(event)=>{
//         switch(event.target.innerHTML){
//             case '=':
//                 display.innerHTML = eval(display.innerHTML)
//             default:
//                 display.innerHTML += event.target.innerHTML
//         }
// })
// }

const display = document.getElementById("display");
const clearbtn = document.getElementById("clear");
const equalsbtn = document.getElementById("equal");
const operators = document.getElementsByClassName("operator");
const buttons = document.getElementsByClassName("button");
// let operatorResult= false
let num1 = 0;
let num2 = 0;
let op = null;
let initialCal = true;
const calculate=()=>{
    if (op === "+") {
        num1=parseFloat(num1) + parseFloat(num2);
        display.innerHTML = num1;
        
      }
      if (op === "-") {
        num1=parseFloat(num1) - parseFloat(num2);
        display.innerHTML = num1;
      }
      if (op === "*") {
        num1=parseFloat(num1) *parseFloat(num2);
        display.innerHTML = num1;
      }
      if (op === "/") {
        num1=parseFloat(num1) / parseFloat(num2);
        display.innerHTML = num1;
      }
}
display.innerHTML = num1;

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", (event) => {
    console.log(initialCal, op);
    if (initialCal === false && !op) {
      display.innerHTML = "";
    }
    if (display.innerHTML === "0") display.innerHTML = event.target.innerHTML;
    else if (op && num2) {
      display.innerHTML += event.target.innerHTML;
      num2 = display.innerHTML;
    } else if (op) {
      display.innerHTML = event.target.innerHTML;
      num2 = display.innerHTML;
    } else display.innerHTML += event.target.innerHTML;
  });
}
// operator gargahdaa
for (let i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", (event) => {
if(!num2){
    op = event.target.innerHTML;
    num1 = display.innerHTML;
    console.log(op);
}else{
    calculate()
    op = event.target.innerHTML;
    num2=0;
}
    

  });
}
// clear
clearbtn.addEventListener("click", (event) => {
  console.log(event.target.innerHTML);
  num1 = 0;
  num2 = 0;
  op = "";

  display.innerHTML = num1;
});

equalsbtn.addEventListener("click", (event) => {
  calculate()
//   op = null;
//   num2 = null;
  initialCal = false;
});
