angular.module('myApp')
  .controller('SupportController', SupportController);
SupportController.$inject = ['$location', 'httpService', 'AuthFactory', '$window'];

function SupportController($location, httpService, AuthFactory, $window) {
  console.log('SupportController');
  const vm = this;
  const hs = httpService;

  vm.addToList = function() {
    let its = {
      firstName: vm.firstName,
      lastName: vm.lastName,
      phone: vm.phone,
      email: vm.email,
      comment: vm.comment
    };
    console.log('its', its);
    hs.postItem('/messages', its).then(function(res) {
      swal({
        title: 'Thank you for your Support!',
        text: "We will be in contact",
        imageUrl: 'assets/jono4parks.png',
        imageWidth: 199,
        imageHeight: 84
      });
      vm.firstName = undefined;
      vm.lastName = undefined;
      vm.phone = undefined;
      vm.email = undefined;
      vm.comment = undefined;
    });
  };

  vm.sendSign = function() {
    console.log('click');
    let its = {
      firstSign: vm.firstSign,
      lastSign: vm.lastSign,
      address: vm.address,
      signPhone: vm.signPhone
    };
    console.log('its', its);
    hs.postItem('/signs', its).then(function(res) {
      swal({
        title: 'Thank you for your Support!',
        text: "We will be in contact",
        imageUrl: 'assets/jono4parks.png',
        imageWidth: 199,
        imageHeight: 84
      });
      vm.firstSign = undefined;
      vm.lastSign = undefined;
      vm.address = undefined;
      vm.signPhone = undefined;
    });
  };

vm.go = function (path) {
  console.log('donate');
  $window.open(path);
};

} //end controller
