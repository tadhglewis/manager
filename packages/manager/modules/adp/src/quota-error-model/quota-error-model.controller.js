export default class {
  /* @ngInject */
  constructor($state, $uibModalInstance, publicCloudName, publicCloudId, quotas) {
    this.$state = $state;
    this.$uibModalInstance = $uibModalInstance;
    this.publicCloudName = publicCloudName;
    this.publicCloudId = publicCloudId;
    this.quotas = quotas;
  }

  dismissModal() {
    this.$uibModalInstance.dismiss('cancel');
  }

  closeModal() {
    this.$uibModalInstance.close();
    this.$state.go('iaas.pci-project.compute.quota', { projectId: this.publicCloudId });
  }
}
