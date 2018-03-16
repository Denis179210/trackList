(function() {
    angular
        .module('iTunesApp')
        .controller('mainController', mainController);


    function mainController($scope, $resource) {
        
        $scope.fetchData = fetchData;
        $scope.toggleTrack = toggleTrack;

        // Defaul track list :                                       //

        $resource('https://itunes.apple.com/search?term=rammstein')
            .get().$promise
            .then(function(res) {
                console.log(res.results)
                $scope.trackList = res.results;
            })
        //                                                           //
       

        function fetchData(e) {
            e.target.blur()
            $resource(`https://itunes.apple.com/search?term=${$scope.request.replace(' ', '+')}`)
                .get().$promise
                .then(function(res) {
                    console.log(res.results)
                    $scope.trackList = res.results;
                })
        }

        function toggleTrack(track) {
            
            if(track.show) {
                $scope.trackList.map((track) => {
                    track.show = false;
                })
                track.show = false;
                console.log(track.show)
                return
            }
            if(track.show === undefined || !track.show) {
                $scope.trackList.map((track) => {
                    track.show = false;
                })
                track.show = true;
                console.log(track.show)
            }
        }
    } 
}())