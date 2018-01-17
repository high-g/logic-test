"use strict";

import 'babel-polyfill';
import fetch from './fetch';

const table_member = document.getElementById('table_member');

async function show() {
  let result = await fetch('../server/get.php');
  console.log(result);
}

show()

// get.then(responce => {
//   for(let i=0; i<responce.length; i++) {
// 
//   }
// })


// str_table = '<tr>'
//           + `<td>${responce[i].id}</td>`
//           + `<td>${responce[i].name}</td>`
//           + '</tr>';
// 
// div.innerHTML = str_table;
// console.log(responce[i]);
// console.log(str_table)
// //table_member.appendChild(str_table);
