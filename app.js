let clicks = 0;

var catNames = ['Ashes','Tiger','Puss','Smokey','Misty','Tigger','Kitty','Oscar','Missy','Max','Ginger'];

$(document).ready(function() {

    function randomEl(list) {
        var i = Math.floor(Math.random() * list.length);
        return list[i];
    }

    $('.cat-left-name').text(randomEl(catNames));
    $('.cat-right-name').text(randomEl(catNames));
});

$('.cat-picture').click(function() {
  clicks = clicks +1;
  $('.clicks').text(clicks);
});