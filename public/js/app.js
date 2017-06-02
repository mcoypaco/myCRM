'use strict';

(function () {
  'use strict';

  angular.module('app', [
  // Shared modules
  'app.core',
  // Features
  'app.dashboard']);
})();

(function () {
  'use strict';

  angular.module('app.core', [
  // Angular modules
  'ngMaterial', 'ngMessages',
  // 3rd-party modules
  'angularMoment', 'ui.router', 'ui.calendar', 'ui.bootstrap']);
})();

(function () {
  'use strict';

  angular.module('app.dashboard', []);
})();

(function () {
  'use strict';

  angular.module('app.dashboard').controller('TestController', TestController);

  TestController.$inject = ['$http'];

  function TestController($http) {
    var vm = this;
  }
})();