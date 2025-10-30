//Question01
function calculate (a,b,type){
    if (type==="sum"){
        return a+b;
    }else if (type==="sub"){
        return a-b;
    }else if (type==="multiply"){
        return a*b;
    }else{
        return "Invalid type"
    }
}
console.log(calculate(5,3,"multiply"))

//Question 02
function getEvenNumber(arr){
    return arr.filter(num=>num%2===0)
}
console.log(getEvenNumber([1,2,3,4,5,6,]));

//Question 03

function findStudent(students, name) {
  return students.find(student => student.name === name);
}

const students = [
  { name: "Alice", age: 20 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 21 }
];

console.log(findStudent(students, "Bob"));

//Question05

function processNumbers(arr) {
  return arr.map(num => {
    if (num % 2 === 0) {
      return num * 2;     
    } else {
      return num - 1;     
    }
  });
}

console.log(processNumbers([1, 2, 3, 4])); 
console.log(processNumbers([5, 6, 7]));   
