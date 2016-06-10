app.config(function($stateProvider) {

    // Register our *about* state.
    $stateProvider.state('about', {
        url: '/about',
        controller: 'AboutController',
        templateUrl: 'js/about/about.html'
    });

});

app.controller('AboutController', function($scope) {
    $scope.items = [];
    for (var i = 2; i < 20; i++) {
        $scope.items.push('/image' + i + '.jpg');
    }


    $scope.blocks = [];

    for (var i = 1; i <= 15; i++) {
        let block = {
            num: i
        };
        $scope.blocks.push(block);
    }



    

    // $(window).load(function() {
    //     console.log('before grid');
    //     var $grid = $('.grid').masonry({
    //         itemSelector: '.grid-item',
    //         percentPosition: true,
    //         columnWidth: '.grid-sizer',
    //         gutter: 20
    //     });
    // });
    var grid = document.querySelector('.grid');

    var msnry = new Masonry(grid, {
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        percentPosition: true
    });

    // imagesLoaded(grid).on('progress', function() {
    //     // layout Masonry after each image loads
    //     msnry.layout();
    // });
    $scope.layout = () => {


    var grid = document.querySelector('.grid');

    var msnry = new Masonry(grid, {
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        percentPosition: true,
        gutter: 10,
        columnWidth: 80
    });

    imagesLoaded(grid).on('progress', function() {
        // layout Masonry after each image loads
        msnry.layout();
    });
}







    //      imagesLoaded(document.querySelector('.grid'), function(instance) {
    //     console.log('all images are loaded');
    //     $grid.masonry('layout');
    // });
    // layout Isotope after each image loads



});