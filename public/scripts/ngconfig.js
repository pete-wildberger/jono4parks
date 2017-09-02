angular.module('myApp')
  .config(router);
  router.$inject= ['$routeProvider'];
function router($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: "/views/partials/welcome.html",
        controller: "WelcomeController as wc",
        controllerAs:"wc"
    }).when('/endorsements', {
        templateUrl: "/views/partials/endorse.html",
        controller: "EndorseController as ec",
        controllerAs:"ec"
    }).when('/dash', {
        templateUrl: "/views/partials/dashboard.html",
        controller: "DashController as dc",
        controllerAs:"dc"
    }).when('/admin', {
        templateUrl: "/views/partials/admin.html",
        controller: "IndexController as ic",
        controllerAs:"ic"
    }).when('/issues', {
        templateUrl: "/views/partials/issues.html",
        controller: "IndexController as ic",
        controllerAs:"ic"
    }).when('/about', {
        templateUrl: "/views/partials/about.html",
        controller: "IndexController as ic",
        controllerAs:"ic"
    });
  }
