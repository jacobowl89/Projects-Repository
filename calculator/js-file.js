const calculation = document.getElementById("calculation")

const allowed = [1,2,3,4,5,6,7,8,9,0,"+","=","-","*","/","X","."]

const content = document.querySelector(".content")

const one = document.querySelector("#one")
const two = document.querySelector("#two")
const three = document.querySelector("#three")

const four = document.querySelector("#four")
const five = document.querySelector("#five")
const six = document.querySelector("#six")

const seven = document.querySelector("#seven")
const eight = document.querySelector("#eight")
const nine = document.querySelector("#nine")

const zero = document.querySelector("#zero")
const add = document.querySelector("#add")
const subtract = document.querySelector("#subtract")

const multiply = document.querySelector("#multiply")
const divide = document.querySelector("#divide")
const equal = document.querySelector("#equal")

const dot = document.querySelector("#dot")
const clear = document.querySelector("#clear")
const backspace = document.querySelector("#backspace")


const numbers = [one,two,three,four,five,six,seven,eight,nine,zero,add,subtract,multiply,divide]

const factors = [add,subtract,multiply,divide,equal]

function clearAll(){
    calculation.value = ""
}

function backspaceLast(){
    calculation.value = calculation.value.slice(0, -1)
}

function rulesRound(){
    calculation.value = Number(total)
        if (calculation.value.includes(".")){
            if (String(total).split(".")[1].length > 3){
                calculation.value = Number(total).toFixed(3)}}
}


function rules(){
    if (calculation.value.includes("/0")){
        calculation.value = ""

    } else if (calculation.value.includes("+")) {
        num = calculation.value.split("+")
        numOne = num[0]
        numTwo = num[1]
        total = Number(numOne) + Number(numTwo)
        rulesRound()        
    } else if (calculation.value.includes("-")) {
        num = calculation.value.split("-")
        numOne = num[0]
        numTwo = num[1]
        total = Number(numOne) - Number(numTwo)
        rulesRound()    
    } else if (calculation.value.includes("X")) {
        num = calculation.value.split("X")
        numOne = num[0]
        numTwo = num[1]
        total = Number(numOne) * Number(numTwo)
        rulesRound()    
    } else if (calculation.value.includes("x")) {
        num = calculation.value.split("x")
        numOne = num[0]
        numTwo = num[1]
        total = Number(numOne) * Number(numTwo)
        rulesRound()    
    } else if (calculation.value.includes("*")) {
        num = calculation.value.split("*")
        numOne = num[0]
        numTwo = num[1]
        total = Number(numOne) * Number(numTwo)
        rulesRound()    
    } else if (calculation.value.includes("/")) {
        num = calculation.value.split("/")
        numOne = num[0]
        numTwo = num[1]
        total = Number(numOne) / Number(numTwo)
        rulesRound()
        
    } 
}

function splitNumKeyboard(sign){
    num = calculation.value.split(`${sign}`)
        numOne = num[0]
        numTwo = num[1]
        if (numTwo.includes(".")){
            setTimeout(() => {  backspaceLast() }, 0.1);
        }
        
}

function checkDotsKeyboard(){
    if (calculation.value.includes("/")) {
        splitNumKeyboard("/")
    } else if (calculation.value.includes("X")){
        splitNumKeyboard("X")
    }else if (calculation.value.includes("x")){
        splitNumKeyboard("x")
    }else if (calculation.value.includes("*")){
        splitNumKeyboard("*")
    }else if (calculation.value.includes("+")){
        splitNumKeyboard("+")
    }else if (calculation.value.includes("-")){
        splitNumKeyboard("-")
    } else if (calculation.value.includes(".")){
        setTimeout(() => {  backspaceLast() }, 0.1);
    }
}

function splitNum(sign){
    num = calculation.value.split(`${sign}`)
        numOne = num[0]
        numTwo = num[1]
        if (numTwo.length > 0 && !numTwo.includes(".")){
            calculation.value += "."
        }
}

function checkDots(){
    if (calculation.value.includes("/")) {
        splitNum("/")
    } else if (calculation.value.includes("X")){
        splitNum("X")
    }else if (calculation.value.includes("x")){
        splitNum("x")
    }else if (calculation.value.includes("*")){
        splitNum("*")
    }else if (calculation.value.includes("+")){
        splitNum("+")
    }else if (calculation.value.includes("-")){
        splitNum("-")
    } else if (!calculation.value.includes(".")){
        calculation.value += "."
    }
}

function clickedEffect(sign){

    if (sign == clear || sign == backspace){
        if (String(sign.id).length > 0) {
        let saveId = sign.id
        sign.id = ""
        sign.classList.add("superChangeDif")
        setTimeout(() => {  sign.classList.remove("superChangeDif") }, 150);
        setTimeout(() => {  sign.id = saveId }, 150);}
    } else {

    if (String(sign.id).length > 0) {
        let saveId = sign.id
    sign.id = ""
    sign.classList.add("superChange")
    setTimeout(() => {  sign.classList.remove("superChange") }, 150);
    setTimeout(() => {  sign.id = saveId }, 150);}}}

dot.addEventListener("click", () => {
    checkDots()
    clickedEffect(dot)
})

clear.addEventListener("click", () => {
    clearAll()
    clickedEffect(clear)
})

backspace.addEventListener("click", () => {
    backspaceLast()
    clickedEffect(backspace)
})

equal.addEventListener("click", () => {
    clickedEffect(equal)
})

window.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        if (calculation.value.includes("/0")){
            calculation.value = ""
            alert("Dont divide by 0!")}
        rules()
        equal.classList.add("change")
        setTimeout(() => {  equal.classList.remove("change") }, 150);
        
    } 

    if (e.key == "1") {
        one.classList.add("change")
        setTimeout(() => {  one.classList.remove("change") }, 150);
    } 

    if (e.key == "2") {
        two.classList.add("change")
        setTimeout(() => {  two.classList.remove("change") }, 150);
    } 
    if (e.key == "3") {
        three.classList.add("change")
        setTimeout(() => {  three.classList.remove("change") }, 150);
    } 

    if (e.key == "4") {
        four.classList.add("change")
        setTimeout(() => {  four.classList.remove("change") }, 150);
    } 
    if (e.key == "5") {
        five.classList.add("change")
        setTimeout(() => {  five.classList.remove("change") }, 150);
    } 
    if (e.key == "6") {
        six.classList.add("change")
        setTimeout(() => {  six.classList.remove("change") }, 150);
    } 

    if (e.key == "7") {
        seven.classList.add("change")
        setTimeout(() => {  seven.classList.remove("change") }, 150);
    } 
    if (e.key == "8") {
        eight.classList.add("change")
        setTimeout(() => {  eight.classList.remove("change") }, 150);
    } 
    if (e.key == "9") {
        nine.classList.add("change")
        setTimeout(() => {  nine.classList.remove("change") }, 150);
    } 

    if (e.key == "0") {
        zero.classList.add("change")
        setTimeout(() => {  zero.classList.remove("change") }, 150);
    } 
    if (e.key == "x") {
        multiply.classList.add("change")
        setTimeout(() => {  multiply.classList.remove("change") }, 150)
        rules()
    }
    if (e.key == "X") {
        multiply.classList.add("change")
        setTimeout(() => {  multiply.classList.remove("change") }, 150)
        rules()
        
    }
    if (e.key == "*") {
        multiply.classList.add("change")
        setTimeout(() => {  multiply.classList.remove("change") }, 150)
        rules()
    }
    if (e.key == "/") {
        divide.classList.add("change")
        setTimeout(() => {  divide.classList.remove("change") }, 150);
        rules()
    } 

    if (e.key == "=") {
        equal.classList.add("change")
        setTimeout(() => {  equal.classList.remove("change") }, 150);
        rules()
        setTimeout(() => {  backspaceLast() }, 0.1);
    } 
    if (e.key == "+") {
        add.classList.add("change")
        setTimeout(() => {  add.classList.remove("change") }, 150);
        rules()
    } 
    if (e.key == "-") {
        subtract.classList.add("change")
        setTimeout(() => {  subtract.classList.remove("change") }, 150);
        rules()
    } 

    if (e.key === "Backspace") {
        backspace.classList.add("change")
        setTimeout(() => {  backspace.classList.remove("change") }, 150);
    } 
    if (e.key == ".") {
        dot.classList.add("change")
        setTimeout(() => {  dot.classList.remove("change") }, 150);
        checkDotsKeyboard()
    } 


})


factors.forEach(factor => factor.addEventListener("click", () => {
    
    rules()
}))


numbers.forEach(number => number.addEventListener("click", () => {

    clickedEffect(number)

    if (calculation.value.length < 14){
        calculation.value += number.textContent}

    if (calculation.value.includes("/0")){
        calculation.value = ""
        alert("Dont divide by 0!")}
    
}))


