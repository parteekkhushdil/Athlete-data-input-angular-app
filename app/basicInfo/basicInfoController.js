(function () {
    angular
        .module('myAthlete')
        .controller('basicInfoController', basicInfoController);
 
    basicInfoController.$inject = ['$scope'];
    var sportsList = ['Golf',
'Tennis',
'Cricket',
'Basketball',
'Baseball',
'American Football',
'Aquatics',
'Archery',
'Automobile Racing',
'Badminton',
'Beach Volleyball',
'Bobsleigh',
'Body Building',
'Boxing',
'Cross Country Running',
'Cross Country Skiing',
'Curling',
'Cycling',
'Darts',
'Decathlon',
'Down Hill Skiing',
'Equestrianism',
'eSports',
'Fencing',
'Field Hockey',
'Figure Skating',
'Gymnastics',
'Ice Hockey',
'Martial Arts',
'Mixed Martial Arts',
'Modern Pentathlon',
'Motorcycle Racing',
'Netball',
'Polo',
'Racquetball',
'Rowing',
'Rugby',
'Sailing',
'Softball',
'Shooting',
'Skateboarding',
'Skeet Shooting',
'Skeleton',
'Snow Boarding',
'Soccer (Football)',
'Squash',
'Surfing',
'Swimming',
'Track and Field']
    function basicInfoController($scope) {
        var vm = this;
        vm.title = 'Basic Info ';
        $scope.sports = sportsList;
    }
})();