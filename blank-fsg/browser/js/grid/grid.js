app.config(function($stateProvider) {
    $stateProvider.state('grid', {
        url: '/grid',
        controller: 'GridCtrl',
        templateUrl: 'js/grid/grid.html',
        resolve: {
            videos: function(GridFactory) {
                return GridFactory.fetchVideos( ).then(function(res) {
                    return res.data.data;
                });
            }
        }
    });
});

app.controller('GridCtrl', function($scope, GridFactory, videos) {
    $scope.videoPlaying = true;
    $scope.videos = videos;
    console.log("videos", videos);
    $scope.text = 'Hello';
    $scope.items = [];
    $scope.videoLoad = false;

    for (var i = 2; i < 10; i++) {
        $scope.items.push('/image' + i + '.jpg');
    }


    $scope.fetch = () => {
        var size = getSize(document.getElementById("wrapper"))
        console.log('size', size);
        $scope.width = (size.width / 3) - 40;
        GridFactory.fetchVideos().then(function(res) {
            $scope.videoLoad = true;
            console.log('resp', res.data.data);
            $scope.videos = res.data.data;
        });

    }

});





app.directive('videoElem', function($rootScope, AuthService, AUTH_EVENTS, $state, $sce, $uibModal) {

    return {
        restrict: 'E',
        scope: {
            video: '=',
            width: '='
        },
        controller: "ModalCtrl",
        templateUrl: 'js/grid/video.html',
        link: function(scope, elem, attr) {

            let src = "https://player.vimeo.com/video/";
            var regexp = /\d+/gi;
            scope.picture = scope.video.pictures.sizes[2].link;
            var videoId = scope.video.uri.match(regexp);
            scope.vidLink = src + videoId + '?badge=0&autopause=0&player_id=0';

            scope.trustSrc = function(src) {
                return $sce.trustAsResourceUrl(src);
            }

            // scope.height = scope.width * .5625;
            var box = document.getElementById("wrapper");
            console.log('height', scope.height);
            scope.openModal = function() {

                var modalInstance = $uibModal.open({
                    animation: true,
                    appendTo: box,
                    scope: scope,
                    templateUrl: 'js/grid/video-window.html',
                    controller: 'ModalCtrl',
                    size: 'Lg'
                });

            }
        }
    };
});


function Modal($scope, $uibModal) {

}




app.controller('ModalCtrl', Modal);