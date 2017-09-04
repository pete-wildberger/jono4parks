angular.module('myApp')
  .config(router);
  router.$inject= ['$routeProvider'];
function router($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: "/views/partials/welcome.html",
        controller: "IndexController as ic",
        controllerAs:"ic"
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
    }).when('/support', {
        templateUrl: "/views/partials/support.html",
        controller: "SupportController as sc",
        controllerAs:"sc"
    }).when('/events', {
        templateUrl: "/views/partials/events.html",
        controller: "EventsController as ec",
        controllerAs:"ec"
    });
  }
