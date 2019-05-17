(
    function(){
        var app = angular.module("my-services", []);

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

    }
)();