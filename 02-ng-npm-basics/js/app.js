(
    function () {
        var app = angular.module("users-app", []);

        app.controller("UserController", ["$scope", "$rootScope", function ($scope, $rootScope) {
            $scope.greet = "Good Morning All!";
            $scope.users = users;
            // var evens = getIntegers([1,2,3,4,5,6,7,8,9])();
            // console.log(evens);
        }]);

        app.filter("getIntegers", function () {
            return function (numbers) {
                var evenNumbers = [];
                for (var i = 0; i <= numbers.length; i++) {
                    if (numbers[i] % 2 === 0) {
                        evenNumbers.push(numbers[i]);
                    }
                }
                return evenNumbers;
            }
        })
    }
)();

var users = [{
    firstName: "Bill",
    lastName: "Gates",
    dob: new Date("Dec 2, 1965"),
    isWorking: true,
    income: 50000,
    company: "Microsoft",
    image: "./assets/images/bill.jpg",
    comments: [{
        stars: 4,
        body: "Great Work.",
        author: "abc@test.com"
    }, {
        stars: 5,
        body: "Well done.",
        author: "abc@test.com"
    }]
}, {
    firstName: "Steve",
    lastName: "Jobs",
    dob: new Date("Aug 2, 1965"),
    isWorking: false,
    income: 0,
    company: "Apple",
    image: "./assets/images/steve.png",
    comments: [{
        stars: 4,
        body: "Great Work.",
        author: "abc@test.com"
    }, {
        stars: 2,
        body: "Great Work.",
        author: "abc@test.com"
    }]
}, {
    firstName: "Tim B.",
    lastName: "Lee",
    dob: new Date("Jan 2, 1965"),
    isWorking: true,
    income: 30000,
    company: "World Wide Web",
    image: "./assets/images/tim.jpg",
    comments: [{
        stars: 4,
        body: "Great Work.",
        author: "abc@test.com"
    }, {
        stars: 2,
        body: "Great Work.",
        author: "abc@test.com"
    }]
}]


