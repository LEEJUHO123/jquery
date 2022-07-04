//ch02/mock_data.js

let data =
`[{"id":1,"first_name":"Leighton","last_name":"Stonnell","email":"lstonnell0@skype.com","gender":"Male","ip_address":81},
{"id":2,"first_name":"Patrizio","last_name":"Dict","email":"pdict1@xrea.com","gender":"Male","ip_address":82},
{"id":3,"first_name":"Rainer","last_name":"Tearny","email":"rtearny2@patch.com","gender":"Male","ip_address":95},
{"id":4,"first_name":"Doro","last_name":"Sorbie","email":"dsorbie3@microsoft.com","gender":"Female","ip_address":85},
{"id":5,"first_name":"Ethelbert","last_name":"Flounders","email":"eflounders4@huffingtonpost.com","gender":"Male","ip_address":4},
{"id":6,"first_name":"Ervin","last_name":"Winterburn","email":"ewinterburn5@goodreads.com","gender":"Male","ip_address":7},
{"id":7,"first_name":"Clemmie","last_name":"Vannuccini","email":"cvannuccini6@springer.com","gender":"Female","ip_address":54},
{"id":8,"first_name":"Delmer","last_name":"Pavinese","email":"dpavinese7@msn.com","gender":"Male","ip_address":82},
{"id":9,"first_name":"Marie-ann","last_name":"Totman","email":"mtotman8@ask.com","gender":"Female","ip_address":72},
{"id":10,"first_name":"Giacinta","last_name":"Alenin","email":"galenin9@nationalgeographic.com","gender":"Female","ip_address":81}]`

data = JSON.parse(data); //JSON => 오브젝트 변형.
console.log(data);

let over80 = data.filter((val, idx) => {
  console.log(val);
  return val.salary >= 80;
});

console.log(over80);

let females = data.filter(obj => obj.gender =='Female');
console.log(females);

let str = createTable(females);
document.write(str);

