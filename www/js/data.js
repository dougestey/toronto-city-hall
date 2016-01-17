angular.module('hall.data', ['swagger-client']).provider('cityApi', function($windowProvider) {
  var $window = $windowProvider.$get();
  var schema = $window.toCityHallSchema;

  // Override the basepath in the loaded schema
  this.basePath = function(basePath) {
    schema.apis.forEach(function(api) {
      api.apiDeclaration.basePath = basePath;
    });
  };

  this.$get = ['swaggerClient', function(swaggerClient) {
    var api = swaggerClient(schema);

    return api;
  }];
});
