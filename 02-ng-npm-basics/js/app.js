(
    function () {
        var app = angular.module("users-app", []);

        app.service("MyDataService", function($http){
            this.getData = function(){
                $http.post("", {})
                return $http.get("./assets/model/user-data.json");
            }
        });

        app.factory("MyDataFactory", function($http){
            var getData = function(){
                return $http({
                    url : "./assets/model/user-data.json", 
                    method : "GET"
                });
            }

            return {
                getData : getData
            }
        });

        app.controller("UserController", ["$scope", "$rootScope", "$filter", "MyDataService", "$log", "MyDataFactory",
            function ($scope, $rootScope, $filter, MyDataService, $log, MyDataFactory) {
                $scope.greet = "Good Morning All!";

                // MyDataService.getData()
                MyDataFactory.getData()
                .then(function(response){
                    console.log(response.data.userdata);
                    $scope.users = response.data.userdata;
                })
                .catch(function(err){
                    console.log("err", err)
                })
                
                $scope.clicked = function(){
                    // MyDataService.getData();
                    $log.log("Who's this?");
                }
                // Using filter inside script
                // var evens = $filter('getIntegers')([1,2,3,4,5,6,7,8,9]);
                // console.log(evens);
            }]);

        // app.controller("CommentFormController", function ($scope) {
           
        // })

        app.directive("myComment", function () {
            return {
                restrict: "ACE",
                // template : "<h1>My Comment Template</h1>"
                templateUrl : './views/my-comment.html',
                controller : function($scope){
                    $scope.comment = {};
                    $scope.addComment = function (user) {
                        console.log($scope.comment);
                        user.comments.push($scope.comment);
                        $scope.comment = {};
                    }
                    
                },
                scope : {}
            }
        })

        //Scope Isolation Methods :  
            // '@' - one way binding effect
            // '=' - Two way binding
            // '&' - parent function call

            app.directive("demoDirective", function(){
                return {
                    restrict : 'ACE',
                    template : `
                        <input type="text" ng-model="greet">
                        {{ greet }}
                        <button ng-click= "clicked()">Click Me</button>
                        `,
                    controller : function($scope){},
                    scope : {
                        "greet" : '=',
                        "clicked" : '&'
                    }
                }
            })

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

// var users = [{
//     firstName: "Bill",
//     lastName: "Gates",
//     dob: new Date("Dec 2, 1965"),
//     isWorking: true,
//     income: 50000,
//     company: "Microsoft",
//     image: "./assets/images/bill.jpg",
//     comments: [{
//         stars: 4,
//         body: "Great Work.",
//         author: "abc@test.com"
//     }, {
//         stars: 5,
//         body: "Well done.",
//         author: "abc@test.com"
//     }]
// }, {
//     firstName: "Steve",
//     lastName: "Jobs",
//     dob: new Date("Aug 2, 1965"),
//     isWorking: false,
//     income: 0,
//     company: "Apple",
//     image: "./assets/images/steve.png",
//     comments: [{
//         stars: 4,
//         body: "Great Work.",
//         author: "abc@test.com"
//     }, {
//         stars: 2,
//         body: "Great Work.",
//         author: "abc@test.com"
//     }]
// }, {
//     firstName: "Tim B.",
//     lastName: "Lee",
//     dob: new Date("Jan 2, 1965"),
//     isWorking: true,
//     income: 30000,
//     company: "World Wide Web",
//     image: "./assets/images/tim.jpg",
//     comments: [{
//         stars: 4,
//         body: "Great Work.",
//         author: "abc@test.com"
//     }, {
//         stars: 2,
//         body: "Great Work.",
//         author: "abc@test.com"
//     }]
// }]


