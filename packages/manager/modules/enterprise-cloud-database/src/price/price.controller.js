export default class EnterpriseCloudDatabasePriceCtrl {
  /* @ngInject */
  constructor(
    enterpriseCloudDatabaseService,
  ) {
    this.service = enterpriseCloudDatabaseService;
    this.frenchTouch = ['CZ', 'ES', 'FR', 'GB', 'IE', 'IT', 'LT', 'MA', 'NL', 'PL', 'PT', 'TN'];
    this.deutchTouch = ['DE', 'FI', 'SN'];
    this.usTouch = ['CA', 'WE', 'WS', 'QC', 'US'];
    this.asiaTouch = ['SG', 'ASIA', 'AU'];
    this.ovhSubsidiary = this.service.userData.ovhSubsidiary;
  }

  $onInit() {
    this.priceWithTaxText = this.service.getPriceText(this.price + this.tax);
    this.priceWithoutTaxText = this.service.getPriceText(this.price);
  }
}
