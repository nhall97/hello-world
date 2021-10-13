const button = document.getElementById('myButton');
button.addEventListener('click', function(e) {
  let div = document.createElement('div');
  div.innerHTML = '<h2 id="Lorem">Lorem Ipsum</h2>';
  document.body.appendChild(div);
});