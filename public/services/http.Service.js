app.service('httpService', function($http) {
  var sv = this;
  
  // httpServices
  sv.getPosts = function(path) {
    return $http.get(path).then(function(response) {
      return response.data;
    });
  };
  sv.getProfiles = function(path, id) {
    return $http.get(path + '/'+ id).then(function(response) {
      console.log('service: ', response);
      sv.patientsArray = response.data;
      console.log('service array', sv.patientsArray);
      return response.data;
    });
  };

  sv.postPosts = function(path, its) {
    return $http.post(path, its).then(function(response) {
      console.log('back from server with:', response);
      return response;
    });
  };
  sv.putPost = function(path, id, its) {
    console.log('its: ', its);
      return $http.put(path + id, its).then(function(response){
        console.log('updated', response);
        return response;
      });
    };
  sv.deletePost = function(path, id) {
      return $http.delete(path + '/'+ id).then(function(response){
        console.log('deleted', response);
        return response;
      });
    };

});
