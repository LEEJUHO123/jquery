let tableTag = '<table border =1>';

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Tur', 'Fri', 'Sat'];

tableTag += '<tr>';
for(dayday of days){
  tableTag += '<th>'+ dayday + '</th>';
}
tableTag += '</tr>';
tableTag += '<tr>';
today = new Date(2022, 6, 0);
today1 = new Date(2022, 5, 1);

console.log(today1.getDay());
console.log(today.getDate());
for(let day123 = 1; day123<=today1.getDay(); day123++){
  tableTag += '<td>'+'</td>';
}
for(let day = 1; day<=today.getDate(); day++){
  tableTag += '<td>'+day+'</td>';
  if((day+today1.getDay())%7 == 0 ){
    tableTag += '</tr></tr>';
  }



}
document.write(tableTag);