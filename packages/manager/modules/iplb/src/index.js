import angular from 'angular';

/* eslint-disable import/no-webpack-loader-syntax */
// eslint-disable-next-line import/extensions
import 'script-loader!chart.js/dist/Chart.js';
// eslint-disable-next-line import/extensions
import 'script-loader!angular-chart.js/dist/angular-chart.js';
/* eslint-enable import/no-webpack-loader-syntax */

import '@ovh-ux/manager-core';
import '@ovh-ux/ng-ovh-cloud-universe-components';
import '@ovh-ux/ng-ovh-sidebar-menu';
import '@uirouter/angularjs';
import 'angular-translate';
import 'angular-ui-bootstrap';
import 'ovh-api-services';
import 'ovh-ui-angular';
import '@ovh-ux/manager-cloud-styles';
import ngOvhDocUrl from '@ovh-ux/ng-ovh-doc-url';

import IpLoadBalancerActionService from './iplb-action.service';
import IpLoadBalancerCipherService from './iplb-cipher.service';
import IpLoadBalancerConstant from './iplb.constants';
import IpLoadBalancerDetailCtrl from './iplb-detail.controller';
import IpLoadBalancerFailoverIpService from './iplb-failover-ip.service';
import IpLoadBalancerMetricsService from './iplb-metrics.service';
import IpLoadBalancerNatIpService from './iplb-nat-ip.service';
import IpLoadBalancerZoneService from './iplb-zone.service';
import IpLoadBalancerNatIpDetailCtrl from './modal/nat-ip/iplb-nat-ip-detail.controller';
import IpLoadBalancerFailoverIpDetailCtrl from './modal/failover-ip/iplb-failover-ip-detail.controller';
import IpLoadBalancerCipherChangeCtrl from './modal/cipher/iplb-cipher-change.controller';
import IplbConfigurationModule from './configuration';
import IplbFrontendsModule from './frontends';
import IplbGraphModule from './graph';
import IplbHomeModule from './home';
import IplbServerFormModule from './serverFarm';
import IplbSSLcertificateModule from './sslCertificate';
import IplbTaskModule from './task';
import IplbVrackModule from './vrack';
import IplbZoneModule from './zone';

import routing from './routing';

import 'ovh-ui-kit/dist/oui.css';
import 'ovh-ui-kit-bs/dist/ovh-ui-kit-bs.css';
import './iplb.less';
import './index.scss';

const moduleName = 'ovhManagerIplb';

angular
  .module(moduleName, [
    'ovhManagerCore',
    'pascalprecht.translate',
    'ui.router',
    'ngOvhCloudUniverseComponents',
    'ngOvhSidebarMenu',
    'ui.bootstrap',
    'ovh-api-services',
    'oui',
    'chart.js',
    ngOvhDocUrl,
    IplbSSLcertificateModule,
    IplbTaskModule,
    IplbVrackModule,
    IplbZoneModule,
    IplbServerFormModule,
    IplbHomeModule,
    IplbGraphModule,
    IplbFrontendsModule,
    IplbConfigurationModule,
  ])
  .config(routing)
  .config(/* @ngInject */($qProvider, ovhDocUrlProvider, TranslateServiceProvider) => {
    ovhDocUrlProvider.setUserLocale(TranslateServiceProvider.getUserLocale());
    $qProvider.errorOnUnhandledRejections(false);
  })
  .controller('IpLoadBalancerDetailCtrl', IpLoadBalancerDetailCtrl)
  .service('IpLoadBalancerActionService', IpLoadBalancerActionService)
  .service('IpLoadBalancerCipherService', IpLoadBalancerCipherService)
  .service('IpLoadBalancerFailoverIpService', IpLoadBalancerFailoverIpService)
  .service('IpLoadBalancerMetricsService', IpLoadBalancerMetricsService)
  .service('IpLoadBalancerNatIpService', IpLoadBalancerNatIpService)
  .service('IpLoadBalancerZoneService', IpLoadBalancerZoneService)
  .constant('IpLoadBalancerConstant', IpLoadBalancerConstant)
  .controller('IpLoadBalancerNatIpDetailCtrl', IpLoadBalancerNatIpDetailCtrl)
  .controller('IpLoadBalancerFailoverIpDetailCtrl', IpLoadBalancerFailoverIpDetailCtrl)
  .controller('IpLoadBalancerCipherChangeCtrl', IpLoadBalancerCipherChangeCtrl)
  .run(/* @ngTranslationsInject:json ./translations */);

export default moduleName;
