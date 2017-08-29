app.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: "/views/partials/welcome.html",
        controller: "WelcomeController as wc",
        controllerAs:"wc"
    });
  });
