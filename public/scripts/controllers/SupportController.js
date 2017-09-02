angular.module('myApp')
.controller('SupportController', SupportController);
SupportController.$inject=['$location', 'httpService', 'AuthFactory'];
function SupportController($location, httpService, AuthFactory) {
  console.log('SupportController');
  const vm = this;


}
