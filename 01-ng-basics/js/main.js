
(
    function(){
        var greeting = "Hello from Main";
        var app = angular.module("my-ng-app", []);
        app.controller("MainNgController", function () {
            this.message = "Welcome to Angular!";
        });
    }
)();