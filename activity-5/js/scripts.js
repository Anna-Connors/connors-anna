/*
wrap everything in an IIFF
*/

(function() {
    //package data array (simulated data source)
    var data = [
        {
        name:'emmet',
        description: 'Emmet is the number one code snippet tool.',
        author: 'emmetio',
        url: 'https://atom.io/packages/emmet',
        downloads: 1662209,
        stars: 2456,
        price: 10.50,
        selector: 'p1'
        },
        {
        name: 'atom-beautify',
        description: 'The atom-beautify package will clean up your code.',
        author: 'Glavin001',
        url: 'https://atom.io/packages/atom-beautify',
        downloads: 4228040,
        stars: 4541,
        price: 6.75,
        selector: 'p2'    
        },
        {
        name: 'Rainbow Brackets',
        description: 'As someone who adds a lot of comments concerning curly braces, having color coded braces is amazing!',
        author: 'IHeartRainbows',
        url: 'https://marketplace.visualstudio.com/items?itemName=2gua.rainbow-brackets',
        downloads: 2285842,
        stars: 84,
        price: 0.00,
        selector: 'p3',     
        }
    ]; //end var data

    //Constructor function (customary to capitalize constructors)
    function Package(data) {
        this.name = data.name;
        this.description = data.description;
        this.author = data.author;
        this.url = data.url;
        this.downloads = data.downloads;
        this.stars = data.stars;
        this.selector = data.selector;

        this.getFormattedDownloads = function () {
            return this.downloads.toLocaleString();
        }

        this.getFormattedStars = function () {
            return this.stars.toLocaleString();
        }
    } //end Package

    /*********************
     * Utility functions
     ********************/
    //return today's date, formatted
    var getTodaysDate = function () {
        var today = new Date();
        return today.toDateString();
    }

    //returns DOM element by ID
    var getEl = function (id) {
        return document.getElementById(id);
    };

    //Write the package object's data to the appropriate DOM elements
    //utilizing the package selector properly.
    var writePackageInfo = function (package) {
        //get reference to DOM elements
        var selector = package.selector,
            nameEl = getEl(selector + '-name'),
            descEl = getEl(selector + '-description'),
            authEl = getEl(selector + '-author'),
            downloadEl = getEl(selector + '-downloads'),
            starsEl = getEl(selector + '-stars');

        //write package to the DOM elements
        nameEl.textContent = package.name;
        descEl.textContent = package.description;
        authEl.textContent = package.author;
        downloadEl.textContent = package.getFormattedDownloads();
        starsEl.textContent = package.getFormattedStars();
    };

    //write date
    var dateEl = getEl('date');
    dateEl.textContent = getTodaysDate();

    //write package data one-by-one
    var emmet = new Package(data[0]);
    writePackageInfo(emmet);

    var atom = new Package(data[1]);
    writePackageInfo(atom);

    var rainbow = new Package(data[2]);
    writePackageInfo(rainbow);

}()); //end function
