angular.module('angularTwilioClient', [])
.controller('TwilioClientController', ['$scope', function($scope) {
}])
.directive('twilioClient', function() {
  return {
    templateUrl: 'angular-twilio-client.template.html'
  };
});