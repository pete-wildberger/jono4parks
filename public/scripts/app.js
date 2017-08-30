function openNav() {
  document.getElementById("mySidenav").style.width = "230px";
  // document.getElementById("main").style.marginLeft = "230px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  // document.getElementById("main").style.marginLeft = "0";
}

const app = angular.module('myApp', ["ngRoute"]);
