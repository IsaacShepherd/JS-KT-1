let arr = [];
let arr1=[];

let max =100 ;                              // предел случайного числа
let randomnumber;                     //случайное число
let selector="";


while (arr.length < 30) {
      randomnumber = Math.floor(Math.random() * max); //создадим случайное число
      arr.push(randomnumber);
    }
console.log(arr); 

let elem = document.querySelector('#elem');
let elem1 = document.querySelector('#elem1');  

createFilledTable(elem,5,6);

function createFilledTable(parent, cols, rows){
  let a =0;   // counter
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
let elems = document.querySelectorAll('td');
console.log(elems);
for(let elem of elems){
  if(elem.innerHTML>=50){
      elem.style.background = "orange";
    }
}

function createTable(parent, cols, rows){
  let counter = 0;
  let table = document.createElement('table');
  for(let i = 0;i<rows;i++){
    let tr = document.createElement('tr');
    for(let j = 0; j<cols;j++){
      let td = document.createElement('td');
      td.id = "cell" + counter;
      tr.appendChild(td);
      td.append("");
      arr1[counter] = counter;
      counter++;
      }
        table.appendChild(tr);
  }
  parent.appendChild(table);
}
createTable(elem1,5,6);
let table1 = elem1.querySelector("table")


function fillCell(){
  if (arr1.length == 0){
      alert('Таблица заполнена');
  }
  while(arr1.length != 0) {
      let number = Math.floor(Math.random()*100);
      console.log(number);
      let random = arr1[Math.floor(Math.random() * arr1.length)];
      if (arr1.includes(random)){
          selector = "#cell" + random;
          table1.querySelector(selector).append(number);
          arr1.splice(arr1.indexOf(random), 1);
           console.log(arr1);
           console.log(random);
          if (number >= 50){
          table1.querySelector(selector).classList.add('bgOrange');
          }
          break
      } 
  }
}

