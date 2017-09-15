(function() {

    var app = angular.module('myAthlete', ['ui.router'])

    app.config(['$stateProvider', '$urlRouterProvider',

        function($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/form/basicInfo');
    
            $stateProvider
                .state('form', {
                    url: '/form',
                    templateUrl: 'app/form/form.html',
                    controller: 'FormController'
                })

                .state('form.basicInfo', {
                    url: '/basicInfo',
                    templateUrl: 'app/basicInfo/basicInfo.html',
                    controller: 'basicInfoController',
                    controllerAs: 'vm'
                })
        
                .state('form.about', {
                    url: '/about',
                    templateUrl: 'app/about/about.html',
                    controller: 'aboutController',
                    controllerAs: 'vm'
                })
        
                .state('form.socialMedia', {
                    url: '/socialMedia',
                    templateUrl: 'app/socialMedia/socialMedia.html',
                    controller: 'socialMediaController',
                    controllerAs: 'vm'
                })

                .state('form.summary', {
                    url: '/summary',
                    templateUrl: 'app/summary/summary.html',
                    controller: 'summaryController',
                    controllerAs: 'vm'
                })
                
                .state('showAll', {
                url: '/showAll',
                templateUrl: 'app/showAll/showAll.html',
                controller: 'showAllController',
                controllerAs: 'vm1'
            })
        }
    ]);
       
})();
