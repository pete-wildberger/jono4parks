angular.module('myApp')
.controller('EventsController', EventsController);

EventsController.$inject=['$location', 'httpService', 'AuthFactory'];

function EventsController($location, httpService, AuthFactory) {
  console.log('EventsController');
  const vm = this;


}
