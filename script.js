var num1 = Number(prompt("Enter in your Total bill: "));
var tax = num1 * 0.07;
var tip = (tax + num1)*0.05;
var tot = (tax + tip) + num1;
var containerEle = document.body.querySelector(".container");
containerEle.innerHTML="Your total is: $" + tot;