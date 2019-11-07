/* eslint-disable import/no-webpack-loader-syntax */
import 'script-loader!jquery';
import 'script-loader!moment/min/moment-with-locales.min';
/* eslint-enable import/no-webpack-loader-syntax */

import '@ovh-ux/manager-iplb';

import './index.scss';
import { momentConfiguration } from './config';

angular
  .module('iplbApp', [
    'ovhManagerIplb',
  ])
  .config(/* @ngInject */($qProvider) => {
    $qProvider.errorOnUnhandledRejections(false);
  })
  .config(momentConfiguration);
