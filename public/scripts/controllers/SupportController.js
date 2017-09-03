angular.module('myApp')
  .controller('SupportController', SupportController);
SupportController.$inject = ['$location', 'httpService', 'AuthFactory'];

function SupportController($location, httpService, AuthFactory) {
  console.log('SupportController');
  const vm = this;
  const hs = httpService;

  vm.addToList = function() {
    its = {
      firstName: vm.firstName,
      lastName: vm.lastName,
      phone: vm.phone,
      email: vm.email,
      comment: vm.comment
    };
    hs.postItem('/messages', its).then(function(res) {
      swal({
        title: 'Thank you for your Support!',
        text: "We will be in contact",
        imageUrl: 'public/assets/logo.png',
        imageWidth: 199,
        imageHeight: 84
      });
    });
  };

}//end controller
