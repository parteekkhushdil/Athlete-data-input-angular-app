(function () {

    angular
        .module('myAthlete')
        .controller('FormController', FormController);
 
    FormController.$inject = ['$scope', 'FormDataModel'];
 
    function FormController($scope, FormDataModel) {
        var vm = this;
        vm.title = 'My Athlete Input Form';
        $scope.formData = new FormDataModel();
    }
})();
