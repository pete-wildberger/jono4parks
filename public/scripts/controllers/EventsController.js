angular.module('myApp')
  .controller('EventsController', EventsController);

EventsController.$inject = ['$location', 'httpService', 'AuthFactory'];

function EventsController($location, httpService, AuthFactory) {
  console.log('EventsController');
  const vm = this,
    hs = httpService;

  vm.eventsArr = [];

  vm.displayEvents = function() {
    hs.getItem('/events').then(function(res) {
      console.log('getres', res);
      vm.eventsArr = res.data;
    });
  };
  vm.displayEvents();
}
