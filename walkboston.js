

function renderPosts(boston, container) {
  const people = boston.data;
  const len = boston.data.length;
  let html = '';
  let htmlTop5 = '';
  let htmlTopEmployees = '';

  for (let i = 0; i < len; i++) {
    html +=
      '<li class="post">' + '<h2>' + people[i][8] + '</h2>' + '<h3>' + people[i][11] + '</h3>';
  }
  
  people.sort(function (b, a) {
    return b[11] - a[11];
  });
  
  for (let i = 0; i < 5; i++) {
    htmlTop5 +=
      '<li class="post">' + '<h2>' + people[i][8] + '</h2>' + '<h3>' + people[i][11] + '</h3>';
  }
  
  container.innerHTML = '<ul id  = "topSalaries">' + htmlTop5 + '</ul>'; 
  let topEmployees = people.filter(person => person[11] > 200000);

  for (let i = 0; i < topEmployees.length; i++) {
    htmlTopEmployees +=
      '<li class="post">' + '<h2>' + topEmployees[i][8] + '</h2>' + '<h3>' + topEmployees[i][11] + '</h3>';
  }
  // container.innerHTML = '<ul id  = "topEmployees">' + htmlTopEmployees + '</ul>';
  // TODO: add code to display the html variable inside a ul element with id="data"
  // Hint: you can use the container parameter's innerHTML property to insert Html tags
}
renderPosts(boston, document.getElementById('container'));


