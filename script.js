//!Section 1: 1. Variables & Data types:
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
  //!II: Loops://
  for (let i = 0; i <=10; i++) {
    console.log(i);
  }

  for (let i =10; i <=400; i++) {
    console.log(i);
  }

  for (let i = 12; i <=4000; i +=3) {
    console.log(i);
  }

  //B. Get Even://
  for (let i=1; i <=100; i++) {
    if (i % 2 === 0) {
      console.log(i + "is an even number");
   } else {
        console.log(i);
      }
    }

//C. Give me Five://
for (let i = 0; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("I found a " + i + ". High Five! Three is a crowd.");
  } else if (i % 3 === 0) {
    console.log("I found a" + i + ". Three is a crowd." );
  } else if (i % 5 === 0) {
    console.log("I found a " + i + ". High five!");
  }
}

//-------------------------------------------------------------------------------------
//!III: Arrays & Control Flow:

//A. Talk about it in your group:

//*What are the things in an array called?:
//Arrays are "list-like" objects with keys of "0", "1", etc. They contain zero or more items called "elements".

//*Do arrays guarentee those things will be in order?:
//Yes, when the elements are stored in a specific order when assigned.

//*What real life things could you model with an array?:
//Class list, shopping list, music list.

//B. Easy Does It:
let quotes = [ "Don't bite the hand that feeds you.", "Spread love everywhere you go." , "Believe you can and you're halfway there."]

//C. Accessing elements:
const randomThings = [1, 10, "Hello", true];
const thing1 = randomThings[0];
console.log("The 1st element in the array is:", thing1);
randomThings[2] = "World";
console.log("New item:", randomThings);

//D. Change values:
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];

const thirdElement = ourClass[2];
console.log(thirdElement);

ourClass[4] = "Octocat";
console.log(ourClass);

ourClass.push("Cloud City");
console.log(ourClass);

//E. Mix It Up:
const myArray = [5, 10, 500, 20];
myArray.push("Aegon","Tragaryen");
myArray.shift();
myArray.unshift("Bob Marley");
myArray.pop();
myArray.reverse();

//F.Biggie Smalls://
let number = 85;
if (number < 100) {
  console.log("Little number!");
} else {
  console.log("Big number!");
}

//G.Monkey in the Middle://

let number2 = 7;
if (number2 < 5) {
  console.log("little number!");
} else if (number2 >10) {
  console.log("Big number!");
} else {
  console.log("Monkey!")
}