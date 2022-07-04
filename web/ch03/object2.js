//ch03/object2.js

//함수 table 생성.
//클래스로 table 생성.

class Table{
  constructor(data){
    this.tag = '<table><thead><tr><td>name</td></tr></thead></table>';
    this.aryData = data;
  }
  
  createHeader(){ //head 정보 만드는 곳
    this.tag += '<thead><tr>';
    for(let field in this.aryData[0]){
      this.tag += `<th>${field}</th>`;
    }
    this.tag += '</tr></thead>';
  }
  createBody(){ // body 정보 만드는 곳.
    this.tag += '<tbody>';
    for(let obj of this.aryData){
      this.tag += '<tr>'
      for(let field in obj){
        this.tag += `<td>${obj[field]}</td>`;
      }
    this.tag += '</tr>';
    }
    this.tag += '</tbody>';
  }
  createTable(){
    this.tag += '<table>';
    this.tag += '<table border =1>'
    //header정보 생성
    this.createHeader();
    //body 정보 생성
    this.createBody();
    this.tag += '</table>';
    return this.tag;
  }
}
let ary = [{
sno : '1001', sname:'홍길동', score:80
},{
  sno : '1002', sname:'김민수', score:85
},{
  sno : '1003', sname:'박상민', score:90  
}];
let table = new Table(ary);
let str = table.createTable(); //<table><thead>타이틀</thead><tbody>데이터</tbody></table>
document.write(str);