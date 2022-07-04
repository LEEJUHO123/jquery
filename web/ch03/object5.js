// ch03/object5.js

for(let i=0; i<5; i++){
  let temp = parseInt(Math.random() * 10) + 1;
  console.log(temp)
}
Math.ceil(3.3); // 올림. 4
Math.floor(3.3); // 소수점 버리기. 3
Math.trunc(3.3); //3
Math.round(3.5); 
console.log(Math.PI); 

Math.floor(-3.3); // -3 ~ -4 : -4
Math.trunc(-3.3); // 소수점을 잘라버림. -3 
// let math = new Math();
// math.random();

//클로저.
function outerFunc(name){
  let saying = 'hello' + name;

  return function(){
    return saying;
  }
}
let f1 = outerFunc('홍길동');
let f2 = outerFunc('김민수');
console.log(f1());
console.log(f2());


//클로저: 함수가 실행되는 시점의 변수값을 기억.
function initFnc(){
  let cnt = 0;

 return function addCnt(){
    cnt += 1;
    console.log(cnt);
  }
  // addCnt();
  // console.log(cnt);
}
let add = initFnc();

add();
add();
add();