"use strict";

import 'babel-polyfill';
import Fetch from './fetch';
const fetch = new Fetch();

const get = async () => {
  let member = await fetch.get_data('../server/get.php');
  show(member);
}

const show = (arg_member) => {
  let table = document.querySelector('#table_member');
  for(let i=0; i<arg_member.length; i++) {
    let content = createContent(arg_member[i]);
    table.appendChild(content);
  }
}

const createContent = (data) => {
  let dom_tr = document.createElement('tr'),
      dom_td;
  for(let key in data) {
    dom_td = document.createElement('td');
    dom_td.innerText = data[key];
    dom_tr.appendChild(dom_td);
  }
  return dom_tr;
}

get();
