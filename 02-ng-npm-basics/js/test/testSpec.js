describe('UsersController', function() {
    beforeEach(module('my-app'));
  
    var $controller, $rootScope;
  
    beforeEach(inject(function(_$controller_, _$rootScope_){
      // The injector unwraps the underscores (_) from around the parameter names when matching
      $controller = _$controller_;
      $rootScope = _$rootScope_;
    }));
  
    describe('$scope.greet', function() {
      it('Should containe Good Morning', function() {
        var $scope = $rootScope.$new();
        var controller = $controller('UsersController', { $scope: $scope });
        expect($scope.greet).toContain('Good Morning');
      });
    });
  });