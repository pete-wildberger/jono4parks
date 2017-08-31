app.controller('EndorseController', function($location, httpService) {
  console.log('EndorseController');
  const vm = this,
    hs = httpService;

    vm.colOneArr = [];
    vm.colTwoArr = [];
    vm.colThreeArr = [];

vm.displayEndorsements = function(){
  hs.getItem('/endorse').then(function(res) {
    console.log('getres', res);
    endorseArr = res.data;
    listLength = Math.ceil(endorseArr.length / 3);
    for (let i = 0; i < endorseArr.length; i++) {
      console.log('looping', i);
      if(i <= listLength){
      vm.colOneArr.push(endorseArr[i]);
    } else if (i > listLength && i <= (2 * listLength)){
      vm.colTwoArr.push(endorseArr[i]);
    } else {
      vm.colThreeArr.push(endorseArr[i]);
    }
    }
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
      vm.displayEndorsements();
    });
  };//end add

vm.displayEndorsements();
});//end controller
