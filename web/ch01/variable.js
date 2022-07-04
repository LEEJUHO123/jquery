// variable.js
//전역객체(window 오브젝트), 전역변수.   

var avar = '안녕'; //전역변수(윈도우)
let alet = '안녕'; //지역변수

//window.alert('반갑습니다!!!');
console.log(this.avar);
console.log(this.alet);

function run(){
  console.log(this.avar);
  console.log(this.alet);
}
run();

console.log(avar);
console.log(alet);