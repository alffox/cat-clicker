var model = {
    //TODO: It could be nice to turn this model into an ajax call that fetches data from given site/API

    cats: [{
            clickCounter: 0,
            name: 'Ashes',
            imageURL: 'cat1_960x640.jpg',
            authorName: 'Mikhail Vasilyev',
            authorHyperlink: '@miklevasilyev',
            siteName: 'Unsplash',
            siteHyperlink: 'https://unsplash.com/'
        },
        {
            clickCounter: 0,
            name: 'Tiger',
            imageURL: 'cat2_960x640.jpg',
            authorName: 'Paul',
            authorHyperlink: '@paul_',
            siteName: 'Unsplash',
            siteHyperlink: 'https://unsplash.com/'
        },
        {
            clickCounter: 0,
            name: 'Lion',
            imageURL: 'cat3_960x640.jpg',
            authorName: 'Kari Shea',
            authorHyperlink: '@karishea',
            siteName: 'Unsplash',
            siteHyperlink: 'https://unsplash.com/'
        },
        {
            clickCounter: 0,
            name: 'Felix',
            imageURL: 'cat4_960x640.jpg',
            authorName: 'Pacto Visual',
            authorHyperlink: '@pactovisual',
            siteName: 'Unsplash',
            siteHyperlink: 'https://unsplash.com/'
        },
        {
            clickCounter: 0,
            name: 'Napoleon',
            imageURL: 'cat5_960x640.jpg',
            authorName: 'Paul',
            authorHyperlink: '@paul_',
            siteName: 'Unsplash',
            siteHyperlink: 'https://unsplash.com/'
        }
    ]
};


var octopus = {

    init: function() {
        view.init();

        //Call this function early to always be ready to listen to clicks
        octopus.getClickedCatData();
    },

    getCatNames: function() {

        //Loops on cats object and returns only cat names array
        return catNames = model.cats.map(a => a.name);
    },

    getClickedCatData: function() {
        $('li').click(function(e) {

            //Assigns index position of clicked cat
            var clickedCatIndexPos = $(e.target).index();

            //Casts cat index position with model array position
            var clickedCat = model.cats[clickedCatIndexPos];

            //We want each click to increment click counter in the model
            octopus.updateClickCounter(clickedCat);

            //Click counter has been updated, now let's render the latest cat data !
            view.renderClickedCatInfo(clickedCat);
        });
    },

    updateClickCounter: function(clickedCat) {
        return clickedCat.clickCounter++;
    },

    setClickedCatData: function(clickedCat) {
        $('.save-button').click(function() {
            clickedCat.name = $("input[name='name']").val();
            clickedCat.imageURL = $("input[name='imageURL']").val();
            clickedCat.clickCounter = $("input[name='clickCounter']").val();

            view.renderList();
            view.renderClickedCatInfo(clickedCat);
        });
    }

};


var view = {

    init: function() {

        // Store pointers to DOM elements for easy access later
        elemCatList = $('.cat-list');
        elemCatDashboard = $('.cat-dashboard');
        view.renderList();
    },

    renderList: function() {

        $('ul').empty();

        // On first page load, we want to load only cat names and not full data from the model, this is for scalability and performance reasons. There are high chances that some cats will never be clicked, especially if the list is long
        octopus.getCatNames();

        //Make a list from cat names
        for (name = 0; name < catNames.length; name++) {
            $(elemCatList).append('<li>' + catNames[name] + '</li>');;
        }
    },

    renderClickedCatInfo: function(clickedCat) {

        //Append all info related to clicked cat to DOM
        $(elemCatDashboard).empty().append('<div class="cat-info"><div class="click-counter">Clicks: ' + clickedCat.clickCounter + '</div><img class="cat-image" src="images/' + clickedCat.imageURL + '" alt="A cat"><div class="cat-attribution">Photo by <a href="' + clickedCat.siteHyperlink + clickedCat.authorHyperlink + '">' + clickedCat.authorName + '</a> via <a href="' + clickedCat.siteHyperlink + '">' + clickedCat.siteName + '</a></div></div></div>');

        view.fillCatForm(clickedCat);
    },

    fillCatForm: function(clickedCat) {
        $('.admin-button').unbind('click').click(function() {

        //Fill form with values from currently selected cat
        $("input[name='name']").val(clickedCat.name);
        $("input[name='imageURL']").val(clickedCat.imageURL);
        $("input[name='clickCounter']").val(clickedCat.clickCounter);

        octopus.setClickedCatData(clickedCat);
    });
    }

};
// Ignite the app !
octopus.init();