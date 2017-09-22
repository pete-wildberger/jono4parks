angular.module('myApp').controller('AuthController', AuthController);

AuthController.$inject = ['$location', 'httpService', 'AuthFactory'];

function AuthController($location, httpService, AuthFactory) {
  console.log('AuthController');
  const vm = this,
    hs = httpService;

  vm.login = () => {
    hs.getItem('/auth/login').then(res => {
      console.log(`res${res}`);
      window.location.href = res.data;
    });
  };
  vm.login();
}
