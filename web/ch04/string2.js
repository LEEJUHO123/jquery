//ch04/string2.js

// let today = new Date();
// console.log(today.toDateString());


Date.prototype.customFormat = function(){
  let yyyy = this.getFullYear(); // 2022
  let mm = this.getMonth()+1; // 0~11
  let dd = this.getDate();
  let hh = this.getHours();
  let mi = this.getMinutes();
  let ss = this.getSeconds();
  
  return `${yyyy}-${('0'+mm).slice(-2)}-${dd} ${hh}:${mi}:${('0'+ss).slice}`;
}


setInterval(function(){
  let today = new Date();
  console.log(today.customFormat());
  document.write(today.customFormat());
}, 1*1000);

