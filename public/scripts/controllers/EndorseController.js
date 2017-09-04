angular.module('myApp')
.controller('EndorseController', EndorseController);

EndorseController.$inject=['$location', 'httpService'];

function EndorseController($location, httpService){
  console.log('EndorseController');
  const vm = this,
    hs = httpService;


    function chunk(arr, size) {
      var newArr = [];
      for (var i=0; i<arr.length; i+=size) {
        newArr.push(arr.slice(i, i+size));
      }
      return newArr;
    }



vm.displayEndorsements = function(){
  hs.getItem('/endorse').then(function(res) {
    console.log('getres', res);
  vm.endorseArr = chunk(res.data, 3);
  });
};

  vm.addEndorsement = function() {
    let its = {
      firstName: vm.firstName,
      lastName: vm.lastName,
      occupation: vm.occupation
    };
    hs.postItem('/endorse', its).then(function(res) {
      console.log('postres', res);
      swal({
        title: 'Sweet!',
        text: 'Thank you for your support!',
        imageUrl: 'assets/logo.png',
        imageWidth: 400,
        imageHeight: 200,
        animation: false
      });
      vm.firstName = undefined;
      vm.lastName = undefined;
      vm.occupation = undefined;
      vm.displayEndorsements();
    });
  };//end add

vm.displayEndorsements();
}//end controller
