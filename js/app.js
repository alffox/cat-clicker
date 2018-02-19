var model = {
    //TODO: It could be nice to turn this model into an ajax call that fetches data from given site/API

    cats: [{
            clickCounter: 0,
            name: 'Ashes',
            imageURL: 'images/cat1_960x640.jpg',
            authorName: 'Mikhail Vasilyev',
            authorHyperlink: '@miklevasilyev',
            siteName: 'Unsplash',
            siteHyperlink: 'https://unsplash.com/'
        },
        {
            clickCounter: 0,
            name: 'Tiger',
            imageURL: 'images/cat2_960x640.jpg',
            authorName: 'Paul',
            authorHyperlink: '@paul_',
            siteName: 'Unsplash',
            siteHyperlink: 'https://unsplash.com/'
        },
        {
            clickCounter: 0,
            name: 'Lion',
            imageURL: 'images/cat3_960x640.jpg',
            authorName: 'Kari Shea',
            authorHyperlink: '@karishea',
            siteName: 'Unsplash',
            siteHyperlink: 'https://unsplash.com/'
        },
        {
            clickCounter: 0,
            name: 'Felix',
            imageURL: 'images/cat4_960x640.jpg',
            authorName: 'Pacto Visual',
            authorHyperlink: '@pactovisual',
            siteName: 'Unsplash',
            siteHyperlink: 'https://unsplash.com/'
        },
        {
            clickCounter: 0,
            name: 'Napoleon',
            imageURL: 'images/cat5_960x640.jpg',
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

        // Inializes empty clickedCat variable that will allow using it as empty argument to be filled later upon click on list
        var clickedCat = null;

        //Called now to always be ready to listen to clicks
        octopus.getClickedCatData(clickedCat);
    },

    getCatNames: function() {

        //Loops on cats object and returns only cat names array
        return catNames = model.cats.map(a => a.name);
    },

    getClickedCatData: function() {
        $(elemUl).unbind('click').click(function(e) {

            //Assigns index position of clicked cat
            var clickedCatIndexPos = $(e.target).index();

            //Casts cat index position with model array position
            clickedCat = model.cats[clickedCatIndexPos];

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

            view.hideShowform();

            clickedCat.name = $(elemInputName).val();
            clickedCat.imageURL = $(elemInputimageURL).val();
            clickedCat.clickCounter = $(elemInputclickCounter).val();

            view.renderList();
            view.renderClickedCatInfo(clickedCat);

            $(elemAdminButton).prop("disabled", true);

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
        elemCancelButton = $('.cancel-button');

        elemHideable = $('.hideable');

        elemInputName = $("input[name='name']");
        elemInputimageURL = $("input[name='imageURL']");
        elemInputclickCounter = $("input[name='clickCounter']");

        view.renderList();

        //If there is no cat in the list, it should not be possible to update it
        elemAdminButton.prop("disabled", true);
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
        $(elemCatDashboard).empty().append('<div class="cat-info"><div class="click-counter">Clicks: ' + clickedCat.clickCounter + '</div><img class="cat-image" src="' + clickedCat.imageURL + '" alt="A cat"><div class="cat-attribution">Photo by <a href="' + clickedCat.siteHyperlink + clickedCat.authorHyperlink + '">' + clickedCat.authorName + '</a> via <a href="' + clickedCat.siteHyperlink + '">' + clickedCat.siteName + '</a></div></div></div>');

        //Enable Admin button
        $(elemAdminButton).prop("disabled", false);

        view.fillCatForm(clickedCat);
        octopus.getClickedCatData(clickedCat);
        octopus.setClickedCatData(clickedCat);
    },

    fillCatForm: function(clickedCat) {
        elemAdminButton.unbind('click').click(function() {

            view.hideShowform();

            //Fill form with values from currently selected cat
            $(elemInputName).val(clickedCat.name);
            $(elemInputimageURL).val(clickedCat.imageURL);
            $(elemInputclickCounter).val(clickedCat.clickCounter);

            view.cancelAdmin();
        });
    },

    cancelAdmin: function() {
        elemCancelButton.unbind('click').click(function() {
            view.hideShowform();
        });
    },

    hideShowform: function() {
        $(elemHideable).toggleClass('hidden');
    }

};
// Ignite the app !
octopus.init();