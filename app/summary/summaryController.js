(function () {
 
    angular
        .module('myAthlete')
        .controller('summaryController', summaryController)
        .directive('summaryDiv', summaryDiv);
 
    summaryController.$inject = ['$scope', '$http', '$location'];
 
    function summaryDiv($interpolate){
         return {
                             scope: {key:'@', value: '@'}
,
                template: '<div class="row"><div class="col-xs-6"><div class="form-group"><label class="control-label float-right" for="nationality">{{ Key }}: </label></div></div><div class="col-xs-6"><label class="float-left font-normal">{{ value }}</label></div></div>',
                link:function(scope,elem,attrs){
                    scope.$watch('key', function(key){
                        scope.key = $interpolate(attrs.key)(scope);
                    })
            
        }
        };
    };
    
    function summaryController($scope, $http, $location) {
        var vm = this;
        vm.title = 'Summary!';
        vm.submitData = function(formData) {
            console.log(formData);
            var url = "/api/AthleteData";
            $http.post(url,formData);
            $location.path('/showAll')
        };

    }
})();
