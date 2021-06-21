let a = 0;
let operator = ''
let b =0;
let total = 0;

const screen = document.getElementById('screen');
const buttons = document.getElementsByClassName('num');
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
        screen.textContent += num
    })
});
/// listening for operator presses

operatorsArr = Array.from(operators);
operatorsArr.forEach( element => {
    element.addEventListener('click', function(e) {
        operator = (e.target.dataset.operator)
        if (a === 0) {
            a = screen.textContent;
            resetScreen();
        } else if (total !==0) {
            resetScreen();
            a = total;
            
            
        }
        
    })
});
/// listening for decimal

decimalArr = Array.from(decimal);
decimalArr[0].addEventListener('click', function(e) {
    if (screen.textContent.includes(".")) return;
    screen.textContent += ".";
})
/// listening for equal

equalArr = Array.from(equal);
equalArr[0].addEventListener('click', function(e) {
    if (a !== 0) {
        b = screen.textContent;
    screen.textContent = operate(operator,a,b)
    total = operate(operator,a,b)
    } 
    
})
///listening for AC

allClearArr = Array.from(allClear)
allClearArr[0].addEventListener('click', function(e) {
    a=0;
    b=0;
    total=0;
    operator = ''
    resetScreen();
})
///listening for Del

delArr = Array.from(del);
delArr[0].addEventListener('click', function(e){
    screen.textContent = screen.textContent.toString().slice(0, -1)
})
///helper functions
function resetScreen() {
    screen.textContent = '';
}
function deleteNumber() {
    screen.textContent = screen.textContent.toString().slice(0, -1)
}
function operate(operator,a,b) {
    a = Number(a);
    b = Number(b);

    switch(operator) {
        case "+":
           return add (a,b);
        case '-':
            return subtract (a,b);
            
        case "*":
            return multiply (a,b);
            
        case '/':
            if (b===0) {alert('No you dont!!')}
            return divide (a,b);
    }
}


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

