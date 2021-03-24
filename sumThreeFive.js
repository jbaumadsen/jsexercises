// function solution(number){
//   let sum = 0;
//   for (let i = 1; i <= number; i++ ){
//     sum = (i % 5 === 0) ? sum + i : (i % 3 === 0) ? sum + i : sum;
//   }
//   return sum;
// }

function solution(number){
  let sum = 0;
  for (let i = 1; i < number; i++ ){
    sum = (i % 5 === 0) || (i % 3 === 0) ? sum + i : sum;
  }
  return sum;
}

console.log('the answer is: ' + solution(10))