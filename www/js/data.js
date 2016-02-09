angular.module('hall.data', ['swagger-client', 'hall.constants']).provider('cityApi', function(apiUrlStaging, $windowProvider) {
  var $window = $windowProvider.$get();
  var schema = $window.toCityHallSchema;
  var apiUrl = apiUrlStaging;

  // Override the basepath in the loaded schema
  this.basePath = function(basePath) {
    schema.apis.forEach(function(api) {
      api.apiDeclaration.basePath = basePath;
    });
  };

  this.basePath(apiUrl);

  this.$get = ['swaggerClient', function(swaggerClient) {
    var api = swaggerClient(schema);

    return api;
  }];
});
