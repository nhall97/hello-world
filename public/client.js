const button = document.getElementById('myButton');
button.addEventListener('click', function(e) {
  let div = document.createElement('div');
  div.innerHTML = '<p>Lorem Ipsum</p>';
  document.body.appendChild(div);
});