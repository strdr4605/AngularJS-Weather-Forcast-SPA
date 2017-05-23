// CONTROLLERS
weatherApp.controller('homeController', ['$scope', '$location', 'cityService', function($scope,$location,cityService){

  $scope.city = cityService.city;

  $scope.$watch('city', function() {
    cityService.city = $scope.city;
  });

  $scope.submit = function() {
    $location.path("/forecast");
  };
}]);

weatherApp.controller('forecastController', ['$scope', '$routeParams', 'cityService', 'weatherService', function($scope, $routeParams, cityService, weatherService){

  $scope.city = cityService.city;
  $scope.appid = 'e04b30b1e12c331a401c7669d7ab0afe';
  $scope.days = $routeParams.days || '1';

  $scope.weatherResult = weatherService.getWeather($scope.city, $scope.appid, $scope.days)

  $scope.convertToCelsius = function(degK) {

    return Math.round(degK - 273.15)

  }

  $scope.convertToDate = function(dt) {

    return new Date(dt * 1000);

  }

}]);
