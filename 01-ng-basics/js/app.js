
(
    function () {
        var greeting = "Hello from App";
        var app = angular.module("my-app", []);
        app.controller("MainController", function () {
            this.message = "Welcome to Angular!";
        });

        app.controller("SecondController", function ($scope) {
            $scope.greet = "Hello World!";
        });
    }
)();