//ch02/function.js

//1.함수선언식 정의.
// function sum(num1, num2){
//   if(num==undefined){
//     num1=0;
//   }
//   return num1 + num2;
// }
// let sum = function(){
//  return num1 + num2;
// }

// console.log(sum(10, 20));

//2.함수표현식 정의.
//변수 = string, number, boolean, undefined, object, function
let mySum = function(val1=0, val2=0){
  return val1 + val2;
}
let yourSum = mySum;
console.log(mySum(10, 20));
console.log(yourSum(11,22));

//3.화살표 함수. 함수나 메소드 매개값으로 사용되어질 때.
let otherSum = (var1, var2) => {
  return val1+val2;
}

//배열에는 forEach();
const arr = [10, 22, 17, 23, 34, 42];
let summ = 0;
// arr.forEach(function(val, idx, ary){
  // if(idx%2 == 1){
    // summ += val;
  // }
// });



//forEach 메소드의 콜백함수.
arr.forEach(getOddSum);
console.log(`짝수의 합: ${summ}`);

function getOddSum(val, idx, ary){
  if(idx %2 ==1){
    summ += val;
  }
};