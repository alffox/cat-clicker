var cats = [{
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
];//TODO this array could be substituted by an ajax functionality

cats.forEach(function(cat) { //populates the DOM (sidebar)
    $('.cat-sidebar').append('<div class="cat-icon"><img><div class="cat-info hidden"><div class="clicks">Clicks: <span class="counter">0</span></div><div class="name"></div><div class="attribution"><span class="salutation">Photo by </span><span class="author"><a href=""></a></span><span class="source"> via <a href=""></a></span></div></div></div>');

    var HTMLSideBarFinder = $('.cat-icon:last-child');//always attach a different cat when iterating through the cats array

    $('.cat-icon:last-child > img').attr("src", 'images/' + cat.imageURL);
    $(HTMLSideBarFinder).find('.name').text('Name: ' + cat.name);
    $(HTMLSideBarFinder).find('.author > a').text(cat.authorName).attr('href', cat.siteHyperlink + cat.authorHyperlink);
    $(HTMLSideBarFinder).find('.source > a').text(cat.siteName).attr('href', cat.siteHyperlink);
});

// Solution inspired by https://stackoverflow.com/questions/9572825/each-div-must-increments-its-counter-upon-clicking
$('.cat-icon').click(function(cat) {
    var clicks = $(this).find('.counter');
    clicks.text(parseInt(clicks.text()) + 1);//increments clicks on chosen cat

    var clickedCatImage = $(this).find('img').attr('src');
    $('.hint').addClass('hidden');//hides the hint message until next full page refresh
    $('.cat-big').attr("src", clickedCatImage).removeClass('hidden');//reveals the chosen cat in the dashboard area

    $('.cat-dashboard').find('.cat-info').empty(); //clears any cat info previously present

    var clickedCatInfo = $(this).find('.cat-info');//selects copies over and reveals the persisted cat info
    $(clickedCatInfo).clone().appendTo('.cat-dashboard');
    $('.cat-dashboard > .cat-info').removeClass('hidden');
});