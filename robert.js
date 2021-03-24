function countWords(){
  let text =
  "Some of the biggest and most expensive transportation projects in the world have involved building bridges. Bridges are crucial links that carry cars, trucks and trains across bodies of water, mountain gorges or other roads. As a result, they are one of the most important aspects of civil engineering and are subject to intense scrutiny, especially when they collapse. Bridge collapses can be tragic events, leading to loss of life and serious property damage. That is why bridge engineers, designers and builders must always take their jobs very seriously. The best way for them to prevent these accidents is to understand why bridges collapse in the first place. Understanding bridge collapses can lead to major changes in the design, construction and safety of future building projects. The following are main reasons why bridges fall.";
  var regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
  var str = text.toLowerCase(); 
  var str1 = str.replace(regex, '');
  const wordArray = str1.split(" ");
  const wordCount = {};
  wordArray.forEach((item) => {
  if (wordCount[item] == null) wordCount[item] = 1;
  else {
      wordCount[item] += 1;
  }
  });
  let myArray = Object.entries(wordCount);
  let sorted = myArray.sort((a, b) => {
      return b[1] - a[1];});
  const bArray  = []; 
  bArray.push(sorted[0], sorted[2], sorted[1])
  return bArray; 
}
console.log(countWords())