// calendar.js

//Sun Mon Tue Wed Thr Fri Sat => tr
// 1   2   3   4   5   6   7  
// 8   9   10  11  12  13  14
// 29  30  31


let tableTag = '<table border=1>';

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'];
//코드작성.
tableTag += '<tr>';
for(week of days)
{
  if(week == "Sun"){
    tableTag += '<th style="color:red;">'+week+'</th>';
  }else{
    tableTag += '<th>'+week+'</th>';
  }
}
tableTag += '</tr>';

tableTag += '<tr>';
for(let day =1; day <=31; day++){
//코드작성. 
  tableTag += '<td>'+day+'</td>';
  if(day % 7 == 0)
  {
    tableTag += '</tr><tr>';
  }
  if(day == "1","8",""){
    
  }
}
tableTag += '</tr>';
tableTag += '</table>';

document.write(tableTag);