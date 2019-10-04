import angular from 'angular';
import '@uirouter/angularjs';
import 'oclazyload';

const moduleName = 'enterpriseCloudDatabaseServiceDetailsLogs';

angular.module(moduleName, [
  'oc.lazyLoad',
  'ui.router',
]).config(/* @ngInject */($stateProvider) => {
  $stateProvider.state('enterprise-cloud-database.service.details.logs.**', {
    url: '/logs',
    lazyLoad: ($transition$) => {
      const $ocLazyLoad = $transition$.injector().get('$ocLazyLoad');
      return import('./logs.module')
        .then(mod => $ocLazyLoad.inject(mod.default || mod));
    },
  });
});

export default moduleName;
