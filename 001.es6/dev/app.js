'use strict';

import ReadCsv from './read-csv';

class MyApp {
  static exec() {
    const obj = new MyApp();
    obj.prepareReadCsv();
  }
  
  prepareReadCsv() {
    const targets = document.querySelectorAll('.js-csv-read');
    if(targets) {
      const ts = new ReadCsv(targets);
    }
  }
} 

MyApp.exec();