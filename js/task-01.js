const listWithitem = document.querySelectorAll('.item');
console.log('Number of categories: ' + listWithitem.length);

listWithitem.forEach(function (element) {
  console.log('Category: ' + element.querySelector('h2').innerText);
  console.log('Elements: ' + element.querySelectorAll('li').length);
});
