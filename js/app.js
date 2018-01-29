var cats = [
{ name: 'Ashes', imageURL: 'cat1_960x640.jpg', clicks: '0', authorName: 'Mikhail Vasilyev', authorHyperlink: '@miklevasilyev', siteName: 'Unsplash', siteHyperlink:'https://unsplash.com/' },
{ name: 'Tiger', imageURL: 'cat2_960x640.jpg', clicks: '0', authorName: 'Paul', authorHyperlink: '@paul_', siteName: 'Unsplash', siteHyperlink:'https://unsplash.com/' }
];

cats.forEach(function(cat) {
    $('.cat-sidebar').append('<div class="cat-icon"><img><div class="cat-info"><div class="clicks">Clicks: <span class="counter">0</span></div><div class="attribution"><span class="salutation">Photo by </span><span class="author"><a href=""></a></span><span class="source"> via <a href=""></a></span></div></div></div>');
    $('.cat-icon:last-child > img').attr("src", 'images/'+cat.imageURL);
    $('.cat-icon:last-child').find('.author > a').text(cat.authorName).attr('href', cat.siteHyperlink+cat.authorHyperlink);
    $('.cat-icon:last-child').find('.source > a').text(cat.siteName).attr('href', cat.siteHyperlink);
});

