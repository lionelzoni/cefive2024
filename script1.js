document.querySelector('nav ul li:nth-child(2) a').addEventListener('click', function(event) {
  event.preventDefault();
  document.getElementById('cv').style.display = 'block';
});
