(function () { 
    angular
        .module('myAthlete')
        .controller('aboutController', aboutController);
 
    aboutController.$inject = [];
 
    function aboutController() {
        var vm = this;
        vm.title = 'About you';
    }
})();
