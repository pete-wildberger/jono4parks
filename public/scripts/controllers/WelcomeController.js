angular.module('myApp')
.controller('WelcomeController', WelcomeController);
WelcomeController.$inject=['$location', 'httpService'];
function WelcomeController($location, httpService) {
  console.log('WelcomeController');
  const vm = this;
  vm.go = function (path) { $location.path(path); }; 
}
