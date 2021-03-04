// from MIT xPRO fullstack developer ceritification course
let f1 = function (x){ console.log(`f1:${x}`);};
f1('hey');
// f1(37);
let f2 = function (y){console.log(`f2:${y}`);};
f2('what?')
function f3(fa, fb){fa('hello');};
f3(f1, f2);
function f4(fa, fb){ return{fa:fa, fb:fb};};
res = f4(f1, f2);
res.fa('hello world');
