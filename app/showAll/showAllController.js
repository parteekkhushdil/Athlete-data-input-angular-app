(function () {
    angular
        .module('myAthlete')
        .controller('showAllController', showAllController);
 
    showAllController.$inject = ['$scope', '$http'];
 
    function showAllController($scope, $http) {
        var vm1 = this;
        vm1.title = 'Show all page';
        $http.get('/api/AthleteData').then(function(res){
            if (res.data){
                $scope.data = res.data;
                console.log(res.data);
            }
        })
    }
})();