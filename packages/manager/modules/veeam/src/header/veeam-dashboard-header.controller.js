export default class VeeamDashboardHeaderCtrl {
  /* @ngInject */
  constructor($state, $stateParams) {
    this.$state = $state;
    this.$stateParams = $stateParams;
    this.serviceName = $stateParams.serviceName;
  }
}
