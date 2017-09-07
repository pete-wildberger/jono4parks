angular.module('myApp')
  .controller('DashController', DashController);

DashController.$inject = ['$location', 'httpService', 'AuthFactory'];

function DashController($location, httpService, AuthFactory) {
  console.log('DashController');
  const vm = this;
  const hs = httpService
  vm.endorse = false;
  vm.event = false;
  vm.message = false;
  vm.signs = false;
  vm.tableData = [];
  vm.changes = {};

  window.onclick = function(event) {
    let tId = event.target.getAttribute("id");
    if (event.target.getAttribute("class") == 'modal') {
      document.getElementById(tId).style.display = 'none';
    }
  };

  hs.getItem('auth').then(function(res) {
    if (res.data.name) {
      vm.name = res.data.name.googleName;
    } else {
      alert('log in please');
      $location.path('/');
    }
  }); //end httpService get item


  vm.populateTable = function(path) {
    hs.getItem(path).then(function(res) {
      console.log(res.data);
        vm.tableData = res.data;
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
      vm.signs = false;
    } else if (id == 1) {
      vm.populateTable('/events');
      vm.endorse = false;
      vm.event = !vm.event;
      vm.message = false;
      vm.signs = false;
    } else if (id == 2) {
      vm.populateTable('/messages');
      vm.endorse = false;
      vm.event = false;
      vm.message = !vm.message;
      vm.signs = false;
    } else if (id == 3) {
      vm.populateTable('/private/signs');
      vm.endorse = false;
      vm.event = false;
      vm.message = false;
      vm.signs = !vm.signs;
    }
  };
  vm.openEndorseModal = function(id) {
    document.getElementById('endorseModal').style.display = 'block';
    let idx = vm.tableData.indexOf(id);
    vm.changes = vm.tableData[idx];
  };
  vm.openEventModal = function(id) {
    document.getElementById('eventModal').style.display = 'block';
    let idx = vm.tableData.indexOf(id);
    vm.changes = vm.tableData[idx];
  };
  vm.openMessageModal = function(id) {
    document.getElementById('messageModal').style.display = 'block';
    let idx = vm.tableData.indexOf(id);
    vm.changes = vm.tableData[idx];
  };

  vm.addToEvents = function() {
    let its = {
      eventName: vm.eventName,
      date: vm.date,
      time: vm.time,
      location: vm.location,
      url: vm.url,
      description: vm.description
    };
    console.log('its', its);
    hs.postItem('/private/events', its).then(function(res) {
      vm.eventName = undefined;
      vm.date = undefined;
      vm.time = undefined;
      vm.location = undefined;
      vm.description = undefined;
      vm.populateTable('/events');
    });
  };

  vm.editEndorse = function(id) {
    hs.putItem('/private/endorse', id, vm.changes).then(function(res) {
      vm.changes = {};
      vm.populateTable('/endorse');
      document.getElementById('endorseModal').style.display = 'none';
    });
  };
  vm.editEvents = function(id) {
    hs.putItem('/private/events', id, vm.changes).then(function(res) {
      vm.changes = {};
      vm.populateTable('/events');
      document.getElementById('eventModal').style.display = 'none';
    });
  };

  vm.removeEndorse = function(id) {
    console.log('remove');
    hs.deleteItem('private/endorse', id).then(function(res) {
      vm.populateTable('/endorse');
    });
  };
  vm.removeMessage = function(id) {
    console.log('remove');
    hs.deleteItem('private/messages', id).then(function(res) {
      vm.populateTable('/messages');
    });
  };
  vm.removeEvent = function(id) {
    console.log('remove');
    hs.deleteItem('private/events', id).then(function(res) {
      vm.populateTable('/events');
    });
  };
  vm.removeSign = function(id) {
    console.log('remove');
    hs.deleteItem('private/signs', id).then(function(res) {
      vm.populateTable('/private/signs');
    });
  };
}
