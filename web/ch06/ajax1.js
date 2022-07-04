// ch06/ajax1.js
//Asynchronous Javascript And Xml
// 비동기방식 처리.
XMLHttpRequest();

setTimeout(e=>{
  console.log('first');

setTimeout(e=>{
  console.log('second');

setTimeout(e=>{
  console.log('third');
}, 2000);

}, 3000);

}, 1000);