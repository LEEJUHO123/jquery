//ch05/array.js

//인덱스(주소)

let arr = new Array();
arr = [];

arr.push('홍길동');
arr.push(20);
arr.push({name:"Hwang", id:"1001"});
arr.push(["사슴", "고양이"]);

arr.pop(); //제거
arr.unshift(["사슴", "고양이"]); //추가
arr[0] = 'test';
arr.shift();// 제거(처음)

arr.splice(1, 1); //특정위치 추가. 매개변수(1:위치, 2:크기, 3:대체할값) (위치, 대체할 개수, '바꿀물건') if (1, 0, 'good') 이면 추가됨
arr.splice(1, 0, "add1");
arr.splice(1, 0, "add2");
arr.splice(1, 0, "add3");
arr.splice(1, 3);
console.log(arr);

//reduce

const arr1 = [1,2,3,4,5];


let sum1 = arr1.reduce(function(ac, el){
  return ac + el; //  1) ac+el/ 2) ac + el/ 3)ac+el
},0);
console.log(`sum1:${sum1}`);


let sum2 = 0;
arr1.forEach(function(el){
  sum2 = sum2 + el;
}); 
console.log(`sum2:${sum2}`);

let arr2 =[1, 2,[3,4],[5,6,7,[10,11,{name : "hong", age:20}]]];

arr2[0]; //1
arr2[2]; // [3,4]
arr2[2][0]; //3
arr2[3][3][2]['name'];

console.clear();
arr2 = [1,[2,3],4,[5,6,7]]; //[1,2,3,4,5,6,7]

let arr_concat = arr2.reduce((stack, el)=>{
  // console.log(stack, el);
  return stack.concat(el); // [1]+[2,3]
  // return el;
},[]);
console.log(arr_concat)


let arr3 = [1, [2,3], 4, [5,6[7,8,9]]];
//2차원 이상의 배열요소
//join() => 배열을 문자열로 변환.
// split(구분자) => 구분자로 새로운 배열을 생성.
arr_concat = arr3.reduce((stack, el) => {
  return stack.concat(el);
}, []);
console.log(arr_concat);
console.log(arr_concat.join().split(',')); // 1,2,3,4,7,8,9