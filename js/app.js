var cats = [
{ name: 'Ashes', imageURL: 'cat1_960x640.jpg', clicks: '0', author: '<a href="https://unsplash.com/@miklevasilyev">Mikhail Vasilyev</a>' },
{ name: 'Tiger', imageURL: 'cat2_960x640.jpg', clicks: '0', author: '<a href="https://unsplash.com/@paul_">Paul</a>' }
];

cats.forEach(function(cat) {
    $('.cat-sidebar').append('<div class="cat-icon"><img><div class="cat-info"><div class="clicks">Clicks: <span class="clicks">0</span></div><div class="attribution"><span class="author">Photo by <a href="https://unsplash.com/"></a></span><span class="source"> via <a href="https://unsplash.com/">Unsplash</a></span></div></div></div>');
    $('.cat-icon:last-child > img').attr("src", 'images/'+cat.imageURL);
});

