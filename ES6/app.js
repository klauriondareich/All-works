// This is my javascript code //

// a function using a Rest parameter //

const testingRestParameter = (...elements) =>{
  elements.forEach( elt => console.log(elt))
}
testingRestParameter(100,200,300);

// end //

// Array Destructuring //

let myFavouriteSports = ['Judo','Football','Basket Ball','Hand Ball'];
let [first,second, ...others] = myFavouriteSports;
console.log(first);
console.log(others);
console.log(second);

// End //

// Object Destructuring //

const bill = {
  amount : 500,
  currency: 'Dollar'
}
let amount, currency;
({amount, currency} = bill);
console.log(amount + " " + currency + " paid to the cashier");

// End //

// Spread Operator //

const personIdentity = (name, lastname,age) =>{
  console.log(name + " " + lastname + " " + age + " ans");
}
let personInfo = ["Laurion","Dareich", 22];
personIdentity(...personInfo);

// End //

// IIFE = Invoked Immediately Function Expression //

let app = (function (sentence){
  console.log(sentence);
  return {};
})("Invoke my function now")
console.log(app);

// End //

// Call and Apply function //

const student = {
  cardNumber: 97363,
  getInfo(prefix){
    return prefix + this.cardNumber;
  }
}
const newCardNumber = {
  cardNumber: 65544
}
// console.log(student.getInfo.call(newCardNumber)); If you want to test this line of code, remove prefix parameter in getInfo()//
console.log(student.getInfo.apply(newCardNumber, ["ID : "]));

// End //

// Function Constructor //

function FullInformation(name, id){
  this.name = name;
  this.id = id;
  this.age = " 12 ans";
  this.display = function(){
    console.log(`${this.name} ${this.age} ${this.id}`);
  }
}
let Eleve = new FullInformation("Laurion", "2333");
Eleve.display();

// Prototype //

function FullInformation(name, id){
  this.name = name;
  this.id = id;
  this.age = " 12 ans"
}
FullInformation.prototype.display = function(){
  console.log(`${this.name} ${this.age} ${this.id}`);
}
let Eleve = new FullInformation("Laurion", "2333");
Eleve.display();

// Array Iteration //

let carIds = [
  {cardId: 123, style: 'sedan'},
  {cardId: 456, style: 'convertible'},
  {cardId: 789, style: 'sedan'}
]
// this returns a array of elements that match the condition //

let convertibles = carIds.filter(item => item.style === "convertible");
console.log(convertibles);

// this returns true or false when the element is found or not //

let isTrue = carIds.every(item => item.cardId > 0);
console.log(isTrue);

// this returns the first element that matches the condition //

let firstElt = carIds.find(item => item.cardId > 500);
console.log(firstElt);
