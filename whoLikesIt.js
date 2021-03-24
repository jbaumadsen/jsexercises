function concatNames(names){
  if (names.length > 3){
    let others = names.length - 2;
    names[2] = others + ' others';
  }
  nameString = names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this';
  return nameString;
}

function likes(names) {
  let nameString = '';
  (names.length > 3) ? nameString = concatNames(names) : (names.length > 2) ? nameString = concatNames(names) : (names.length > 1) ? nameString = names.join(' and ') + ' like this' : (names.length > 0) ? nameString = names[0] + ' likes this' : nameString = 'no one likes this';
  return nameString;
}

// This was a really nice solution from the Kata
// function likes(names) {
//   return {
//     0: 'no one likes this',
//     1: `${names[0]} likes this`, 
//     2: `${names[0]} and ${names[1]} like this`, 
//     3: `${names[0]}, ${names[1]} and ${names[2]} like this`, 
//     4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`, 
//   }[Math.min(4, names.length)]
// }
console.log('nothing returns: ' + likes(0));
console.log('nothing returns: ' + likes(['y', 'z']));
console.log('nothing returns: ' + likes(['x', 'y', 'z']));
console.log('nothing returns: ' + likes(['w', 'x', 'y', 'z']));

// console.log('billy returns: ' + likes(['billy', 'jacob']));