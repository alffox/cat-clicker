let clicksLeft = 0;
let clicksRight = 0;

var catNames = ['Ashes','Tiger','Puss','Smokey','Misty','Tigger','Kitty','Oscar','Missy','Max','Ginger'];

$(document).ready(function() {

    function randomEl(list) {
        var i = Math.floor(Math.random() * list.length);
        return list[i];
    }

    $('.cat-left-name').text(randomEl(catNames));
    $('.cat-right-name').text(randomEl(catNames));
});

$('.cat-left').click(function() {
  clicksLeft = clicksLeft +1;
  $('.counter-left').text(clicksLeft);
});

$('.cat-right').click(function() {
  clicksRight = clicksRight +1;
  $('.counter-right').text(clicksRight);
});