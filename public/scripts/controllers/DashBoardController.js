app.controller('DashController', function($location, httpService, AuthFactory) {
  console.log('DashController');
  const vm = this;
  const hs = httpService
  vm.endorse = false;
  console.log('log', vm.endorse);
  vm.event = false;
  vm.message = false;
  vm.endorsements = [];

  hs.getItem('auth').then(function(res) {
    console.log(res.data);
    if (res.data.name) {
      vm.name = res.data.name.googleName;
    } else {
      alert('log in please');
      $location.path('/');
    }
  }); //end httpService get item
  vm.populateTable = function(path){
  hs.getItem(path).then(function(res){
    if(path == '/endorse'){
      console.log('res', res.data);
    vm.endorsements = res.data;
  }
  });
};

  AuthFactory.isLoggedIn()
    .then(function(response) {
        if (response.data.status) {
          vm.displayLogout = true;
          AuthFactory.setLoggedIn(true);
          vm.username = response.data.name;
        } else { // is not logged in on server
          vm.displayLogout = false;
          AuthFactory.setLoggedIn(false);
        }
      },

      function() {
        vm.message.text = 'Unable to properly authenticate user';
        vm.message.type = 'error';
      });

  vm.logout = function() {
    AuthFactory.logout()
      .then(function(response) { // success
          AuthFactory.setLoggedIn(false);
          vm.username = '';
          $location.path('/'); // forces a page reload which will update our NavController
        },

        function(response) { // error
          vm.message.text = 'Unable to logout';
          vm.message.type = 'error';
        });
  };

  vm.showTable = function(id) {
    if (id == 0) {
      vm.populateTable('/endorse');
      vm.endorse = !vm.endorse;
      vm.event = false;
      vm.message = false;
    } else if (id == 1) {
      vm.endorse = false;
      vm.event = !vm.event;
      vm.message = false;
    } else {
      vm.endorse = false;
      vm.event = false;
      vm.message = !vm.message;
    }
  };

  vm.removeRow = function(index) {
    console.log('remove');
    // vm.employees.splice(index, 1);
    // vm.expend = ArraySum(vm.employees);
  };
});
