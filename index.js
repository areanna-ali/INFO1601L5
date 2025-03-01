/*let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];// 10 elements

for(let i=0; i< a.length; i++){
  console.log(a[i])
}

let radius = 7;
const pi = 3.14;

let area = radius * radius * pi;
console.log(area)

let name = "bob";
let age = 24;

console.log(typeof(name))
console.log(typeof(age))

console.log(`Hello my name is ${name}, I'm ${age} years old`);


console.log(`I was born in ${2020 - age}`)


console.log('1' == 1); 
console.log(1 == true); 
console.log("false" == false); 
console.log("false" == true); 

if("false")
   console.log("Hello false!") 

console.log('1' === 1); 
console.log(1 === true); 
console.log("true" === true);

for(let i=0; i< 50; i++){
  if(i %3 === 0 && i%5 === 0){
    console.log('fizzbuzz');
  }else if(i%3 === 0){ 
    console.log('fizz');
  }else if(i%5 === 0){
    console.log('buzz');
  }else{              
    console.log(i);
  }
}

let roundDown = Math.floor(6.8674);

let roundUp = Math.ceil(2.283);

let absolute = Math.abs(-2);

let randNum = Math.random() + 1;

function happyPrint(string){
  console.log("😀: "+string);
 }
 
 function sadPrint(string){
  console.log("😢: "+string);
 }
 
 function add(a, b, callback){
    let ans = a + b;
    callback(ans);
 }
 
 add(5, 10, happyPrint);
 add(11, 12, sadPrint);

function printDate(){
  console.log(Date().toLocaleTimeString());
}
     
setInterval(printDate, 1000);

let arr = [ -5, 16, 33, 42, 103, 344];

console.log(arr.includes(-5));

arr.push(11);

console.log(arr);

//let lastItem == arr.pop();
console.log(lastItem, arr);

arr.unshift(22);

console.log(arr);

let firstItem = arr.shift();
console.log(firstItem, arr);

let reversed = arr.reverse();
console.log(reversed);
console.log(arr.join('-'));

function createPerson(name, height, weight) {
  return { name: name, height: height, weight: weight };
}

function calcBMI(weight, height) {
  return weight / (height * height);
}

function avgBMI(people) {
  let sum = 0;
  for (let person of people) {
    sum += calcBMI(person.weight, person.height);
  }
  return sum / people.length;
}

let people = [
  createPerson("Sally", 60, 2.5),
  createPerson("Ben", 81, 3),
  createPerson("Shelly", 50, 1.7)
];

console.log(avgBMI(people));*/

//object literal
let bob = {
  fname: "bob",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1603',
      grades: [ 89, 34, 67 ]
    },
    {
      course: 'INFO 1601',
      grades: [ 89, 34, 67 ]
    }
  ]
};

let sally = {
  fname: "sally",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1601',
      grades: [ 100, 89, 79 ]
    }
  ]
};

let paul = {
  fname: "paul",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1600',
      grades: [ 89, 34, 67 ]
    }
  ]
};

const students = [bob, sally, paul];

function getAverageGrade (student, course) {
  let sum = 0;
  if (course === student.course) {
    for (let grade of students.grades) {
          sum = sum + grade;
          let average = sum / 3;
          return average;
    }
  }
  else {
    return -1;
  }

  console.log(getAverageGrade(bob, INFO1601));

  function getAssignmentMark(student, course, num) {
    if(course === student.course) {
      return student.grades[num];
    }
    else {
      return -1;
    }
  }

  console.log(getAssignmentMark(bob, INFO1601, 2));

  function averageAssessment(students, courseName, assignment) {
    let sum = 0;
    let count = 0;
    for (let item of students) {
      if(students.course === courseName) {
        sum = sum + students.grade[assignment];
        count ++;
      }
    }
    let average = sum/count;
    return average;
  }

  console.log(averageAssessment(bob, INFO1601, 2));
}