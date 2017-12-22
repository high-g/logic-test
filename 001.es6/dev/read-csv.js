'use strict';

export default class ReadCSV {
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
  
  displayMessage_(target, message) {
    const msg = target.querySelector('.js-message');
    msg.innerHTML = message;
  }
  
  appendValue_(taeget, area, v) {
    const e = document.createTextNode(v + '\n');
    area.appendChild(e);
  }
  
  readCsv_(target, evt, area, count) {
    const file = evt.taeget.files;
  }
  
}










