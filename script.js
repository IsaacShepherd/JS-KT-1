var arr = [];                         //записываем в этот массив рандомные числа

var max =99 ;                              // максимальная длина массива

var rundomnumber;                     //случайное число

let a =0;

while (arr.length < 30) {

    rundomnumber = Math.floor(Math.random() * max); //создадим случайное число

    arr.push(rundomnumber);

   }

console.log(arr); 

let elem = document.querySelector('#elem'); 

createTable(elem,5,6);

function createTable(parent, cols, rows){
  let table = document.createElement('table');
  for(let i = 0;i<rows;i++){
    let tr = document.createElement('tr');
    for(let j = 0; j<cols;j++){
      let td = document.createElement('td');
      td.textContent = arr[a];
      a++;
      tr.appendChild(td);
    }
        table.appendChild(tr);
  }

  parent.appendChild(table);

}