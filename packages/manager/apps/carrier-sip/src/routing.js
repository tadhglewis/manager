export default /* @ngInject */ ($stateProvider) => {
  $stateProvider.state('app', {
    url: '/billingAccount/:billingAccount/carrierSip/:serviceName',
    component: 'carrierSipDashboard',
    resolve: {
      billingAccount: /* @ngInject */ ($transition$) => $transition$.params().billingAccount,
      carrierSip: /* @ngInject */ (
        billingAccount,
        CarrierSipService,
        serviceName,
      ) => CarrierSipService.getCarrierSip(billingAccount, serviceName),
      cdrsLink: /* @ngInject */ (
        $state,
        billingAccount,
        serviceName,
      ) => $state.href('app.cdrs', { billingAccount, serviceName }),
      currentActiveLink: /* @ngInject */ ($transition$, $state) => () => $state
        .href($state.current.name, $transition$.params()),
      dashboardLink: /* @ngInject */ (
        $state,
        billingAccount,
        serviceName,
      ) => $state.href('app', { billingAccount, serviceName }),
      endpointsLink: /* @ngInject */ (
        $state,
        billingAccount,
        serviceName,
      ) => $state.href('app.endpoints', { billingAccount, serviceName }),
      serviceInfos: /* @ngInject */ (
        CarrierSipService,
        serviceName,
      ) => CarrierSipService.getServiceInfos(serviceName),
      serviceName: /* @ngInject */ ($transition$) => $transition$.params().serviceName,
      settings: /* @ngInject */ (
        billingAccount,
        CarrierSipService,
        serviceName,
      ) => CarrierSipService.getSettings(billingAccount, serviceName),
    },
  });
};
