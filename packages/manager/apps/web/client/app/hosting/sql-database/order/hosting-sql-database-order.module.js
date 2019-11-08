import component from './hosting-sql-database-order.component';
import routing from './hosting-sql-database-order.routing';
import service from './hosting-sql-database-order.service';

const moduleName = 'ovhManagerHostingSqlDatabaseOrder';

angular
  .module(moduleName, [])
  .config(routing)
  .component('hostingSqlDatabaseOrder', component)
  .service('HostingSqlDatabaseOrderService', service)
  .run(/* @ngTranslationsInject:json ./translations */);

export default moduleName;
