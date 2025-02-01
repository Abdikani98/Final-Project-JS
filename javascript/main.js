
// document.addEventListener("DOMContentLoaded", function () {
//     // Button Click Example
//     const button = document.getElementById("myButton");
//     button.addEventListener("click", function () {
//         alert("Button clicked!");
//     });

//     // Mouse Events Example
//     const element = document.getElementById("myElement");
//     element.addEventListener("mouseover", function () {
//         element.style.backgroundColor = "green";
//     });
//     element.addEventListener("mouseout", function () {
//         element.style.backgroundColor = "blue";
//     });

//     // Keyboard Events Example
//     const textInput = document.getElementById("textInput");
//     const outputDiv = document.getElementById("output");

//     textInput.addEventListener("keydown", function (event) {
//         outputDiv.innerText = `Keydown: ${event.key}`;
//     });

//     textInput.addEventListener("keypress", function (event) {
//         outputDiv.innerText += `\nKeypress: ${event.key}`;
//     });

//     textInput.addEventListener("keyup", function (event) {
//         outputDiv.innerText += `\nKeyup: ${event.key}`;
//     });

//     // Focus Events Example
//     const focusInput = document.getElementById("focusInput");
//     const focusOutput = document.getElementById("focusOutput");

//     focusInput.addEventListener("focus", function () {
//         updateFocusOutput("Element focused!", "focused");
//     });

//     focusInput.addEventListener("blur", function () {
//         updateFocusOutput("Element blurred!", "blurred");
//     });

//     function updateFocusOutput(message, className) {
//         focusOutput.innerText = message;
//         focusOutput.className = className;
//     }

//     // Form Events Example
//     const formInput = document.getElementById("formInput");
//     const formOutput = document.getElementById("formOutput");
//     const form = document.getElementById("myForm");

//     formInput.addEventListener("input", function () {
//         if (formInput.value !== "") {
//             updateFormOutput("Input changed!", "valid");
//         } else {
//             updateFormOutput("Input changed with empty!", "invalid");
//         }
//     });

//     form.addEventListener("submit", function (event) {
//         event.preventDefault(); // Prevents the default form submission
//         updateFormOutput("Form submitted!", "valid");
//     });

//     function updateFormOutput(message, className) {
//         formOutput.innerText = message;
//         formOutput.className = className;
//     }

//     // Event Delegation Example
//     const parentList = document.getElementById("parentList");

//     parentList.addEventListener("click", function (event) {
//         if (event.target.tagName === "LI") {
//             alert("Clicked on: " + event.target.innerText);
//         }
//     });
// });


document.addEventListener("DOMContentLoaded", function () {
    // Button Click Example
    const button = document.getElementById("myButton");
    button.addEventListener("click", function () {
        alert("Button clicked!");
    });

    // Mouse Events Example
    const element = document.getElementById("myElement");
    element.addEventListener("mouseover", function () {
        element.style.backgroundColor = "green";
    });
    element.addEventListener("mouseout", function () {
        element.style.backgroundColor = "blue";
    });

    // Keyboard Events Example
    const textInput = document.getElementById("textInput");
    const outputDiv = document.getElementById("output");

    textInput.addEventListener("keydown", function (event) {
        outputDiv.innerText = `Keydown: ${event.key}`;
    });

    textInput.addEventListener("keypress", function (event) {
        outputDiv.innerText += `\nKeypress: ${event.key}`;
    });

    textInput.addEventListener("keyup", function (event) {
        outputDiv.innerText += `\nKeyup: ${event.key}`;
    });

    // Focus Events Example
    const focusInput = document.getElementById("focusInput");
    const focusOutput = document.getElementById("focusOutput");

    focusInput.addEventListener("focus", function () {
        updateFocusOutput("Element focused!", "focused");
    });

    focusInput.addEventListener("blur", function () {
        updateFocusOutput("Element blurred!", "blurred");
    });

    function updateFocusOutput(message, className) {
        focusOutput.innerText = message;
        focusOutput.className = className;
    }

    // Form Events Example with Validation
    const formInput = document.getElementById("formInput");
    const formOutput = document.getElementById("formOutput");
    const form = document.getElementById("myForm");

    formInput.addEventListener("input", function () {
        if (formInput.value !== "") {
            updateFormOutput("Input changed!", "valid");
        } else {
            updateFormOutput("Input changed with empty!", "invalid");
        }
    });

    form.addEventListener("submit", function (event) {
        if (formInput.value.trim() === "") {
            event.preventDefault(); // Prevents form submission
            updateFormOutput("Please fill out the input field!", "invalid");
        } else {
            event.preventDefault(); // Prevents the default form submission
            alert("Form submitted successfully!", "valid");
        }
    });

    function updateFormOutput(message, className) {
        formOutput.innerText = message;
        formOutput.className = className;
    }

    // Event Delegation Example
    const parentList = document.getElementById("parentList");

    parentList.addEventListener("click", function (event) {
        if (event.target.tagName === "LI") {
            alert("Clicked on: " + event.target.innerText);
        }
    });
});




//chapter one

function firstJsprogram(){
    console.log("Hello World");
    document.getElementById("hello").innerHTML ="Hello World";
}

//chapter Two
function number(){
    let age = 30;    
    let price = 19.99;
    console.log(age, price)
    document.getElementById("Num1").innerHTML = `age= ${age} <br> price = ${price}`
}

function Strings(){
    let name = "Mohamed";
    let message = 'Hello, World!';
    document.getElementById("string1").innerHTML = `name= ${name} <br> message = ${message}`
}

function Boolean(){
    let isVisible = true; 
    let isLoggedIn = false;
    document.getElementById("boolean1").innerHTML = `isVisible = ${isVisible} <br> isLoggedIn = ${isLoggedIn}`
}

function Undefined(){
    let undefinedVar; 
    console.log(undefinedVar);  // Outputs: undefin
    document.getElementById("Undefined1").innerHTML = `undefineVar = ${undefinedVar}`
}

function Null(){
    let emptyValue = null;
    document.getElementById("null1").innerHTML = `emptyValie = ${emptyValue}`
}

function Variables(){
    x = 10; 
    let tiro = 19;   
     const myName = "Abdikani";  
     var fariin = "Hi Saxiib";
     document.getElementById("Variables11").innerHTML = `x= ${x} <br> tiro =${tiro} <br> myName = ${myName} <br> fariin = ${fariin}  `
     
}

function ArithmaticOperators (){
    let result = 5 + 3; 
    console.log(result) // result is 8
    document.getElementById("Arithmetic1").innerHTML = `result ${result}`
}

function ComparisonOperators(){
    let isEqual = 2 === 3; 
    console.log(isEqual) //  isEqual is false
    document.getElementById("Comparison1").innerHTML = `isEqual ${isEqual}`
}


function LogicalOperators(){
    let True = true && false;  
        console.log(True) // false <br>
        let Abdikani = true || false; 
         console.log(Abdikani) // true <br>
          let isTrue = !true;  
          console.log(isTrue) // false
          document.getElementById("logical").innerHTML = `True ${True} <br> Abdikani ${Abdikani} <br>  isTrue ${isTrue}`
}


function AssignmentOperators(){
    let count = 10; 
     count += 5;  // count is now 15
     document.getElementById("assignment").innerHTML = `count ${count}`
}


function OtherOperators(){
    let age = 20; 
    let message = age > 18 ? "Adult" : "Junior"; 
    console.log(message)  // Adult
    document.getElementById("other").innerHTML = `age ${age} <br> message ${message}`
}


function IncrementOperator(){

    let x = 5; 
    let y = x++; // y will be 5, and x will be 6 <br>
    let z = 10; 
    let i = ++x; // y will be 11, and x will be 11
    document.getElementById("Increment1").innerHTML = `x ${x} <br> y ${y} <br> z ${z} <br> i ${i}`

}


function DecrementOperator (){
    let x = 8;
    let z = x--; // y will be 8, and x will be 7 <br>
    let i = 15; 
    let  y = --x; // y will be 14, and x will be 14 
    document.getElementById("Decrement1").innerHTML = `x ${x} <br> z ${z} <br> i ${i} <br> y ${y}`
}


function StringConcatenationimplicitconversion(){
    let age = 25; 
    let message = "I am " + age + " years old."; // Implicitly converts age to a string
    document.getElementById("string").innerHTML = `age ${age} <br> message ${message}`
}


function NumericOperationsimplicitconversion(){
    let numStr = "42"; 
    let result = numStr * 2; // Implicitly converts numStr to a number: result is 84
    document.getElementById("numeric1").innerHTML = `numStr ${numStr} <br> result ${result}`
} 


function ComparisonOperatorsimplicitconversion(){
    let num = 10; 
    let strNum = "5"; 
     console.log(num > strNum); 
     // Implicitly converts strNum to a number for comparison: true
     document.getElementById("comparison11").innerHTML = `num ${num} <br> strNum ${strNum}`
}


// /*chapter Three*/
function example1(){
    const age = 30; 
    const message = `My age is ${age} years. <br>
     I live in Mogadishu.`;
     document.getElementById("ex1").innerHTML = `age ${age} <br> message ${message}`
}


function UsingaTemporaryVariable(){
    let a = 5; 
     let b = 10; 
    let temp = a; 
     a = b; 
     b = temp; 
   console.log("After swapping: a = `+ a +, b = ` + b");
   document.getElementById("using1").innerHTML = `a ${a} <br> b ${b} <br> temp ${temp}`
}


function UsingArithmeticOperations(){
    let a = 5; 
    let b = 10; 
    a = a + b; 
    b = a - b; 
    a = a - b; 
    console.log("After swapping: a = `+ a +, b = ` + b");
    document.getElementById("using2").innerHTML = `a ${a} <br> b ${b}`
}




function ifStatement(){
    let age = 18; 
    if (age >= 18) { 
     console.log("you are an adult."); 
     }
     document.getElementById("ifStatement1").innerHTML = `age ${age} <br>  `
}


function elseifStatement(){
    let age = 18; 
     if (age >= 18) { 
    console.log("you are an adult."); 
     } else {
   console.log("You are a minor.");
   }
   document.getElementById("elseif").innerHTML = `age ${age} <br> `
}


function TheelseifStatement(){
    let grade = 85;
    if (grade >= 90){ 
     console.log("A") 
     } else if(grade >= 80){ 
      console.log("B") 
      }else { 
      console.log("C") 
       }
       document.getElementById("the1").innerHTML = `grade= ${grade} <br>`
       
}

function ternaryoperator() {
    let age=18;
    let isAdult = age >= 18? true : false; 
    console.log(isAdult);
    document.getElementById("ternary1").innerHTML = `isAdult ${isAdult}`
}

function Switchday(){
    let day="Saturday";
    switch(day) {
        case "Saturday":
            console.log("The first day of the week");
            break;
        case "Wednesday":
            console.log("Almost the weekend");
            break;
        default:
            console.log("It's regular day!");

    }
}


function iteration(){
    for (let i = 1; i <=5; i++){ 
        console.log (i); 
        document.getElementById("4loop").innerHTML = `i ${i}`

    }
}

function whileloop(){
    let i = 1;
     while (i <= 5){ console.log(i); i++;}
     document.getElementById("whileloop").innerHTML = `i ${i}`
}

function dowhileloop(){
    let i = 1; 
     do { 
    //  console.log(i); 
    document.getElementById("dowhile").innerHTML = `i ${i}`
     i++; 
     } while(i <= 5);
     
}


function Break() {
    for (let i = 0; i < 5; i++) { 
        if (i === 3) { 
            break;
        } 
        // console.log(i);
        document.getElementById("break1").innerHTML = `i ${i}`; 
    }
}


function Continue(){

    for (let i = 0; i < 5; i ++) { 
                 
        if (i===2){
            continue;

        }

        console.log(i);
        document.getElementById("continue1").innerHTML = `i ${i}`;
    }
}


// /*chapter4*/



function functionName() {
console.log("Hello, world!");
document.getElementById("Ex").innerHTML =`Hello World`;
}



function greet(Name){
console.log(`Hello, ${Name}!`);
document.getElementById("Ab").innerHTML = `Hello ${Name}!`;

}


function add(a,b) {
    return a+b;
}

var globalVariable="im in global scope"
function sayhello(){
    console.log(globalVariable);
    document.getElementById("sh").innerHTML = ` ${globalVariable} `
}




//chapter5

 //Array Literal
 function ArrayLiteral(){
    const arrr=["Abdirahman", "Ahmed", 55, true]
    document.getElementById("literal").textContent = `arrr = ${arrr}`
    // alert(arrr)
  }
 
 
 
 //Array Constructor
 function ArrayConstructor(){
    const num2=new Array("Abdirahman", "Ahmed", "Ali")
    document.getElementById("constructor").textContent = `num2 = ${num2}`
 // console.log(num2)
 }
 
 
 
 //Empty Array
 function EmptyArray(){
    const arr2=[];
    arr2[0]=100
    arr2[1]=true
    arr2[2]="ahmed"
    document.getElementById("Empty").textContent = `arr2 = ${arr2}`
 // console.log(arr2[2],arr2[0] )
 }
 
 
 
 //Array.from()
 function ArrayFrom(){
    let Name= Array.from("Hello! World");
    document.getElementById("arrayfrom").textContent = `Name = ${Name}`
 /*alert(Name);*/
 }
 
 
 
 //array initialize
 function ArrayInitialize(){
    const arrIni = new Array(3);//3
    arrIni[0]="Well";//5
    arrIni[1]="Well";
    arrIni[2]="Well";
    arrIni[3]="Well";
    arrIni[4]="Well";
    document.getElementById("arrayinitialize").textContent = `arrIni = ${arrIni}`
 // console.log(arrIni)
 }
 
 
 
 //spread operator
 function spreadOperator(){
    const arrS =[1,2,4,5,6];
    const arrN =[...arrS,7,8,9,10.11,"Abdikani","Ahmed","Ali","Aisha"];
    document.getElementById("spreadoperator").textContent = `arrs = ${arrS}  arrN = ${arrN}`
 //console.log(arrS,arrN);
 }
 
 
 //Array.of():
 function ArrayOf(){
    const myArray = Array.of();
    const mArr =[];
    document.getElementById("arrayof").textContent = `myArray = ${myArray}`
 console.log(myArray);
 }
 
 
 
 
 //Accessing Array Element
 
 function accessingArrayElement(){
    const fruits = ["Apple","Mango","cherry"];
    document.getElementById("accessingArrayElement").textContent = `fruits ${fruits}`
    //console.log(fruits[2])
 }
 
 
 
 //adding Element
 function addingElement(){
    const fruit = ["apple","Banana","Lemon"];
    document.getElementById("addingElement").textContent = `Before: ${fruit}`
    fruit.push("mango","apple","cherry");
    document.getElementById("addingElement1").textContent = `After: ${fruit}`
    
 }
 
 
 //shift
 function shiftElement(){
    const fruit1 = ["apple","Banana","Lemon"];
    document.getElementById("shiftElement").textContent = `Before: ${fruit1}`
 
    fruit1.shift();
    document.getElementById("shiftElement1").textContent = `After: ${fruit1}`
 
 }
 
 
 
 //unshifting
 function unshiftElement(){
    const fruit2 = ["apple","Banana","Lemon"];
    document.getElementById("unshiftElement").textContent = `Before: ${fruit2}`
    fruit2.unshift("mango");
     document.getElementById("unshiftElement1").textContent = `After: ${fruit2}`
 
 }

//  pop method

// function POPElemet(){
//     const fruit6 = ["apple","Banana","Lemon"]
//     fruit6.pop();
//     document.getElementById("popElement").textContent = `fruit6: ${fruit6}`
// }
 
 
 //
 
 
       //Adding
 function addUsingSplice(){
    const fruit3 = ["apple","Banana","Lemon"];
    document.getElementById("addUsingSplice").textContent = `Before: ${fruit3}`
    
       fruit3.splice(1,0,"orange");
       document.getElementById("addUsingSplice1").textContent = `After: ${fruit3}`
    
 }
  
 
 
    //Removing
 function removeUsingSplice(){
    const fruit4 = ["Milk","ice creem","chogolate"];
    document.getElementById("removeUsingSplice").textContent = `Before: ${fruit4}`
 
    fruit4.splice(2,1);
    document.getElementById("removeUsingSplice1").textContent = `After: ${fruit4}`
 
 }
 
 
    //update
 
 function updateUsingSplice(){
    const fruit5 = ["Milk","ice creem","chogolate"];
    document.getElementById("updateUsingSplice").textContent = `Before Update: ${fruit5}`
 //console.log("Before the update : ",fruit5);
    fruit5[1]= "Ahmed";
    document.getElementById("updateUsingSplice1").textContent = `After: ${fruit5}`
 //console.log("After the update : ",fruit5);
 }
 
//  filter

 function filterEvens() {
    const numbers1 = [1, 2, 3, 4, 5];
    function isEven(num) {
        return num % 2 === 0;
    }
    const evens = numbers1.filter(isEven);
    document.getElementById("filterEvensResult").innerText = "Evens: " + evens.join(", ");
 }
 
 // Sum: Isugeynta dhammaan waxyaabaha ku jira liiska
 function calculateSum() {
    const numbers2 = [1, 2, 3, 4, 5];
    function add(total, num) {
        return total + num;
    }
    const sum = numbers2.reduce(add, 0);
    document.getElementById("sumResult").innerText = "Sum: " + sum;
 }
 
 // SOME: Checks if at least one element meets a specified condition
 function checkSomeCondition() {
    const numbers3 = [1, 2, 3, 4, 5];
    function isGreaterThanThree(num) {
        return num > 3;
    }
    const hasLargeNumber = numbers3.some(isGreaterThanThree);
    document.getElementById("someConditionResult").innerText = "Has large number: " + hasLargeNumber;
 }
 
 // EVERY: Checks if all elements meet a specified condition
 function checkEveryCondition() {
    const numbers4 = [1, 2, 3, 4, 5];
    function isLessThanTen(num) {
        return num < 10;
    }
    const allSmall = numbers4.every(isLessThanTen);
    document.getElementById("everyConditionResult").innerText = "All less than ten: " + allSmall;
 }

//  Reduce
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("reduceButton").addEventListener("click", function () {
        const numbers = [1, 2, 3, 4, 5];
        const sum = numbers.reduce((acc, num) => acc + num, 0); // Wadarta tirooyinka
        document.getElementById("reduceResult").innerHTML = `Sum of Numbers: ${sum}`;
    });
});

// ForEach

 document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("forEachButton").addEventListener("click", function () {
        runForEach();
    });
});
 
 function runForEach() {
    const numbers = [1, 2, 3, 4, 5];
    let result = ""; // Waxaa lagu kaydin doonaa natiijada oo dhan
    numbers.forEach((number, index) => {
        result += `Index: ${index}, Number: ${number} <br>`;
    });
    document.getElementById("forEachResult").innerHTML = result; // Waa in la adeegsadaa `innerHTML`
}

    // Map()
    document.addEventListener("DOMContentLoaded", function () {
        document.getElementById("mapButton").addEventListener("click", function () {
            const numbers = [1, 2, 3, 4, 5];
            const squaredNumbers = numbers.map(num => num * num); // Isku dhufashada 2
            document.getElementById("mapResult").innerHTML = `Squared Numbers: ${squaredNumbers.join(", ")}`;
        });
    });
 
 // OBJECT: Ku darida xogta qofka
 function showPerson1() {
    const person1 = {
        firstName: "Abdikani",
        lastName: "Mohamud",
        age: 10
    };
    document.getElementById("person1Result").innerText = "Person1: " + JSON.stringify(person1);
 }
 
 // OBJECT: Hab kale oo object loo abuuro iyadoo `constructor` la adeegsanayo
 function createPerson() {
    function Person(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    const person = new Person("Abdikani", "Mohamud", 19);
    document.getElementById("personResult").innerText = "Person: " + JSON.stringify(person);
 }
 
 // OBJECT: Object leh for...in loop
 function iteratePerson2() {
    const person2 = {
        name: "abdikani",
        educ_level: "master",
        gra_status: "Active"
    };
    let result = "";
    for (let key in person2) {
        result += `${key}: ${person2[key]}\n`;
    }
    document.getElementById("person2Result").innerText = result;
 }
 
 // JSON: Object as JSON
 function showJSONPerson3() {
    const person3 = {
        name: "abdi",
        age: "19"
    };
    document.getElementById("person3Result").innerText = "Person3: " + JSON.stringify(person3);
 }
 
 // JSON: Qof iyo hiwaayadaha
 function showJSONPerson4() {
    const person4 = {
        person: {
            name: "abdi",
            age: "19"
        },
        hobbies: ["reciting quran", "praying", "reading", "swimming"]
    };
    const personDetails = JSON.stringify(person4.person);
    const hobbies = person4.hobbies.join(", ");
    document.getElementById("person4Result").innerText = "Person4: " + personDetails + "\nHobbies: " + hobbies;
 }



// chapter 6
        // Example 1: Update Text Content and Style
function updateText() {
    const textElement = document.getElementById('text');
    textElement.textContent = 'The text has been updated!';
    textElement.style.color = '#e91e63';
    textElement.style.fontWeight = 'bold';
    textElement.style.transition = 'color 0.3s ease';
}

// Example 2: Animate a Box with Random Color Change
function animateBoxWithColor() {
    const box = document.getElementById('box');
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    box.style.width = '150px';
    box.style.height = '150px';
    box.style.backgroundColor = randomColor;
    box.style.borderRadius = '50%';
}

// Example 3: Highlight Text
function highlightText() {
    const highlightElement = document.getElementById('highlightText');
    highlightElement.classList.add('highlight');
}

// Example 4: Add New Element with Remove Button
function addNewElement() {
    const container = document.getElementById('newElementContainer');
    
    // Create new paragraph
    const newElement = document.createElement('p');
    newElement.textContent = 'This is a new element added to the DOM!';
    newElement.style.color = '#fff';
    newElement.style.fontSize = '18px';
    newElement.style.marginTop = '15px';

    // Create remove button
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.style.marginLeft = '10px';
    removeButton.style.padding = '5px 10px';
    removeButton.style.backgroundColor = '#e74c3c';
    removeButton.style.color = 'white';
    removeButton.style.border = 'none';
    removeButton.style.cursor = 'pointer';
    
    // Remove element on button click
    removeButton.onclick = function () {
        container.removeChild(newElement);
    };

    // Append remove button to new element
    newElement.appendChild(removeButton);
    
    // Append new element to container
    container.appendChild(newElement);
}




// CALCULATOR PROGRAM
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    let display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}

// Assignments

function Addition()
{
    let num1=Number(prompt("enter number: "))
    if(isNaN(num1)) {
        alert("invalid");
        return;
    }
    let num2=Number(prompt("enter number: "))
    if(isNaN(num2)) {
        alert("invalid");
        return;
    }
    let total=num1+num2;
    alert("result is :"+total)
}

function Sub()

    {
        let num1=Number(prompt("enter number: "));
        if(isNaN(num1)) {
            alert("invalid");
            return;
        }
        let num2=Number(prompt("enter number: "));
        if(isNaN(num2)) {
            alert("invalid");
            return;
        }
        let total=num1-num2;
        alert(`the subtruction: ${num1} - ${num2} = ${total} `);
    }

function div()
{
    let lacgata_dhaxalka=parseInt(Number(prompt("Enter the wolth: ")));
    if(isNaN(lacgata_dhaxalka)) {
        alert('invalid');
        return;
    }
    const caruurta=2;
    let carur1=lacgata_dhaxalka/2;
    let carur2=lacgata_dhaxalka/2;


    alert("canuga koowaad waxa u leyahy: "+carur1);
    alert("canuga labaad waxa u leyahy: "+carur2);
}


function mult()
{
    let num1=Number(prompt("enter number: "));
    if(isNaN(num1)) {
        alert("invalid");
        return;
    }
    let num2=Number(prompt("enter number: "));
    if(isNaN(num2)) {
        alert("invalid");
        return;
    }
    let mult=num1*num2;
    alert(mult);

}
  
//     /*BREAK*/

function brea(){
    while(true) {
    let Name=prompt("enter your name: ");
    if(!isNaN(Name)) {
        alert("invalid");
    }
    if(Name.toLowerCase===('abdikani') || Name.toUpperCase===('ABDIKANI')) {
        break;
    }
    console.log(Name);
    
}

}
function continue1(){
    while(true) {
    let Name=prompt("enter your name: ");
    let myName='Abdikani';
    let MynameLower=myName.toLowerCase();
    let Mynameupper=myName.toUpperCase();

    if (Name===MynameLower||Name===Mynameupper) {
        continue;
    }
    console.log(Name);
    
}

}


//     /*GRADE*/

    function grade(){
        let sub1 = Number(prompt("ENTER SUHJECT1; "))
        if(sub1>100 || sub1<0) {
            alert("Invalid Number!")
        } 
        let sub2 = Number(prompt("ENTER SUHJECT2: "))
        if(sub2>100 || sub1<0) {
            alert("Invalid Number!")
        }
        let sub3 = Number(prompt("ENTER SUHJECT3: "))
        if(sub3>100 || sub1<0) {
              alert("Invalid Number!")
        }
        let sub4 = Number(prompt("ENTER SUHJECT4: "))
        if(sub4>100 || sub1<0) {
            alert("Invalid Number!")
        }
        let sub5 = Number(prompt("ENTER SUHJECT5: "))
        if(sub5>100 || sub1<0) {
            alert("Invalid Number!")
        }
        let sub6 = Number(prompt("ENTER SUHJECT6: "))
        if(sub6>100 || sub1<0) {
            alert("Invalid Number!")
        }
        let total = sub1+sub2+sub3+sub4+sub5+sub6;
        let avarage=total/6;
          
        
        // alert("the avarage is: " +avarage)
    
        if (avarage>90){
            alert("you have grade A")
        }else if(avarage>=80){
            alert("you have grade B")
        }else if(avarage>=70){
            alert("you have grade c")
        }else if(avarage>=60){
            alert("you have grade d")
        }else if(avarage<50){
            alert("sorry")
        }

        alert("the total of the subjects are: " + " " + total + "\n" + " " + "\n" + avarage);
        
    
    }

//     /* DO WHILE*/


function tiirarka() {

    let choice;
    do {
        console.log("Menu: 5 Pillars of Islam");
        console.log("1. Shahada (Faith)");
        console.log("2. Salah (Prayer)");
        console.log("3. Zakat (Charity)");
        console.log("4. Sawm (Fasting)");
        console.log("5. Hajj (Pilgrimage)");
        console.log("6. Exit");
        choice=Number(prompt("Choice (1-6): "));
        switch (choice) {
            case 1:
               alert("Shahada (Faith)");
                break;
            case 2:
               alert("Salah (Prayer)");
                break;
            case 3:
               alert("Zakat (Charity)");
                break;
            case 4:
               alert("Sawm (Fasting)");
                break;
            case 5:
               alert("Hajj (Pilgrimage)");
                break;
            case 6:
               alert("Existing the program");
            default:
               alert("invalid choice! please try again");

        }

    }while(choice<=6);

}

function tempreture(){
    let user = Number(prompt("enter rate of temperture "))
    let calculate=(user*9/5)+32;
    alert("the number of f is:  " +calculate)

}






//project
//DOM Elements
const imageInput = document.getElementById("imageInput");
const gallery = document.getElementById("gallery");
const recycleBin = document.getElementById("recycleBin");
const album = document.getElementById("album");
const favourites = document.getElementById("favourites");

// Initialization
initializeImageUpload();
initializeSlideshowControls();

// Function Definitions

// Initialize image upload functionality
function initializeImageUpload() {
  imageInput.addEventListener("change", handleImageUpload);
}

function handleImageUpload(event) {
  const files = Array.from(event.target.files);
  files.forEach((file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.src = e.target.result;

      // Add image to gallery
      const imageContainer = createImageContainer(img);
      gallery.appendChild(imageContainer);

      // Add image to album
      addToAlbum(img.src);
    };
    reader.readAsDataURL(file);
  });
}

// Create an image container with buttons and checkbox
function createImageContainer(imgElement) {
  const imageContainer = document.createElement("div");
  imageContainer.classList.add("image-container");
  imageContainer.style.position = "relative";

  const checkbox = createCheckbox();
  const deleteBtn = createDeleteButton(imageContainer, imgElement);
  const favouriteBtn = createFavouriteButton(imageContainer, imgElement);

  imageContainer.append(checkbox, imgElement, deleteBtn, favouriteBtn);
  return imageContainer;
}

function createCheckbox() {
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("select-checkbox");
  checkbox.style.position = "absolute";
  checkbox.style.top = "10px";
  checkbox.style.left = "10px";
  checkbox.style.zIndex = "10";
  checkbox.style.width = "20px";
  checkbox.style.height = "20px";
  return checkbox;
}

function createDeleteButton(imageContainer, imgElement) {
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "×";
  deleteBtn.classList.add("delete");
  deleteBtn.addEventListener("click", () => deleteImage(imageContainer, imgElement));
  return deleteBtn;
}

function createFavouriteButton(imageContainer, imgElement) {
  const favouriteBtn = document.createElement("button");
  favouriteBtn.textContent = "Love";
  favouriteBtn.classList.add("favourite");
  favouriteBtn.addEventListener("click", () => {
    addToFavourites(imgElement.src);
    gallery.removeChild(imageContainer);
  });
  return favouriteBtn;
}

// Add image to album
function addToAlbum(imageSrc) {
  const albumContainer = createImageContainer(new Image());
  albumContainer.querySelector("img").src = imageSrc;
  albumContainer.dataset.src = imageSrc;
  album.appendChild(albumContainer);
}

// Add image to favourites
function addToFavourites(imageSrc) {
  const favouriteContainer = document.createElement("div");
  favouriteContainer.classList.add("image-container");
  favouriteContainer.dataset.src = imageSrc;

  const favouriteImage = new Image();
  favouriteImage.src = imageSrc;

  const restoreBtn = document.createElement("button");
  restoreBtn.textContent = "Restore";
  restoreBtn.classList.add("restore");
  restoreBtn.addEventListener("click", () => {
    addToGallery(favouriteImage.src);
    favourites.removeChild(favouriteContainer);
  });

  favouriteContainer.append(favouriteImage, restoreBtn);
  favourites.appendChild(favouriteContainer);
}

// Add image back to gallery
function addToGallery(imageSrc) {
  const img = new Image();
  img.src = imageSrc;
  const imageContainer = createImageContainer(img);
  gallery.appendChild(imageContainer);
}

// Delete image
function deleteImage(imageContainer, imgElement) {
  const imageSrc = imgElement.src;
  gallery.removeChild(imageContainer);

  removeFromContainer(album, imageSrc);
  removeFromContainer(favourites, imageSrc);
  addToRecycleBin(imageSrc);
}

function removeFromContainer(container, imageSrc) {
  const items = container.querySelectorAll(`[data-src="${imageSrc}"]`);
  items.forEach((item) => container.removeChild(item));
}

function addToRecycleBin(imageSrc) {
  const recycleContainer = document.createElement("div");
  recycleContainer.classList.add("image-container");

  const recycleImage = new Image();
  recycleImage.src = imageSrc;

  const restoreBtn = createRestoreButton(recycleContainer, recycleImage);
  const permanentDeleteBtn = createPermanentDeleteButton(recycleContainer);

  recycleContainer.append(recycleImage, restoreBtn, permanentDeleteBtn);
  recycleBin.appendChild(recycleContainer);
}

function createRestoreButton(recycleContainer, imgElement) {
  const restoreBtn = document.createElement("button");
  restoreBtn.textContent = "Restore";
  restoreBtn.classList.add("restore");
  restoreBtn.addEventListener("click", () => restoreImage(recycleContainer, imgElement));
  return restoreBtn;
}

function createPermanentDeleteButton(recycleContainer) {
  const permanentDeleteBtn = document.createElement("button");
  permanentDeleteBtn.textContent = "Delete Permanently";
  permanentDeleteBtn.classList.add("delete-permanent");
  permanentDeleteBtn.addEventListener("click", () => {
    recycleBin.removeChild(recycleContainer);
  });
  return permanentDeleteBtn;
}

// Restore image
function restoreImage(recycleContainer, imgElement) {
  const newImageContainer = createImageContainer(imgElement);
  gallery.appendChild(newImageContainer);
  recycleBin.removeChild(recycleContainer);
  addToAlbum(imgElement.src);
}

// Slideshow Controls
function initializeSlideshowControls() {
  const slideshowControls = createSlideshowControls();
  document.querySelector(".container").appendChild(slideshowControls);
}

function createSlideshowControls() {
  const slideshowControls = document.createElement("div");
  slideshowControls.classList.add("slideshow-controls");

  const startSlideshowBtn = createButton("Start Slideshow", "slideshow-btn", startSlideshow);
  const stopSlideshowBtn = createButton("Stop Slideshow", "slideshow-btn", stopSlideshow);
  const selectAllBtn = createSelectAllButton();
  const deleteSelectedBtn = createButton("Delete Selected", "delete-selected-btn", deleteSelectedImages);
  const restoreAllBtn = createButton("Restore All", "restore-all-btn", restoreAllImages);

  slideshowControls.append(startSlideshowBtn, stopSlideshowBtn, selectAllBtn, deleteSelectedBtn, restoreAllBtn);
  return slideshowControls;
}

function createButton(text, className, onClick) {
  const button = document.createElement("button");
  button.textContent = text;
  button.classList.add(className);
  button.addEventListener("click", onClick);
  return button;
}

function createSelectAllButton() {
  let isAllSelected = false;
  const selectAllBtn = createButton("Select All", "select-all-btn", () => {
    const allImages = gallery.querySelectorAll(".image-container");

    if (allImages.length === 0) {
      alert("Sorry, there are no photos in the gallery to select all.");
      return;
    }

    isAllSelected = !isAllSelected;
    allImages.forEach((imageContainer) => {
      const checkbox = imageContainer.querySelector(".select-checkbox");
      checkbox.checked = isAllSelected;
      imageContainer.classList.toggle("selected", isAllSelected);
    });

    selectAllBtn.textContent = isAllSelected ? "Deselect All" : "Select All";
  });
  return selectAllBtn;
}

// Slideshow functionality
let slideshowInterval;
function startSlideshow() {
  const galleryImages = Array.from(gallery.querySelectorAll(".image-container img"));

  if (galleryImages.length === 0) {
    alert("First, you need to select a file to add a photo to the gallery.");
    return;
  }

  let currentIndex = 0;
  function highlightImage(index) {
    galleryImages.forEach((img, i) => {
      img.style.border = i === index ? "4px solid #6c63ff" : "none";
      img.style.transform = i === index ? "scale(1.1)" : "scale(1)";
    });
  }

  function showNextImage() {
    highlightImage(currentIndex);
    currentIndex = (currentIndex + 1) % galleryImages.length;
  }

  slideshowInterval = setInterval(showNextImage, 2000);
  showNextImage();
}

function stopSlideshow() {
  clearInterval(slideshowInterval);
  const galleryImages = Array.from(gallery.querySelectorAll(".image-container img"));

  if (galleryImages.length === 0) {
    alert("Sorry, there is no photo to stop in the gallery.");
    return;
  }

  galleryImages.forEach((img) => {
    img.style.border = "none";
    img.style.transform = "scale(1)";
  });
}

// Delete selected images
function deleteSelectedImages() {
  const selectedImages = gallery.querySelectorAll(".image-container.selected");

  if (selectedImages.length === 0) {
    alert("Choose an image to delete.");
    return;
  }

  selectedImages.forEach((imageContainer) => {
    const imgElement = imageContainer.querySelector("img");
    deleteImage(imageContainer, imgElement);
  });
}

// Restore all images from the recycle bin
function restoreAllImages() {
  const allRecycleImages = recycleBin.querySelectorAll(".image-container");

  if (allRecycleImages.length === 0) {
    alert("No images in the recycle bin to restore.");
    return;
  }

  allRecycleImages.forEach((recycleContainer) => {
    const imgElement = recycleContainer.querySelector("img");
    restoreImage(recycleContainer, imgElement);
  });

  alert("All images have been restored successfully.");
}


// Delete all images from the recycle bin
const deleteAllRecycleBinBtn = createButton("Delete All from Recycle Bin", "delete-all-recycle-btn", deleteAllFromRecycleBin);

// Add this button to the recycleBin section
recycleBin.appendChild(deleteAllRecycleBinBtn);

// Function to delete all images from the recycle bin
function deleteAllFromRecycleBin() {
  const allRecycleImages = recycleBin.querySelectorAll(".image-container");

  if (allRecycleImages.length === 0) {
    alert("Sorry, there are no images in the recycle bin to delete.");
    return;
  }

  allRecycleImages.forEach((recycleContainer) => {
    recycleBin.removeChild(recycleContainer);
  });

  alert("All images have been permanently deleted from the recycle bin.");
}




//  /*chapter7*/
// function handleClick() {
//     alert("You clicked the 'Click Me!' button!");
// }

// function handleHover() {
//     document.getElementById("hover-event").style.backgroundColor = "yellow";
// }

// function handleMouseOut() {
//     document.getElementById("hover-event").style.backgroundColor = "white";
// }

// // Handle keydown event
// function handleKeyDown() {
//     var inputText = document.getElementById("key-input").value;
//     if(inputText) {
//         document.getElementById("event-message").textContent = "You typed (keydown): " + inputText;
//     }
// }

// // Handle keypress event
// function handleKeyPress() {
//     var inputText = document.getElementById("key-input").value;
//     if(inputText) {
//         document.getElementById("event-message").textContent = "You typed (keypress): " + inputText;
//     }
// }

// // Handle keyup event
// function handleKeyUp() {
//     var inputText = document.getElementById("key-input").value;
//     if(inputText) {
//         document.getElementById("event-message").textContent = "You typed (keyup): " + inputText;
//     }
// }

// function showItemType(itemName) {
//     alert("You selected " + itemName); 
// }





