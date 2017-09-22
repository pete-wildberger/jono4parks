"use strict";function openNav(){document.getElementById("mySidenav").style.width="40%"}function closeNav(){document.getElementById("mySidenav").style.width="0"}angular.module("myApp",["ngRoute","xeditable"]),angular.module("myApp").run(["editableOptions",function(e){e.theme="default"}]);
"use strict";function router(e,l){e.when("/",{templateUrl:"/views/partials/welcome.html",controller:"IndexController as ic",controllerAs:"ic"}).when("/endorsements",{templateUrl:"/views/partials/endorse.html",controller:"EndorseController as ec",controllerAs:"ec"}).when("/dash",{templateUrl:"/views/partials/dashboard.html",controller:"DashController as dc",controllerAs:"dc"}).when("/admin",{templateUrl:"/views/partials/admin.html",controller:"IndexController as ic",controllerAs:"ic"}).when("/issues",{templateUrl:"/views/partials/issues.html",controller:"IndexController as ic",controllerAs:"ic"}).when("/about",{templateUrl:"/views/partials/about.html",controller:"IndexController as ic",controllerAs:"ic"}).when("/support",{templateUrl:"/views/partials/support.html",controller:"SupportController as sc",controllerAs:"sc"}).when("/events",{templateUrl:"/views/partials/events.html",controller:"EventsController as ec",controllerAs:"ec"}).when("/auth/google",{templateUrl:"/views/partials/google.html",controller:"AuthController as ac",controllerAs:"ac"}),l.html5Mode(!0),l.hashPrefix("")}angular.module("myApp").config(router),router.$inject=["$routeProvider","$locationProvider"];
"use strict";function IndexController(o,n,e){console.log("IndexController"),this.go=function(n){console.log("donate"),o.path(n)}}angular.module("myApp").controller("IndexController",IndexController),IndexController.$inject=["$location","httpService","AuthFactory"];
"use strict";function DashController(e,t,n){console.log("DashController");var o=this,a=t;o.endorse=!1,o.event=!1,o.message=!1,o.signs=!1,o.tableData=[],o.changes={},window.onclick=function(e){var t=e.target.getAttribute("id");"modal"==e.target.getAttribute("class")&&(document.getElementById(t).style.display="none")},a.getItem("auth").then(function(t){t.data.name?o.name=t.data.name.googleName:(alert("log in please"),e.path("/"))}),o.populateTable=function(e){a.getItem(e).then(function(e){console.log(e.data),o.tableData=e.data})},n.isLoggedIn().then(function(e){e.data.status?(o.displayLogout=!0,n.setLoggedIn(!0),o.username=e.data.name):(o.displayLogout=!1,n.setLoggedIn(!1))},function(){o.message.text="Unable to properly authenticate user",o.message.type="error"}),o.logout=function(){n.logout().then(function(t){n.setLoggedIn(!1),o.username="",e.path("/")},function(e){o.message.text="Unable to logout",o.message.type="error"})},o.showTable=function(e){0==e?(o.populateTable("/endorse"),o.endorse=!o.endorse,o.event=!1,o.message=!1,o.signs=!1):1==e?(o.populateTable("/events"),o.endorse=!1,o.event=!o.event,o.message=!1,o.signs=!1):2==e?(o.populateTable("/messages"),o.endorse=!1,o.event=!1,o.message=!o.message,o.signs=!1):3==e&&(o.populateTable("/private/signs"),o.endorse=!1,o.event=!1,o.message=!1,o.signs=!o.signs)},o.openEndorseModal=function(e){document.getElementById("endorseModal").style.display="block";var t=o.tableData.indexOf(e);o.changes=o.tableData[t]},o.openEventModal=function(e){document.getElementById("eventModal").style.display="block";var t=o.tableData.indexOf(e);o.changes=o.tableData[t]},o.openMessageModal=function(e){document.getElementById("messageModal").style.display="block";var t=o.tableData.indexOf(e);o.changes=o.tableData[t]},o.addToEvents=function(){var e={eventName:o.eventName,date:o.date,time:o.time,location:o.location,url:o.url,description:o.description};console.log("its",e),a.postItem("/private/events",e).then(function(e){o.eventName=void 0,o.date=void 0,o.time=void 0,o.location=void 0,o.description=void 0,o.populateTable("/events")})},o.editEndorse=function(e){a.putItem("/private/endorse",e,o.changes).then(function(e){o.changes={},o.populateTable("/endorse"),document.getElementById("endorseModal").style.display="none"})},o.editEvents=function(e){a.putItem("/private/events",e,o.changes).then(function(e){o.changes={},o.populateTable("/events"),document.getElementById("eventModal").style.display="none"})},o.removeEndorse=function(e){console.log("remove"),swal({title:"Are you sure?",text:"You won't be able to revert this!",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(function(){a.deleteItem("private/endorse",e).then(function(e){o.populateTable("/endorse")}),swal("Deleted!","Your file has been deleted.","success")})},o.removeMessage=function(e){console.log("remove"),swal({title:"Are you sure?",text:"You won't be able to revert this!",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(function(){a.deleteItem("private/messages",e).then(function(e){o.populateTable("/messages")}),swal("Deleted!","Your file has been deleted.","success")})},o.removeEvent=function(e){console.log("remove"),swal({title:"Are you sure?",text:"You won't be able to revert this!",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(function(){a.deleteItem("private/events",e).then(function(e){o.populateTable("/events")}),swal("Deleted!","Your file has been deleted.","success")})},o.removeSign=function(e){console.log("remove"),swal({title:"Are you sure?",text:"You won't be able to revert this!",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(function(){a.deleteItem("private/signs",e).then(function(e){o.populateTable("/private/signs")}),swal("Deleted!","Your file has been deleted.","success")})}}angular.module("myApp").controller("DashController",DashController),DashController.$inject=["$location","httpService","AuthFactory"];
"use strict";function EndorseController(o,e){function t(o,e){for(var t=[],n=0;n<o.length;n+=e)t.push(o.slice(n,n+e));return t}console.log("EndorseController");var n=this,r=e;n.displayEndorsements=function(){r.getItem("/endorse").then(function(o){console.log("getres",o),n.endorseArr=t(o.data,3)})},n.addEndorsement=function(){var o={firstName:n.firstName,lastName:n.lastName,occupation:n.occupation};r.postItem("/endorse",o).then(function(o){console.log("postres",o),swal({title:"Sweet!",text:"Thank you for your support!",imageUrl:"assets/logo.png",imageWidth:400,imageHeight:200,animation:!1}),n.firstName=void 0,n.lastName=void 0,n.occupation=void 0,n.displayEndorsements()})},n.displayEndorsements()}angular.module("myApp").controller("EndorseController",EndorseController),EndorseController.$inject=["$location","httpService"];
"use strict";function EventsController(t,e,n){console.log("EventsController");var o=this,r=e;o.eventsArr=[],o.displayEvents=function(){r.getItem("/events").then(function(t){console.log("getres",t),o.eventsArr=t.data})},o.displayEvents()}angular.module("myApp").controller("EventsController",EventsController),EventsController.$inject=["$location","httpService","AuthFactory"];
"use strict";function SupportController(o,t,e,n){console.log("SupportController");var i=this,s=t;i.addToList=function(){var o={firstName:i.firstName,lastName:i.lastName,phone:i.phone,email:i.email,comment:i.comment};console.log("its",o),s.postItem("/messages",o).then(function(o){swal({title:"Thank you for your Support!",text:"We will be in contact",imageUrl:"assets/jono4parks.png",imageWidth:199,imageHeight:84}),i.firstName=void 0,i.lastName=void 0,i.phone=void 0,i.email=void 0,i.comment=void 0})},i.sendSign=function(){console.log("click");var o={firstSign:i.firstSign,lastSign:i.lastSign,address:i.address,signPhone:i.signPhone};console.log("its",o),s.postItem("/signs",o).then(function(o){swal({title:"Thank you for your Support!",text:"We will be in contact",imageUrl:"assets/jono4parks.png",imageWidth:199,imageHeight:84}),i.firstSign=void 0,i.lastSign=void 0,i.address=void 0,i.signPhone=void 0})},i.go=function(o){console.log("donate"),n.open(o)}}angular.module("myApp").controller("SupportController",SupportController),SupportController.$inject=["$location","httpService","AuthFactory","$window"];
"use strict";function AuthController(o,t,l){console.log("AuthController");var n=this,r=t;n.login=function(){r.getItem("/auth/login").then(function(o){console.log("res"+o),window.location.href=o.data})},n.login()}angular.module("myApp").controller("AuthController",AuthController),AuthController.$inject=["$location","httpService","AuthFactory"];
"use strict";function httpService(e){var t=this;t.getItem=function(t){return e.get(t).then(function(e){return e})},t.getWithID=function(t,n){return e.get(t+"/"+n).then(function(e){return console.log("service getWithId: ",e),e})},t.postItem=function(t,n){return e.post(t,n).then(function(e){return console.log("service posted",e),e})},t.putItem=function(t,n,r){return console.log("its: ",r),e.put(t+"/"+n,r).then(function(e){return console.log("service updated",e),e})},t.deleteItem=function(t,n){return e.delete(t+"/"+n).then(function(e){return console.log("service deleted",e),e})}}angular.module("myApp").service("httpService",httpService),httpService.$inject=["$http"];
"use strict";function AuthFactory(t){var n={loggedIn:!1};return{Status:n,checkLoggedIn:function(){return n.loggedIn},isLoggedIn:function(){return t.get("/auth")},setLoggedIn:function(t){n.loggedIn=t},logout:function(){return t.get("/auth/logout")}}}angular.module("myApp").factory("AuthFactory",AuthFactory),AuthFactory.$inject=["$http"];