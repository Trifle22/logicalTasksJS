'use strict';


function generateOddNumber(x,y) {
  let array = [];
  if (x > y) {
    if (y >= 0) {
      for (let i = y; i <= x; i++) {
        if (i % 2 === 1 && i !== 0) {
          array.push(i);
        }
      }
    } else if (y < 0) {
        for (let i = x; i >= y; i--) {
          if (i % 2 === 1 && i !== 0 || i % 2 === -1) {
            array.push(i);
          }
        }
    } 
  } else if (y > x) {
    if (x >= 0) {
      for (let i = x; i <= y; i++) {
        if (i % 2 === 1 && i !== 0) {
          array.push(i);
        }
      }
    } else if (x < 0) {
      for (let i = y; i >= x; i--) {
        if (i % 2 === 1 && i !== 0 || i % 2 === -1) {
          array.push(i);
        }
      }
    }
  }
  console.log(array[Math.floor(Math.random() * array.length)]);
  return array[Math.floor(Math.random() * array.length)];
}
generateOddNumber(-100,100);