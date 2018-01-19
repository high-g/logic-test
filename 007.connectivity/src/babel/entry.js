"use strict";

import 'babel-polyfill';
import Fetch from './fetch';

const table_member = document.getElementById('table_member');
const fetch = new Fetch();


function show() {
  let result = fetch.get_data('../server/get.php');
  console.log(result);
}

show()
