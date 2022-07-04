//ch02/function1.js
const hong = {
  memberId: '001',
  memberNm: '홍길동',
  memberAge: 20
}
const hwang = {
  memberId: '002',
  memberNm: '황우영',
  memberAge: 22
}
const park ={
  memberId: '003',
  memberNm: '박민규',
  memberAge: 25
}
const friends = [hong, hwang, park];
//테이블 생성.
// <table><tr><th>타이틀</th></tr><tr><td>데이터</td></tr></table>
function createTable(ary=[]){
  let tag = '<table border=1>';
  tag += createHeader(ary[0]);
  //tr, td 생성.
  for(let i = 0; i<ary.length; i++){
    tag += createTr(ary[i]);//'<tr>';
    // for(let field in ary[i]){
    //   tag += '<td>'+ary[i][field]+'</td>';  //ary[i] = hong hwang park  , field = ary의 i라는 값
    // }
    // tag += '</tr>';
  }
  tag += '</table>';
  
  return tag;
}

//obj => 속성
// <table><thead>....</thead><tbody>...</tbody></table>
function createHeader(obj = {}){
  let thead = '<thead><tr>';
  
  for(let field in obj){
    thead += `<th>${field}</th>`;
  }
  thead += '</tr></thead>';

  return thead;
}

function createTr(obj = {}){
  // <tr><td>데이터</td></tr>

  let tr = '<tr>';

  for(let field in obj){
    tr += `<td>${obj[field]}</td>`;
  }
  tr += '</tr>';
  
  return tr;
}


// let result = createTable(friends);

// document.write(result);