let a = 0;
let operator = ''
let b =0;
let total = 0;

const screen = document.getElementById('screen');
const buttons = document.getElementsByClassName('btn');
const operators = document.getElementsByClassName('operator')
const decimal = document.getElementsByClassName('decimal')
const equal = document.getElementsByClassName('equal')
const allClear = document.getElementsByClassName('spanAc')
const del = document.getElementsByClassName('spanC')


/// listening for number buttons

buttonsArr = Array.from(buttons);
buttonsArr.forEach(element => {
    element.addEventListener('click', function(e){
        num = e.target.dataset.number
        if (operator === ''){
            screen.textContent += num
        } 
    })
});
/// listening for operator presses

operatorsArr = Array.from(operators);
operatorsArr.forEach( element => {
    element.addEventListener('click', function(e) {
        operator = (e.target.dataset.operator)
        
    })
});
/// listening for decimal

decimalArr = Array.from(decimal);
decimalArr[0].addEventListener('click', function(e) {
    console.log(e.target.dataset.decimal)
})
/// listening for equal

equalArr = Array.from(equal);
equalArr[0].addEventListener('click', function(e) {
    console.log(e.target.dataset.equal)
})
///listening for AC

allClearArr = Array.from(allClear)
allClearArr[0].addEventListener('click', function(e) {
    a=0;
    b=0;
    total=0;
    resetScreen();
})
///listening for Del

delArr = Array.from(del);
delArr[0].addEventListener('click', function(e){
    console.log(screen.textContent);
    screen.textContent = screen.textContent.toString().slice(0, -1)
    console.log(screen.textContent);
})
///helper functions



///operator functions
function add (a,b) {
    return a+b;
}
function subtract (a,b) {
    return a-b;
}
function multiply (a,b) {
    return a*b;
}
function divide (a,b) {
    return a/b;
}
function resetScreen() {
    screen.textContent = '';
}
function deleteNumber() {
    screen.textContent = screen.textContent.toString().slice(0, -1)
}