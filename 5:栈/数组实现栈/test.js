const Shed = require('./shed');

let shed = new Shed(3);
shed.push(1);
shed.push(2);
shed.push(3);
// shed.push(4);
console.log(shed.arr)
shed.pop();