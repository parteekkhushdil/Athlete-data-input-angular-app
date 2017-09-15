(function () {
    angular
        .module('myAthlete')
        .value('FormDataModel', FormDataModel);
 
    function FormDataModel() {
        this.name = '';
        this.dob = '';
        this.nationality = '';
        this.location = '';
        this.association= '';
        this.team = '';
        this.gender = '';
        this.sports = '';
        this.about = '';
        this.interests = '';
        this.charities = '';
        this.socialMedia = {
            'Facebook': '',
            'Twitter': '',
            'Instagram': '',
            'Youtube': '',
            'Twitch': '',
            'Snapchat': ''
        };
        this.pets = '';
        this.drinkAlcohol = '';
        this.married = '';
    }
})();