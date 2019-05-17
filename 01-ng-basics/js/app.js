
(
    function () {
        var app = angular.module("my-app", []);
        // Alias Controller
        app.controller("MainController", function () {
            this.message = "Welcome to Angular!";
        });

        // Scope Controller
        app.controller("SecondController", function ($scope) {
            $scope.greet = "Hello World!";
        });
    }
)();