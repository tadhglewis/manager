import get from 'lodash/get';

export default /* @ngInject */ ($stateProvider) => {
  $stateProvider.state('app.hosting.sql-database.order', {
    url: '/order?orderType&currentHosting',
    params: {
      currentHosting: { value: null, squash: true },
      orderType: { value: 'private' },
    },
    component: 'hostingSqlDatabaseOrder',
    resolve: {
      catalogProducts: /* @ngInject */ (
        goBack,
        serviceOptions,
        user,
        $translate,
        HostingSqlDatabaseOrderService,
      ) => HostingSqlDatabaseOrderService
        .getCatalogProducts(user.ovhSubsidiary, serviceOptions)
        .catch(error => goBack(
          $translate.instant('hosting_sql_database_order_error', { message: get(error, 'data.message', error) }),
          'danger',
        )),

      goBack: /* @ngInject */ goToHosting => goToHosting,

      serviceName: /* @ngInject */ $transition$ => $transition$.params().productId,

      serviceOptions: /* @ngInject */ (
        goBack,
        serviceName,
        $translate,
        HostingSqlDatabaseOrderService,
      ) => HostingSqlDatabaseOrderService
        .getServiceOptions(serviceName)
        .catch(error => goBack(
          $translate.instant('hosting_sql_database_order_error', { message: get(error, 'data.message', error) }),
          'danger',
        )),
    },
  });
};
