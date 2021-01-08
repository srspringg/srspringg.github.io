$(document).ready(function() {
  console.log("hello world")
$('h1').on('click', function () {
  $(this).html('WELCOME!');
});
$('h2').on('mouseover', function() {
  $(this).animate({
    "letter-spacing": "10px",
    "font-size": "40px"
  }, 1000);
});



});
