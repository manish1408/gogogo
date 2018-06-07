(function() {
  'use strict';

  angular
    .module('gogogo')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
