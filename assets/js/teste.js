/* var y=0;
var x = 1;*/
//function soma(a ,b){
// console.log(a + b);
// return a + b;

//}

//soma(3, 5);
var currentNumberWrapper = document.getElementById("currentNumber")
var currentNumber = 0;

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}