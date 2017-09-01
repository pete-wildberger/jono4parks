function openNav() {
  document.getElementById("mySidenav").style.width = "40%";
  // document.getElementById("main").style.marginLeft = "230px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  // document.getElementById("main").style.marginLeft = "0";
}

window.onclick = function(event) {
  id = event.target.getAttribute("id");
  if (event.target.getAttribute("class") == 'modal') {
    document.getElementById(id).style.display = 'none';
  }
};

const app = angular.module('myApp', ["ngRoute", "xeditable"]);

app.run(function(editableOptions) {
  editableOptions.theme = 'default'; // bootstrap3 theme. Can be also 'bs2', 'default'
});
