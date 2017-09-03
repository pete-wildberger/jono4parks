angular.module('myApp')
  .controller('SupportController', SupportController);
SupportController.$inject = ['$location', 'httpService', 'AuthFactory'];

function SupportController($location, httpService, AuthFactory) {
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
        imageUrl: 'public/assets/jono4parks.png',
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


} //end controller
