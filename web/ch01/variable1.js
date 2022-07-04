// variable1.js : 변수의 호이스팅(끌어올림).
var sum2;
var myName;

let sum = 10; //변수 선언, 값을 초기화.
console.log(sum);


console.log(sum2); //undefined.
var sum2 = 100;

console.log(myName());

//object(참조타입변수) => object, array, function(){}
function myName() { 
  return '홍길동';
}
let result = 100;

{
let result = 50; // 블럭 단위의 범위.
}

function run(){
  //지역변수(local variable)
  var result = 0;
  console.log(result);
}
run();

console.log(result);