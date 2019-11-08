import find from 'lodash/find';
import remove from 'lodash/remove';

import {
  CATALOG_PRODUCT_NAME,
  SERVICE_OPTIONS_FAMILY,
} from './hosting-sql-database-order.constant';

export default class HostingSqlDatabaseOrderService {
  /* @ngInject */
  constructor(OrderService) {
    this.OrderService = OrderService;
  }

  async getCatalogProducts(
    ovhSubsidiary,
    serviceOptions,
  ) {
    const result = {};
    Object.keys(SERVICE_OPTIONS_FAMILY).forEach(async (key) => {
      if (serviceOptions[key] && serviceOptions[key].length) {
        const { name, category } = CATALOG_PRODUCT_NAME[key];
        const catalog = await this.OrderService
          .getProductPublicCatalog(ovhSubsidiary, name);

        result[key] = serviceOptions[key].map(
          item => find(catalog[category], { planCode: item.planCode }),
        );
      }
    });

    return result;
  }

  async getServiceOptions(serviceName) {
    const serviceOptions = await this.OrderService
      .getProductServiceOptions('webHosting', serviceName);

    if (!serviceOptions.length) {
      throw new Error('No serviceOptions found');
    }

    const result = {};
    Object.keys(SERVICE_OPTIONS_FAMILY).forEach((key) => {
      result[key] = remove(
        serviceOptions,
        item => item.family && item.family.includes(SERVICE_OPTIONS_FAMILY[key]),
      );
    });

    return result;
  }
}
