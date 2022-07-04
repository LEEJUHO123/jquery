//basic.js
// ES2015 => let, const
// 변수의 선언 : var, let

var fname = 'hello'; // string
fname = 100;  //number
fname = true; //boolean (참 거짓)
fname = null; // '', 0 => null : object

var lname; //undefined

console.log(typeof fname);
console.clear();

var lname = 'Hong';
console.log(lname);

{
let lname = 'Hwang';
console.log(lname);
}
console.log(lname);

{
let lname = 'Park';
console.log(lname);
}

const age = 10; //상수선언.
//age = 20;

// 학생 : 이름, 나이, 학생번호 => 오브젝트.
const student = {
  fname : '홍길동',
  age : 20,
  sno: '22-0001',
  info: function(){ // 메소드.
    return this.fname + ', ' + this.age;
  }
}
console.log(student.fname); //student의 fname 속성값.
console.log(student['age']); //student의 age 속성값.
let fieldName = 'sno';
console.log(student[fieldName]); //student의 sno속성값.
console.log(student.info());
debugger;

//중괄호{}는 object 선언할때 씀

//오브젝트일 경우.. for .. in ******중요
for(let field in student){
  console.log(field + ',' + student[field]);
}
// 배열:
const numAry = [10, 34, 15, 22];
console.log(numAry[0]);
for(let i = 0; i<numAry.length; i++){
  console.log(numAry[i]);
}

//확장 for..of *****중요
for(let num of numAry){
  console.log(num);
}