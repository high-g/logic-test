import {add, substruct} from './calc.js'

let html_text = `1 ＋ 2 ＝ ${add(1, 2)}`;
html_text += '<br>'
html_text += `10 ー 2 ＝ ${substruct(10, 2)}`;

const span = document.getElementById('span');
span.innerHTML = html_text;
