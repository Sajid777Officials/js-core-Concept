// push()
let fruits =["apple","mango"];
fruits.push("banana");
console.log(fruits);

// pop()
let person=["Sajid","Raihan","shimul"];
person.pop("shimul");
console.log(person);

// length
let number=[1,2,3,4,5];
console.log(number.length);

// shift()
let num1=[1,2,3,4,5];
num1.shift();
console.log(num1);

// unshift()

let num2=[1,2,3,4,5];
num2.unshift("Sajid");
console.log(num2);

// sort()
let num3=[1,2,3,4,5,15,11,9,5];
num3.sort();
console.log(num3);

// reverse()
let num4=[1,2,3,4,5,15,11,9,5];
num4.reverse();
console.log(num4);

// concat()
let num5=[1,2,3,4,5,15,11,9,5];
let person1=["Sajid","Raihan","shimul"];
let all =num5.concat(person1);
console.log(all);

// indexing
let num6=[1,2,3,4,5,15,11,9,5];
console.log(num6[3]);
console.log(num6[5]);

// array Type Checking
let fruits1=["Apple","Mango"];
let name1="Sajid";
console.log(Array.isArray(fruits1));
console.log(Array.isArray(name1));

// if else statement
let number01=5;
let reminder=(number01%2);
if (reminder==0){
    console.log('${number01} is even');
}else{
 console.log ('${number01} is Odd');
}
 

