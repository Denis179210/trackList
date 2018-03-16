(function() {
    angular
        .module('iTunesApp')
        .config(config)

    function config($stateProvider, $locationProvider) {
        $stateProvider
            .state({
                name: 'main',
                url: '/',
                templateUrl : 'main/main.html',
                controller: 'mainController'
            })

        $locationProvider.html5Mode(true);
        //
    }   
})();
