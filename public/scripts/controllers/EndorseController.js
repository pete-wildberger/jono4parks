app.controller('EndorseController', function($location, httpService) {
  console.log('EndorseController');
  const vm = this,
    hs = httpService;

vm.displayEndorsements = function(){
  hs.getItem('/endorse').then(function(res) {
    console.log('getres', res);
  });
};

  vm.addEndorsement = function() {
    ots = {
      firstName: vm.firstName,
      lastName: vm.lastName,
      occupation: vm.occupation
    };
    hs.postItem('/endorse', ots).then(function(res) {
      console.log('postres', res);
      vm.firstName = undefined;
      vm.lastName = undefined;
      vm.occupation = undefined;
    });
  };//end add

vm.displayEndorsements();
});//end controller
