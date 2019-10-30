import angular from 'angular';

import component from './easter-eggs.component';

const moduleName = 'publicCloudEasterEggs';

angular
  .module(moduleName, [])
  .component('publicCloudEasterEggs', component)
  .run(/* @ngTranslationsInject:json ./modal/translations */);

export default moduleName;
