//ch05/arry1.js
//String.indexOf() => 인덱스 / -1
//Array.indexOf() => 인덱스/ -1
//Array.find() => 찾을값/  못찾으면 undefined

let arr1 = ['펭수', '라이언', '어피치', '콘', '브라운','무지'];
let idx = arr1.indexOf('라이언'); // 1
arr1.indexOf('라이언', idx+1); // -1

let find_arr = arr1.find(el => el=='라이언');
console.log(find_arr);

//Array.some(함수) => 조건1건 true/ false
//Array.every(함수) => 조건 모두 true/ false

let true_false = arr1.some(el => el.length >=3);
console.log(true_false);

//Array.sort();
console.log(arr1.sort().reverse());
let arr2 = [3,4,21,10,1];
arr2.sort((a, b)=>{
  // a, b => 0보다 큰 값이 반환. b,a
  // a, b => 0보다 작은 값이 반환. a, b
  // if(a - b > 0){
  //   return 10;
  // }else{
  //   return -10;
  // }
  return a-b; // 오름차순.
})
console.log(arr2);

let arr3 = [{name:"김민수", age:25} 
            ,{name:"최익수", age:23}
            ,{name: "이민기", age:27}];
arr3.sort((e1, e2) => {
  if(e1.name < e2.name){return -1}
   else return 1; 
});
//이름순. 
console.log(arr3); 

let names = "정임경, 박근형, 김진형, 황하경, 류미래";
//김진형, 류미래, 박근형, 정임경, 황하경

let nameAry = names.split(/,\s+/) //, 공백을 구분자로 배열을 생성
.sort() //가나다 순으로 정렬.
.join(','); //배열을 문자로 변경.
console.log(nameAry);