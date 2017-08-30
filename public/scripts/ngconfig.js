app.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: "/views/partials/welcome.html",
        controller: "WelcomeController as wc",
        controllerAs:"wc"
    }).when('/endorsements', {
        templateUrl: "/views/partials/endorse.html",
        controller: "EndorseController as ec",
        controllerAs:"ec"
    });
  });
