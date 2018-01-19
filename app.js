let clicks = 0;

$('.cat-picture').click(function() {
  clicks = clicks +1;
  $('.clicks').text(clicks);
});