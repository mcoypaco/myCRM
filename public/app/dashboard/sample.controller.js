(() => {
  'use strict';

  angular
    .module('app.dashboard')
    .controller('TestController', TestController)

    TestController.$inject = ['$http'];

    function TestController($http) {
      var vm = this;
    }
})();
