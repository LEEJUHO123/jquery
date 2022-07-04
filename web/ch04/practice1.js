
let friends = [{name:'라이언',age:5}, {name : '어피치', age:3}
,{name : '콘',age:4},{name : '프로도', age:2}];

let newFriends = friends.map(function(val,idx){
  let obj = {};
  obj.sname = val.name;
  obj.age = val.age*2;
  obj.sno = idx + 1;

// 1번 2번 골라서 확인.

  return obj;   //[{sname:?, age:? , sno :?}, {sname:?, age:?, sno:?}]  

  // return `${obj.sno}, ${obj.sname}, ${obj.age}`; // [ '1,라이언, 5' , '2,어피치,3' , '3,콘,4' , '
});


// console.log(newFriends.join('-'));
// let tag = '<ul><li>'+ newFriends.join('</li><li>')+ '</li></ul>';
// document.write(tag);

let tag1 = '<table border=1><tr>';
tag1 += `${newFriends.map(elem => '<td>'+ elem.sno+ '</td><td>' +elem.sname+ '</td><td>'+ elem.age+'</td>').join('</tr><tr>')}`;
tag1 += '</tr></table>';
document.write(tag1);




// let tag1 = '<table border=1><tr>';
// tag1 += `${newFriends.map(elem => {let em = elem.split(','); return '<td>'+ em[0]+ '</td><td>' +em[1]+ '</td><td>'+ em[2]+'</td>'}).join('</tr><tr>')}`;
// tag1 += '</tr></table>';
// document.write(tag1);


