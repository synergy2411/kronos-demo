(
    function (){
        var app = angular.module("users-app", []);

        app.controller("UserController", function($scope, $rootScope){
            $scope.greet = "Good Morning All!";
            $scope.users = users;
        });
    }
)();

var users = [{
    firstName : "Bill",
    lastName :"Gates",
    dob : new Date("Dec 2, 1965"),
    isWorking : true,
    income : 50000,
    company : "Microsoft",
    image : "./assets/images/bill.jpg"
},{
    firstName : "Steve",
    lastName :"Jobs",
    dob : new Date("Aug 2, 1965"),
    isWorking : false,
    income : 0,
    company : "Apple",
    image : "./assets/images/steve.png"
},{
    firstName : "Tim B.",
    lastName :"Lee",
    dob : new Date("Jan 2, 1965"),
    isWorking : true,
    income : 30000,
    company : "World Wide Web",
    image : "./assets/images/tim.jpg"
}]
