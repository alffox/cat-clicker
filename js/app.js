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
        $(elemUl).click(function(e) {

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
        // This is unbunding/binding is necessary to remove previously clicked cat object references
        $(elemSaveButton).unbind('click').click(function() {

            $(elemHideable).toggleClass('hidden');

            clickedCat.name = $(elemInputName).val();
            clickedCat.imageURL = $(elemInputimageURL).val();
            clickedCat.clickCounter = $(elemInputclickCounter).val();

            view.renderList();
            view.renderClickedCatInfo(clickedCat);

            $(elemAdminButton).prop("disabled",true);

            octopus.getClickedCatData(clickedCat);
        });
    }

};


var view = {

    init: function() {

        // Store pointers to DOM elements for easy access later
        elemCatList = $('.cat-list');
        elemCatDashboard = $('.cat-dashboard');
        elemUl = $('ul');

        elemAdminButton = $('.admin-button');
        elemSaveButton = $('.save-button');

        elemHideable = $('.hideable');

        elemInputName = $("input[name='name']");
        elemInputimageURL = $("input[name='imageURL']");
        elemInputclickCounter = $("input[name='clickCounter']");

        view.renderList();

        //If there is no cat in the list, it should not be possible to update it
        elemAdminButton.prop("disabled",true);
    },

    renderList: function() {

        $(elemUl).empty();

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

        //Enable Admin button
        $(elemAdminButton).prop("disabled",false);

        view.fillCatForm(clickedCat);
        octopus.setClickedCatData(clickedCat);
    },

    fillCatForm: function(clickedCat) {
        elemAdminButton.click(function() {

        $(elemHideable).toggleClass('hidden');

        //Fill form with values from currently selected cat
        $(elemInputName).val(clickedCat.name);
        $(elemInputimageURL).val(clickedCat.imageURL);
        $(elemInputclickCounter).val(clickedCat.clickCounter);

        octopus.getClickedCatData(clickedCat);

    });
    }

};
// Ignite the app !
octopus.init();