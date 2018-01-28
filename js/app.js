var cats = [
{ name: 'Ashes', imageURL: 'cat1_960x640.jpg', clicks: '0', attribution: 'Photo by <a href="https://unsplash.com/photos/w2DsS-ZAP4U?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Mikhail Vasilyev</a>', source: ' via <a href="https://unsplash.com/search/photos/cat?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>' },
{ name: 'Tiger', image: 'cat2_960x640.jpg', clicks: '0', attribution: 'Photo by <a href="https://unsplash.com/photos/w2DsS-ZAP4U?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Paul</a>', source: ' via <a href="https://unsplash.com/search/photos/cat?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>' }
];

cats.forEach(function(cat) {
    $('.cat-sidebar').append('<div class="cat-icon"><img></div>')
    $('.cat-icon:last-child > img').attr("src", 'images/'+cat.imageURL);
});

