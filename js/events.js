//define functions here
function getIt() {
  $('p').on('click', function() {
    alert('Hey!');
  });
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty')
  })
}

function pressIt() {
  $('form').on('keydown', function(key) {
    if (which.key === '71') {
      alert('you have pressed the G key');
    }
  })
}

$(document).ready(function(){

// call functions here

});
