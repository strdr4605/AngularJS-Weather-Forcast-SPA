// SERVICES
weatherApp.service('cityService', function (){
  this.city = "Chisinau"
});

weatherApp.service('weatherService', ['$resource',function($resource) {
  this.getWeather = function(city, appid, days) {

    var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", { callback: "JSON_CALLBACK" }, {get: { method: "JSONP"}});

    return weatherAPI.get({ q: city, appid: appid, cnt: days });

  }
}]);
