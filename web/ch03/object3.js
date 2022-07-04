//ch03/object3.js
//인스턴스 : 필드, 생성자, 메소드.
//프로토타입 : 메소드(함수) 의 참조값.
let year = 2022;
let month = 5; //6월달
let today = new Date(); //현재시점 년월일 시분초.
console.log(today)
console.log(today.toLocaleDateString())
console.log(today.toLocaleTimeString())
today = new Date('2022-06-01');
today = new Date(year, month+1, 0); //7월의 마지막날
today = new Date(year, month, 1); //5월의 1날
console.log(today.getDay()); //요일정보
console.log(today.getDate()); //날짜정보
let day = today.getDay();
let lastDate = today.getDate();

function showCalendar(year, mon){
  document.write(`<h3>${year}년 ${month}월 달력</h3>`);
  //code Here.
  

}

showCalendar(2022, 5); //6월달...




// today = new Date('2022-11-25'); 

// Date.prototype.toCustomString = function (){
//   //console.log(this);
//   let year = this.getFullYear();
//   let month = ('0'+ (this.getMonth()+1)).slice(-2); // 0~11
//   let date = this.getDate();
//   return `${year}-${month}-${date}`;
// }

// console.log(today.toCustomString());