import get from 'lodash/get';
import startsWith from 'lodash/startsWith';

import {
  HEADER_LOCALE,
} from './translate.constants';

export default /* @ngInject */ TranslateService => ({
  request: (config) => {
    const headerConfig = {
      ...config,
      headers: {
        ...config.headers,
      },
    };
    // do not set content-language header for CORS requests
    if (!startsWith(get(headerConfig, 'url'), 'https://')) {
      headerConfig.headers[HEADER_LOCALE] = TranslateService.getUserLocale();
    }
    return headerConfig;
  },
});
