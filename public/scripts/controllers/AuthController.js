angular.module('myApp').controller('AuthController', AuthController);

AuthController.$inject = ['$location', 'httpService', 'AuthFactory'];

function AuthController($location, httpService, AuthFactory) {
  console.log('AuthController');
  const vm = this,
    httpService = hs;

  window.location.href =
    'https://accounts.google.com/signin/oauth/oauthchooseaccount?client_id=642489405428-iucab0562806f7q32g26a4t30nmcsprn.apps.googleusercontent.com&as=4a023fe17a06ba5&destination=http%3A%2F%2Fjono4parks.org&approval_state=!ChQwNGpZRlY2a0dtbUhoRXFyeTJDRBIfbzJ6Q01VZ0FzLXNlZ0dULWVTYTM3MXg1TXNXLTV4VQ%E2%88%99AHw7d_cAAAAAWbqkhrkgVL_TIT0wSRJc-gM5-lc-gwDa&xsrfsig=AHgIfE9VxVUVG9HavTtyQBRlQ5PbGDylgg&flowName=GeneralOAuthFlow';
}
