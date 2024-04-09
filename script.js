//Section 1: 1. Variables & Data types:
//A. Variables & Data types:

const myName = "Cynthia";
let favoriteLanguage = "Python";
let newFavoriteLanguage = "JavaScript";
favoriteLanguage = newFavoriteLanguage;

console.log(`My name is ${myName} and my favorite language is ${favoriteLanguage}.`)


//------------------------------------------------------------------------------------
//B. Strings://

let firstVariable = "Hello World!";
firstVariable = 20;
let secondVariable = firstVariable;
console.log(firstVariable);
let yourName = "Cynthia";
console.log(`Hello, my name is ${yourName}.`)



//-------------------------------------------------------------------------------------
//C.Booleans://
const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a < b);
  console.log(c > d);
  console.log('Name' === 'Name');
  // FOR THE NEXT TWO, USE ONLY && OR ||
  console.log(true || false);
  console.log(false || false || false || false || false || true);
  console.log(false == false)
  console.log(e === 'Kevin');
  console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
  console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
  console.log(48 == '48');


  //-----------------------------------------------------------------------------------
  //D.The Farm://
  let animal = "cow";
  if (animal == "cow") {
    console.log("moooooooo!");
  } else {
    console.log("Hey! You are not a cow.");
  }

  //-----------------------------------------------------------------------------------
  //E.Driver's Ed//
  let age= 13;
  if (age >= 16) {
    console.log("Here are the keys!");
  } else { console.log("Sorry, you are too young.");
  }

  //-----------------------------------------------------------------------------------
  //Section 3: F.Biggie Smalls://
  let number = 85;
  if (number < 100) {
    console.log("Little number!");
  } else {
    console.log("Big number!");
  }
  //-----------------------------------------------------------------------------------
  //G.Monkey in the Middle://

  let number2 = 7;
  if (number2 < 5) {
    console.log("little number!");
  } else if (number2 >10) {
    console.log("Big number!");
  } else {
    console.log("Monkey!")
  }