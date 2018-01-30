var cats = [
{
    name: 'Ashes',
    imageURL: 'cat1_960x640.jpg',
    authorName: 'Mikhail Vasilyev',
    authorHyperlink: '@miklevasilyev',
    siteName: 'Unsplash',
    siteHyperlink: 'https://unsplash.com/'
},
{
    name: 'Tiger',
    imageURL: 'cat2_960x640.jpg',
    authorName: 'Paul',
    authorHyperlink: '@paul_',
    siteName: 'Unsplash',
    siteHyperlink: 'https://unsplash.com/'
},
{
    name: 'Lion',
    imageURL: 'cat3.jpg',
    authorName: 'Kari Shea',
    authorHyperlink: '@karishea',
    siteName: 'Unsplash',
    siteHyperlink: 'https://unsplash.com/'
},
{
    name: 'Felix',
    imageURL: 'cat4.jpg',
    authorName: 'Pacto Visual',
    authorHyperlink: '@pactovisual',
    siteName: 'Unsplash',
    siteHyperlink: 'https://unsplash.com/'
},
{
    name: 'Napoleon',
    imageURL: 'cat5.jpg',
    authorName: 'Paul',
    authorHyperlink: '@paul_',
    siteName: 'Unsplash',
    siteHyperlink: 'https://unsplash.com/'
}
];

cats.forEach(function(cat) {
    $('.cat-sidebar').append('<div class="cat-icon"><img><div class="cat-info hidden"><div class="clicks">Clicks: <span class="counter">0</span></div><div class="name"></div><div class="attribution"><span class="salutation">Photo by </span><span class="author"><a href=""></a></span><span class="source"> via <a href=""></a></span></div></div></div>');

    var HTMLSideBarFinder = $('.cat-icon:last-child');

    $('.cat-icon:last-child > img').attr("src", 'images/'+cat.imageURL);
    $(HTMLSideBarFinder).find('.name').text('Name: '+cat.name);
    $(HTMLSideBarFinder).find('.author > a').text(cat.authorName).attr('href', cat.siteHyperlink+cat.authorHyperlink);
    $(HTMLSideBarFinder).find('.source > a').text(cat.siteName).attr('href', cat.siteHyperlink);
});

// Solution from https://stackoverflow.com/questions/9572825/each-div-must-increments-its-counter-upon-clicking
$('.cat-icon').click( function(cat) {
    var clicks = $(this).find('.counter');
    clicks.text( parseInt(clicks.text()) + 1 );

    var clickedCatImage = $(this).find('img').attr('src');
    $('.cat-big').attr("src", clickedCatImage).removeClass('hidden');
    $('.hint').addClass('hidden');

    var clickedCatInfo = $(this).find('.cat-info');
    $(clickedCatInfo).clone().appendTo('.cat-dashboard').removeClass('hidden');
});