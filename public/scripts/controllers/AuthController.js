angular.module('myApp').controller('AuthController', AuthController);

AuthController.$inject = ['$location', 'httpService', 'AuthFactory'];

function AuthController($location, httpService, AuthFactory) {
  console.log('AuthController');
  const vm = this;

  window.location.href =
    'https://accounts.google.com/signin/oauth/oauthchooseaccount?client_id=642489405428-iucab0562806f7q32g26a4t30nmcsprn.apps.googleusercontent.com&as=-47f6db9e80e7a27f&destination=http%3A%2F%2Flocalhost%3A4000&approval_state=!ChQ5QWtEU0hEVEpGSGdxLWtCeGlCSBIfNF9MWmRiaDlpR3NaNEpEYnJUUGdXM0RzUzdTOTV4VQ%E2%88%99AHw7d_cAAAAAWbqgKSoJi3mJfe35XkSD-kH0OkzWQ_zd&xsrfsig=AHgIfE_V_vkq9-owVlJuXJTfdsDoYZXH6g&flowName=GeneralOAuthFlow';
}
