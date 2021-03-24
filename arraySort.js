const numbers = [2,4,3,5,1];
const flipNum = [2,4,3,5,1];
const divvy = document.getElementById('container');
let listy ='';

listy += '<li><h2>Initial Order: </h2><h3>' + numbers + '</h3></li>';

//sorts descending
const descends = numbers.sort(function (a, b){
  return b - a;
});

listy += '<li><h2>Descending</h2><h3>' + numbers + '</h3></li>';

//flips order
const flips = flipNum.sort(function () {
  return -1;
});

listy += '<li><h2>Flipped</h2><h3>' + flipNum + '</h3></li>';

divvy.innerHTML = '<ul id  = "topSalaries">' + listy + '</ul>';