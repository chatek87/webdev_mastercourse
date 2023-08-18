'use strict';  // disallows certain actions in JS that old unsafe (sloppy mode) js allows

let myTest = 2;

// js is case-sensitive
// use strict won't allow this:
// mytest = 3;
// aka won't allow us to use variable without declaring

// 'test'.myInfo = 'Hello';  // use strict will catch this
// whereas sloppy-mode js will not

// function test() {
//     'use strict';
//     test1 = 2;
// }

// test(); // catches this

// !!! ALWAYS PUT USE STRICT IN IIFE'S






