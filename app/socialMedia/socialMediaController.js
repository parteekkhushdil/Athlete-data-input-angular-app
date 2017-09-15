(function () {
 
    angular
        .module('myAthlete')
        .controller('socialMediaController', socialMediaController);
 
    socialMediaController.$inject = [];
 
    function socialMediaController() {
        var vm = this;
        vm.title = 'Social Media Handles';
    }
})();