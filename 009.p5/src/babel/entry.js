import * as p5 from 'p5';

const sketch = (p) => {
  let x = 100;
  let y = 100;
  let xspeed = 1;
  let yspeed = 3.3;

  p.setup = () => {
    p.createCanvas(700, 500);
  }
  
  p.draw = () => {
    p.background(0);
    p.ellipse(x,y,16,16);
  }
}

const app = new p5 (sketch, document.body);
