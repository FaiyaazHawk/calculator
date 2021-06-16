let a;
let operator
let b;
let total;

/// listening for number buttons
buttons = document.getElementsByClassName('btn');
buttonsArr = Array.from(buttons);
buttonsArr.forEach(element => {
    element.addEventListener('click', function(e){
        if (e.target.dataset.number){
        console.log(e.target.dataset.number)
        } else {
            return;
        }
    })
});
console.log(buttons);
/// listening for operator presses
operators = document.getElementsByClassName('operator')
operatorsArr = Array.from(operators);
operatorsArr.forEach( element => {
    element.addEventListener('click', function(e) {
        console.log(e.target.dataset.operator)
    })
});
/// listening for decimal
decimal = document.getElementsByClassName('decimal')
decimalArr = Array.from(decimal);
decimalArr[0].addEventListener('click', function(e) {
    console.log(e.target.dataset.decimal)
})
/// listening for equal
equal = document.getElementsByClassName('equal')
equalArr = Array.from(equal);
equalArr[0].addEventListener('click', function(e) {
    console.log(e.target.dataset.equal)
})
///listening for AC
allClear = document.getElementsByClassName('spanAc')
allClearArr = Array.from(allClear)
allClearArr[0].addEventListener('click', function(e) {
    console.log(e.target.dataset.clear)
})
///listening for Del
del = document.getElementsByClassName('spanC')
delArr = Array.from(del);
delArr[0].addEventListener('click', function(e) {
    console.log(e.target.dataset.delete)
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

