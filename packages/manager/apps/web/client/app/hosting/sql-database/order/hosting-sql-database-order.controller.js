export default class HostingSqlDatabaseOrderCtrl {
  /* @ngInject */
  constructor(
    atInternet,
  ) {
    this.atInternet = atInternet;
  }

  $onInit() {
    // Auto-select
    console.log(this);
  }

  convertBytesSize(nb, unit = 'MB') {
    const res = filesize(this.WucConverterService.convertToOctet(nb, unit), { output: 'object', round: 0, base: -1 });
    const resUnit = this.$translate.instant(`unit_size_${res.symbol}`);

    return `${res.value} ${resUnit}`;
  }
}
