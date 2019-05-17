(
    function(){
        var  app = angular.module("my-directives", []);

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
                    
                }
            }
        })

    }
)();