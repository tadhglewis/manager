import storageAddTemplate from './add/veeam-storage-add.html';
import updateQuotaTemplate from './update-quota/veeam-storage-update-quota.html';
import storageAddCtrl from './add/veeam-storage-add.controller';
import updateQuotaCtrl from './update-quota/veeam-storage-update-quota.controller';

export default class VeeamStorageCtrl {
  /* @ngInject */
  constructor($stateParams, $translate, CucControllerHelper, CucRegionService, VeeamService) {
    this.$stateParams = $stateParams;
    this.$translate = $translate;
    this.CucControllerHelper = CucControllerHelper;
    this.CucRegionService = CucRegionService;
    this.VeeamService = VeeamService;

    this.storageInfos = CucControllerHelper.request.getArrayLoader({
      loaderFunction: () => this.VeeamService.getStorages(this.$stateParams.serviceName),
      errorHandler: response => this.VeeamService.unitOfWork.messages.push({
        text: response.message,
        type: 'error',
      }),
    });

    this.actions = this.CucControllerHelper.request.getArrayLoader({
      loaderFunction: () => this.VeeamService.getActions(this.$stateParams.serviceName),
    });

    this.capabilities = this.CucControllerHelper.request.getHashLoader({
      loaderFunction: () => this.VeeamService.getCapabilities(this.$stateParams.serviceName),
    });
  }

  getRegionText(region) {
    return this.CucRegionService.getTranslatedMicroRegion(region.toUpperCase());
  }

  addStorage() {
    if (this.actions.data.addStorage.available) {
      this.CucControllerHelper.modal.showModal({
        modalConfig: {
          template: storageAddTemplate,
          controller: storageAddCtrl,
          controllerAs: 'VeeamStorageAddCtrl',
          resolve: {
            serviceName: () => this.$stateParams.serviceName,
          },
        },
      })
        .then((result) => {
          this.VeeamService.startPolling(this.$stateParams.serviceName, result.data)
            .then(this.storageInfos.load.bind(this));
        })
        .catch(err => this.VeeamService.unitOfWork.messages.push({
          text: err.message,
          type: 'error',
        }));
    } else {
      this.CucControllerHelper.modal.showWarningModal({
        title: this.$translate.instant('veeam_common_action_unavailable'),
        message: this.actions.data.addStorage.reason,
      });
    }
  }

  updateQuota(inventoryName) {
    this.CucControllerHelper.modal.showModal({
      modalConfig: {
        template: updateQuotaTemplate,
        controller: updateQuotaCtrl,
        controllerAs: 'VeeamStorageUpdateQuotaCtrl',
        resolve: {
          inventoryName: () => inventoryName,
          serviceName: () => this.$stateParams.serviceName,
        },
      },
    })
      .then((result) => {
        this.VeeamService.startPolling(this.$stateParams.serviceName, result.data)
          .then(this.storageInfos.load.bind(this));
      })
      .catch(error => this.VeeamService.unitOfWork.messages.push({
        text: error.message,
        type: 'error',
      }));
  }

  $onInit() {
    this.storageInfos.load();
    this.actions.load();
    this.capabilities.load();
  }
}
