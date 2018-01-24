'use strict';

import Fetch from './fetch';
const fetch = new Fetch();

const get = async () => {
  const member = await fetch.get_data('../server/get.php');
  show(member);
}

const show = (arg_member) => {
  const table = document.querySelector('#table_member');
  for(let i=0; i<arg_member.length; i++) {
    let content = createContent(arg_member[i]);
    table.appendChild(content);
  }
}

const createContent = (data) => {
  const dom_tr = document.createElement('tr');
  let dom_td;

  for(let key in data) {
    dom_td = document.createElement('td');
    dom_td.innerText = data[key];
    dom_tr.appendChild(dom_td);
  }

  dom_td = createBtn({
    name: '削除',
    id: data.id
  });
  dom_tr.appendChild(dom_td);
  return dom_tr;
}

const createBtn = (param) => {
   const dom_btn = document.createElement('button');
   dom_btn.innerText = param.name;
   dom_btn.dataset.id = param.id
   return dom_btn;
}

get();
