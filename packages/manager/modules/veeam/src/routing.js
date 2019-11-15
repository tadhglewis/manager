import template from './template.html';
import dashboardTemplate from './dashboard/veeam-dashboard.html';
import headerTemplate from './header/veeam-dashboard-header.html';
import storageTemplate from './storage/veeam-storage.html';

import dashboardCtrl from './dashboard/veeam-dashboard.controller';
import headerCtrl from './header/veeam-dashboard-header.controller';
import storageCtrl from './storage/veeam-storage.controller';

export default /* @ngInject */ ($stateProvider) => {
  $stateProvider
    .state('veeam', {
      url: '/paas/veeam',
      abstract: true,
      template,
      translations: {
        value: ['.'],
        format: 'json',
      },
    })
    .state('veeam.detail', {
      url: '/{serviceName}',
      views: {
        veeamContainer: {
          component: 'ovhManagerVeeamComponent',
        },
      },
    })
    .state('veeam.detail.dashboard', {
      url: '/dashboard',
      views: {
        veeamHeader: {
          template: headerTemplate,
          controller: headerCtrl,
          controllerAs: 'VeeamDashboardHeaderCtrl',
        },
        veeamContent: {
          template: dashboardTemplate,
          controller: dashboardCtrl,
          controllerAs: '$ctrl',
        },
      },
      translations: {
        value: ['.', './dashboard', './storage/add', './dashboard/update-offer'],
        format: 'json',
      },
    })
    .state('veeam.detail.storage', {
      url: '/storage',
      views: {
        veeamHeader: {
          template: headerTemplate,
          controller: headerCtrl,
          controllerAs: 'VeeamDashboardHeaderCtrl',
        },
        veeamContent: {
          template: storageTemplate,
          controller: storageCtrl,
          controllerAs: 'VeeamStorageCtrl',
        },
      },
      translations: {
        value: ['.', './storage', './storage/add'],
        format: 'json',
      },
    });
};
