angular.module('myApp').config(router);
router.$inject = ['$routeProvider', '$locationProvider'];
function router($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/views/partials/welcome.html',
      controller: 'IndexController as ic',
      controllerAs: 'ic'
    })
    .when('/endorsements', {
      templateUrl: '/views/partials/endorse.html',
      controller: 'EndorseController as ec',
      controllerAs: 'ec'
    })
    .when('/dash', {
      templateUrl: '/views/partials/dashboard.html',
      controller: 'DashController as dc',
      controllerAs: 'dc'
    })
    .when('/admin', {
      templateUrl: '/views/partials/admin.html',
      controller: 'IndexController as ic',
      controllerAs: 'ic'
    })
    // .when('/auth/google', {
    //   redirectTo: 'https://www.googleapis.com/auth/calendar'
    // })
    .when('/issues', {
      templateUrl: '/views/partials/issues.html',
      controller: 'IndexController as ic',
      controllerAs: 'ic'
    })
    .when('/about', {
      templateUrl: '/views/partials/about.html',
      controller: 'IndexController as ic',
      controllerAs: 'ic'
    })
    .when('/support', {
      templateUrl: '/views/partials/support.html',
      controller: 'SupportController as sc',
      controllerAs: 'sc'
    })
    .when('/events', {
      templateUrl: '/views/partials/events.html',
      controller: 'EventsController as ec',
      controllerAs: 'ec'
    })
    .when('/auth/google', {
      templateUrl: '/views/partials/google.html',
      controller: 'AuthController as ac',
      controllerAs: 'ac'
    })
    .when('/donate.html', {
      redirectTo: '/support'
    })
    .when('/contact.html', {
      redirectTo: '/support'
    });

  $locationProvider.html5Mode(true);
  $locationProvider.hashPrefix('');
}
