"use strict";

import 'babel-polyfill';
import fetch from './fetch';

const table_member = document.getElementById('table_member');

async function show() {
  let result = await fetch('../server/get.php');
  console.log(result);
}

show()

