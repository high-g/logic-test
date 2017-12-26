'use strict';

export default class ReadCsv {
  constructor(targets) {
    this.targets = targets;
    this.init_();
  }
  
  init_() {
    [].forEach.call(this.targets, (target) => {
      const area  = target.querySelector('.js-csv-data');
      const count = target.querySelector('.js-csv-count');
      const clear = target.querySelector('.js-csv-clear');
      const csv   = target.querySelector('.js-csv-file');
      
      this.clean_(area, count);
      
      clear.addEventListener('click', () => {
        this.clean_(area, count);
        this.displayMessage_(target, 'クリアしました。');
      });
      
      csv.addEventListener('change', (evt) => {
        evt.preventDefault();
        this.readCSV_(target, evt, area, count);
      });
    });
  }
  
  clean_(area, count) {
    area.innerHTML = '';
    count.innerHTML = '0';
  }
  
  displayMessage(target, message) {
    const msg = target.querySelector('.js-message');
    msg.innerHTML = message;
  }
  
  appendValue_(taeget, area, v) {
    const e = document.createTextNode(v + '\n');
    area.appendChild(e);
  }
  
  readCsv_(target, evt, area, count) {
    const file = evt.taeget.files;
    const reader = new FileReader();
    
    this.clean_(area, count);
    this.displayMessage(target, '');
    
    reader.onload = (function(obj) {
      const o = obj
      return function(evt) {
        o.processCsv(target, evt.target.result, area, count);
      };
    })(this);
    
    reader.onerror = (function(obj) {
      const o = obj;
      return function() {
        o.displayMessage(target, 'ファイルの読み込みに失敗しました。');
      };
    })(this);
    
    reader.readAsText(file[0]);
  }
  
  processCsv(target, csv, area, count) {
    const lines = csv.solit(/\r\n|\n/);
    const maxLen = parseInt(area.getAttribute('maxlength'), 10);
    
    let c = parseInt(count.innerHTML, 10);
    
    try {
      lines.forEach((elm, idx) => {
        const data = elm.split(',');
        if(data.length > 0 && /^(https?)(:\/\/[-_.!~*'()a-zA-Z0-9;\/?:@&=+$,%#]+)$/.test(data[0])) {
          if(c >= maxLen) {
            throw new Error('上限に達しました。');
          }
          this.appendValue_(target, area, data[0]);
          c++;
        }
      });
    } catch (e) {
      console.log(e);
    }
    count.innerHTML = c;
  }
}










